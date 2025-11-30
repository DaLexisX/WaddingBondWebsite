'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function KaraokeNameProject() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const selectOptimalSource = async () => {
      try {
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        
        if (connection) {
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink;
          
          if (downlink >= 5 || effectiveType === '4g') {
            video.src = '/videos/projects/karaoke-name/karaoke_name_homepage_1080p.mp4';
          } else if (downlink >= 2.5 || effectiveType === '3g') {
            video.src = '/videos/projects/karaoke-name/karaoke_name_homepage_720p.mp4';
          } else {
            video.src = '/videos/projects/karaoke-name/karaoke_name_homepage_480p.mp4';
          }
        } else {
          video.src = '/videos/projects/karaoke-name/karaoke_name_homepage_720p.mp4';
        }
        
        video.load();
      } catch (error) {
        if (video) {
          video.src = '/videos/projects/karaoke-name/karaoke_name_homepage_720p.mp4';
          video.load();
        }
      }
    };

    selectOptimalSource();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video) {
            video.play().catch((error) => {
              console.log('Autoplay prevented:', error);
            });
          } else if (video) {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex flex-col items-center">
              <Image
                src="/images/karaoke_name_logo_300w.png"
                alt="Karaoke Name Logo"
                width={300}
                height={100}
                className="mb-4 h-auto"
              />
              <p className="text-xl text-center max-w-2xl mb-4">
                Real-time karaoke gig management platform for singers, hosts and venues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="mb-10">
              <p className="text-gray-700 mb-4">
                Karaoke Name is a comprehensive companion web application for karaoke gig management. It serves as the primary interface 
                for Hosts (KJs) to manage gigs, queues, and analytics, and for Singers to discover gigs, manage their song history, 
                and interact with the queue in real-time.
              </p>
              <p className="text-gray-700 mb-4">
                Built upon a robust architecture leveraging Firebase for real-time synchronization, the platform enables seamless 
                coordination between singers and hosts during live karaoke events. The application features location-based gig discovery, 
                real-time queue management, and comprehensive analytics for hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Video */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">See It In Action</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Experience the interactive homepage with 3D elements and smooth animations.
            </p>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <video 
                ref={videoRef}
                className="w-full h-auto"
                controls
                preload="metadata"
                playsInline
                loop
                muted
              >
                <source src="/videos/projects/karaoke-name/karaoke_name_homepage_720p.mp4" type="video/mp4" />
                <source src="/videos/projects/karaoke-name/karaoke_name_homepage_480p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Real-Time Queue Management</h3>
                <p className="text-gray-600">
                  Hosts can manage song requests in real-time with drag-and-drop reordering, status updates, and singer grouping. 
                  Singers see live queue updates as requests are processed.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Location-Based Gig Discovery</h3>
                <p className="text-gray-600">
                  Leaflet-based map showing active and upcoming gigs near the user's location. Filterable list view by date, distance, 
                  and host for easy gig discovery.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Song History & Favorites</h3>
                <p className="text-gray-600">
                  Personal song history with filtering by venue and host. Quick re-request functionality and favorites list for 
                  easy access to go-to songs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Privacy Controls</h3>
                <p className="text-gray-600">
                  Granular privacy settings allowing singers to control who can view their song history. Hosts can request access 
                  with permission-based viewing.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Host Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive analytics dashboard for hosts including active singers, engagement metrics, total requests, 
                  average wait times, and new vs. returning singer statistics.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">PWA Support</h3>
                <p className="text-gray-600">
                  Progressive Web App capabilities with service workers for offline functionality. Optimistic UI updates that sync 
                  when connection is restored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Technical Implementation</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Architecture</h3>
              <p className="text-gray-700 mb-4">
                Karaoke Name is built with Next.js 15 and Firebase, enabling real-time data synchronization and cross-platform functionality 
                that works seamlessly with the companion mobile app.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Frontend:</span> Next.js 15 (App Router) with React 19 and TypeScript</li>
                <li><span className="font-medium">Backend:</span> Firebase (Authentication, Firestore, Functions)</li>
                <li><span className="font-medium">State Management:</span> React Context and Hooks</li>
                <li><span className="font-medium">Maps:</span> Leaflet / React Leaflet for location-based gig discovery</li>
                <li><span className="font-medium">Forms:</span> React Hook Form with Zod validation</li>
                <li><span className="font-medium">Styling:</span> Tailwind CSS with Framer Motion animations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Next.js 15</h4>
                  <p className="text-sm text-gray-600">React framework with App Router for optimal performance</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Firebase</h4>
                  <p className="text-sm text-gray-600">Backend-as-a-service for authentication and real-time database</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Leaflet</h4>
                  <p className="text-sm text-gray-600">Interactive maps for gig discovery and location services</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Framer Motion</h4>
                  <p className="text-sm text-gray-600">Animation library for fluid user experiences</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">React Hook Form</h4>
                  <p className="text-sm text-gray-600">Performant form management with validation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Zod</h4>
                  <p className="text-sm text-gray-600">TypeScript-first schema validation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Three.js</h4>
                  <p className="text-sm text-gray-600">3D graphics for interactive homepage elements</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">PWA</h4>
                  <p className="text-sm text-gray-600">Progressive Web App with offline capabilities</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">i18n</h4>
                  <p className="text-sm text-gray-600">Multi-language support for 30+ languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a similar project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's discuss how I can help bring your web application idea to life with modern technologies.</p>
          <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}

