'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CafeConnectProject() {
  const homepageVideoRef = useRef<HTMLVideoElement>(null);
  const stampVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const homepageVideo = homepageVideoRef.current;
    if (!homepageVideo) return;

    // Adaptive bitrate selection based on connection speed
    const selectOptimalSource = async () => {
      try {
        // Check connection speed if available
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        
        if (connection) {
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink; // Mbps
          
          // Select source based on connection speed
          if (downlink >= 5 || effectiveType === '4g') {
            // Fast connection - use 1080p
            video.src = '/videos/projects/cafe-connect/cafe_connect_homepage_1080p.mp4';
          } else if (downlink >= 2.5 || effectiveType === '3g') {
            // Medium connection - use 720p
            video.src = '/videos/projects/cafe-connect/cafe_connect_homepage_720p.mp4';
          } else {
            // Slow connection - use 480p
            video.src = '/videos/projects/cafe-connect/cafe_connect_homepage_480p.mp4';
          }
        } else {
          // Fallback: try to detect by attempting to load different qualities
          // Start with 720p as a good middle ground
          video.src = '/videos/projects/cafe-connect/cafe_connect_homepage_720p.mp4';
        }
        
        video.load();
      } catch (error) {
        // Fallback to 720p if detection fails
        if (video) {
          video.src = '/videos/projects/cafe-connect/cafe_connect_homepage_720p.mp4';
          video.load();
        }
      }
    };

    selectOptimalSource();

    // Intersection Observer for autoplay when video comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video) {
            // Video is in view, play it
            video.play().catch((error) => {
              // Autoplay may be blocked by browser, that's okay
              console.log('Autoplay prevented:', error);
            });
          } else if (video) {
            // Video is out of view, pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
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
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex flex-col items-center">
              <img
                src="/images/projects/cafe-connect/cafe_connect_logo_white.png"
                alt="CAFE:CONNECT Logo"
                className="h-24 w-auto mb-4"
              />
              <p className="text-xl text-center max-w-2xl mb-4">
                The digital loyalty app for independent cafés
              </p>
              <a 
                href="https://cafe-connect.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-orange-100 underline text-lg font-medium transition-colors"
              >
                Visit Website
              </a>
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
                CAFE:CONNECT is a comprehensive mobile application developed for the Independent Cafe Owner's Network (ICON) 
                based in Worthing, Sussex, UK. This digital loyalty app helps local cafés compete with large chains 
                by offering a unified loyalty platform that eliminates paper stamp cards while enhancing the customer experience.
              </p>
              <p className="text-gray-700 mb-4">
                The application serves as ICON's flagship digital product, initially launched at Iconic Coffee before expanding 
                to the network's independent cafés throughout the UK. It creates a win-win ecosystem where cafés gain customer 
                insights and loyalty tools, while customers enjoy a streamlined experience with digital stamp collection and café discovery.
              </p>
            </div>

            {/* App Store Links */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4">Download The App</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="https://apps.apple.com/ph/app/cafe-connect/id6742357756" target="_blank" rel="noopener noreferrer" className="flex h-12">
                  <img 
                    src="/images/projects/cafe-connect/badges/app-store-black.png" 
                    alt="Download on the App Store" 
                    className="h-12 w-auto dark:hidden"
                  />
                  <img 
                    src="/images/projects/cafe-connect/badges/app-store-white.png" 
                    alt="Download on the App Store" 
                    className="h-12 w-auto hidden dark:block"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.independentcafeownersnetwork.iconrewards" target="_blank" rel="noopener noreferrer" className="flex h-12">
                  <img
                    src="/images/projects/cafe-connect/badges/google-play.png"
                    alt="Get it on Google Play"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">NFC-Enabled Stamp Cards</h3>
                <p className="text-gray-600">
                  Digital loyalty cards with tap-to-earn functionality. Simply tap your phone to the café's NFC tag to collect stamps, complete with delightful confetti animations to celebrate your progress.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Café Finder</h3>
                <p className="text-gray-600">
                  Discover participating cafés near you with an interactive map and list view. Filter by distance, view detailed profiles, and get directions to your next coffee destination.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">User Account Management</h3>
                <p className="text-gray-600">
                  Secure authentication with multiple sign-in options including email, Google Sign-In, and Sign in with Apple. Manage your profile and track your loyalty rewards across all participating cafés.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Admin Features</h3>
                <p className="text-gray-600">
                  Comprehensive tools for café owners to manage their digital presence, including location management, menu updates, and the ability to send targeted notifications to customers.
                </p>
              </div>
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
              Experience the interactive homepage with modern design and smooth animations.
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
                <source src="/videos/projects/cafe-connect/cafe_connect_homepage_720p.mp4" type="video/mp4" />
                <source src="/videos/projects/cafe-connect/cafe_connect_homepage_480p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">App Screenshots</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="relative pb-[200%]">
                  <div className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot1.webp')" }}></div>
                  <div className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark1.webp')" }}></div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="relative pb-[200%]">
                  <div className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot2.webp')" }}></div>
                  <div className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark2.webp')" }}></div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="relative pb-[200%]">
                  <div className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot3.webp')" }}></div>
                  <div className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark3.webp')" }}></div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="relative pb-[200%]">
                  <div className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot4.webp')" }}></div>
                  <div className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark4.webp')" }}></div>
                </div>
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
                CAFE:CONNECT is built with a Flutter frontend and Firebase backend architecture, enabling real-time data synchronization and cross-platform functionality.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Frontend:</span> Flutter SDK with Provider pattern for state management</li>
                <li><span className="font-medium">Backend:</span> Firebase (Authentication, Firestore, Storage, Cloud Functions)</li>
                <li><span className="font-medium">APIs:</span> Google Maps Platform, NFC integration, Push Notifications</li>
                <li><span className="font-medium">CI/CD:</span> GitHub Actions, Firebase App Distribution for beta testing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Flutter</h4>
                  <p className="text-sm text-gray-600">Cross-platform mobile development framework with reactive UI</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Firebase</h4>
                  <p className="text-sm text-gray-600">Backend-as-a-service for authentication, database, and storage</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">NFC Integration</h4>
                  <p className="text-sm text-gray-600">Near-field communication for contactless stamp collection</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Maps</h4>
                  <p className="text-sm text-gray-600">Location services and interactive maps</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Provider</h4>
                  <p className="text-sm text-gray-600">State management solution for Flutter applications</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Shared Preferences</h4>
                  <p className="text-sm text-gray-600">Local data persistence for user settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Other Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Project Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">DimensionalAV</h3>
                  <p className="text-gray-600 text-sm mb-3">4D & 3D+3T Audio Visualizer that responds to music in multiple dimensions.</p>
                  <Link href="/projects/dimensional-av" className="text-blue-600 text-sm font-semibold">View Project →</Link>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Project Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">PeerReview</h3>
                  <p className="text-gray-600 text-sm mb-3">Peer Review website for A Multidimensional Temporal Universe paper.</p>
                  <Link href="/projects/peer-review" className="text-blue-600 text-sm font-semibold">View Project →</Link>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Project Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Code Survey</h3>
                  <p className="text-gray-600 text-sm mb-3">Understanding the evolution in large software systems with LLM.</p>
                  <Link href="/projects/code-survey" className="text-blue-600 text-sm font-semibold">View Project →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a similar project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's discuss how I can help bring your mobile app idea to life with Flutter development.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
} 