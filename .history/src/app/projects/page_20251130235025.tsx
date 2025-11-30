'use client';

import React, { useEffect, useRef } from 'react';

// Video component for project cards
function ProjectVideo({ videoBase }: { videoBase: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Adaptive bitrate selection based on connection speed
    const selectOptimalSource = async () => {
      try {
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        
        if (connection) {
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink;
          
          if (downlink >= 2 || effectiveType === '4g') {
            video.src = `/videos/homepage/${videoBase}_high.mp4`;
          } else if (downlink >= 1 || effectiveType === '3g') {
            video.src = `/videos/homepage/${videoBase}_medium.mp4`;
          } else {
            video.src = `/videos/homepage/${videoBase}_low.mp4`;
          }
        } else {
          video.src = `/videos/homepage/${videoBase}_medium.mp4`;
        }
        
        video.load();
      } catch (error) {
        if (video) {
          video.src = `/videos/homepage/${videoBase}_medium.mp4`;
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
  }, [videoBase]);

  return (
    <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={`/videos/homepage/${videoBase}_medium.mp4`} type="video/mp4" />
        <source src={`/videos/homepage/${videoBase}_low.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Projects Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl max-w-3xl text-slate-200">
            A showcase of my development work, featuring mobile applications, web projects, and technical experiments.
          </p>
        </div>
      </section>

      {/* Featured Project - CAFE:CONNECT */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200/50 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <div className="p-8">
                      <div className="mb-4 flex justify-center">
                        <img 
                          src="/images/projects/cafe-connect/cafe_connect_logo_black.png" 
                          alt="CAFE:CONNECT" 
                          className="h-16 w-auto dark:hidden"
                        />
                        <div className="hidden dark:block text-center">
                          <h3 className="text-2xl font-bold">CAFE:CONNECT</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
                        A digital loyalty app connecting coffee lovers with independent cafés through a seamless rewards system.
                        The official digital loyalty app from the Independent Cafe Owners Network (ICON) helps local cafés compete with large chains by offering a unified loyalty platform.
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Project Overview:</h4>
                        <p className="text-gray-600 mb-4">
                          CAFE:CONNECT is a comprehensive mobile application developed for ICON's flagship location, Iconic Coffee, and its network of independent cafés across the UK. This full-stack Flutter application enhances the café experience with paperless loyalty cards and detailed café discovery features.
                        </p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li><span className="font-medium">Digital Loyalty Program</span> - NFC-enabled stamp cards with real-time tracking and engaging animations</li>
                          <li><span className="font-medium">Location Discovery</span> - Find nearby cafés with comprehensive details (contact info, hours, social links)</li>
                          <li><span className="font-medium">User Account Management</span> - Secure authentication via email, Google Sign-In, and Sign in with Apple</li>
                          <li><span className="font-medium">Admin Features</span> - Tools for café owners to manage locations, franchises, and send notifications</li>
                          <li><span className="font-medium">Personalization</span> - Custom settings with light/dark themes and user preferences</li>
                          <li><span className="font-medium">Eco-friendly</span> - Eliminates paper punch cards, supporting sustainability efforts</li>
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Technical Highlights:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                          <li>Cross-platform development with Flutter for iOS and Android</li>
                          <li>Firebase backend (Authentication, Firestore, Storage)</li>
                          <li>NFC integration for seamless stamp collection</li>
                          <li>Local data persistence with shared_preferences and SQLite</li>
                          <li>Reactive programming with provider and rxdart</li>
                          <li>Location services with distance calculation (Haversine formula)</li>
                          <li>Deep linking and external app integration</li>
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NFC Integration</span>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Location Services</span>
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Cloud Functions</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 items-center">
                        <a href="https://apps.apple.com/ph/app/cafe-connect/id6742357756" target="_blank" rel="noopener noreferrer" className="flex h-10">
                          <img 
                            src="/images/projects/cafe-connect/badges/app-store-black.png" 
                            alt="Download on the App Store" 
                            className="h-10 w-auto dark:hidden"
                          />
                          <img 
                            src="/images/projects/cafe-connect/badges/app-store-white.png" 
                            alt="Download on the App Store" 
                            className="h-10 w-auto hidden dark:block"
                          />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.independentcafeownersnetwork.iconrewards" target="_blank" rel="noopener noreferrer" className="flex h-10">
                          <img
                            src="/images/projects/cafe-connect/badges/google-play.png"
                            alt="Get it on Google Play"
                            className="h-10 w-auto"
                          />
                        </a>
                        <a href="/projects/cafe-connect" className="ml-4 inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition duration-300">
                          View Project Details
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-slate-50 dark:bg-slate-900 relative min-h-[500px]">
                    <iframe 
                      src="/projects/cafe-connect/embed/index.html" 
                      className="w-full h-full absolute inset-0 border-0"
                      title="CAFE:CONNECT Interactive Demo"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Other Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 gap-8">
                {/* Karaoke Name Project */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-0">
                      <ProjectVideo videoBase="karaoke_name_homepage" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">Karaoke Name</h3>
                      <p className="text-gray-600 mb-4">
                        Real-time karaoke gig management platform with queue management, song requests, and location-based discovery for singers, hosts and venues.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">PWA</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Real-time</span>
                      </div>
                      <div className="flex space-x-4">
                        <a href="/projects/karaoke-name" className="text-blue-600 font-semibold">View Details →</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Est85 Coffee Works Project */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
                      <img 
                        src="/images/est85_coffee_works_transparent_cropped_380w.png"
                        alt="Est85 Coffee Works Logo"
                        className="w-full h-auto max-h-48 object-contain"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">Est85 Coffee Works</h3>
                      <p className="text-gray-600 mb-4">
                        Modern coffee roastery e-commerce platform with interactive 3D elements, roast information, and online ordering capabilities.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Three.js</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">E-commerce</span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">3D</span>
                      </div>
                      <div className="flex space-x-4">
                        <a href="/projects/est85" className="text-blue-600 font-semibold">View Details →</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CAFE:CONNECT Project */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
                      <img 
                        src="/images/projects/cafe-connect/cafe_connect_logo_black.png"
                        alt="CAFE:CONNECT Logo"
                        className="w-full h-auto max-h-48 object-contain dark:invert"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">CAFE:CONNECT</h3>
                      <p className="text-gray-600 mb-4">
                        Digital loyalty platform for independent cafes featuring NFC stamp integration, mobile app connectivity, and a comprehensive B2B community hub.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                        <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NFC</span>
                      </div>
                      <div className="flex space-x-4">
                        <a href="/projects/cafe-connect" className="text-blue-600 font-semibold">View Details →</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">I'm always interested in new challenges and opportunities. Let's discuss how I can help bring your ideas to life.</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
