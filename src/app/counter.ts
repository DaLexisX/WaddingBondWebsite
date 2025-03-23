'use server'
import { headers } from 'next/headers'
import admin from 'firebase-admin'

// Initialize Firebase if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  })
}

const db = admin.firestore()
const counterRef = db.collection('counters').doc('page_views')
const logsRef = db.collection('access_logs')

// Increment counter and log access
export async function incrementAndLog() {
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
  const path = headersList.get('x-forwarded-host') || '/'
  
  // Increment counter
  await counterRef.set({
    value: admin.firestore.FieldValue.increment(1)
  }, { merge: true })
  
  // Log access
  await logsRef.add({
    ip,
    path,
    accessed_at: admin.firestore.Timestamp.now()
  })
  
  // Get updated count
  const countDoc = await counterRef.get()
  const count = countDoc.exists ? countDoc.data()?.value || 0 : 0
  
  // Get recent logs
  const recentLogs = await logsRef
    .orderBy('accessed_at', 'desc')
    .limit(5)
    .get()
  
  const logs = recentLogs.docs.map(doc => ({
    accessed_at: doc.data().accessed_at.toDate().toISOString()
  }))
  
  return {
    count,
    recentAccess: logs
  }
}

// Get current count and recent access logs
export async function getStats() {
  // Get count
  const countDoc = await counterRef.get()
  const count = countDoc.exists ? countDoc.data()?.value || 0 : 0
  
  // Get recent logs
  const recentLogs = await logsRef
    .orderBy('accessed_at', 'desc')
    .limit(5)
    .get()
  
  const logs = recentLogs.docs.map(doc => ({
    accessed_at: doc.data().accessed_at.toDate().toISOString()
  }))
  
  return {
    count,
    recentAccess: logs
  }
}
