'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ThankYouContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const subject = searchParams.get('subject') || '';
  const message = searchParams.get('message') || '';
  const phone = searchParams.get('phone') || undefined;
  const company = searchParams.get('company') || undefined;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Message Sent Successfully!</h1>
          <p className="text-xl max-w-3xl text-slate-200">
            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Message Preview Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Your Message</h2>
              <p className="text-gray-600">A copy of your message is shown below:</p>
            </div>

            {/* Email-style layout */}
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-500 min-w-[80px]">From:</span>
                  <span className="text-gray-900">{name}</span>
                  <span className="text-gray-500">&lt;{email}&gt;</span>
                </div>
                {phone && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-500 min-w-[80px]">Phone:</span>
                    <span className="text-gray-900">{phone}</span>
                  </div>
                )}
                {company && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-500 min-w-[80px]">Company:</span>
                    <span className="text-gray-900">{company}</span>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-sm font-semibold text-gray-500 min-w-[80px]">Subject:</span>
                  <span className="text-gray-900">{subject}</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-gray-500">Message:</span>
                </div>
                <div className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {message}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">What&apos;s Next?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            I typically respond within 24-48 hours. In the meantime, feel free to explore my projects and experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/projects" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block">
              View My Projects
            </Link>
            <Link href="/experience" className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-block">
              See My Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}

