'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
            homepageVideo.src = '/videos/projects/cafe-connect/cafe_connect_homepage_1080p.mp4';
          } else if (downlink >= 2.5 || effectiveType === '3g') {
            // Medium connection - use 720p
            homepageVideo.src = '/videos/projects/cafe-connect/cafe_connect_homepage_720p.mp4';
          } else {
            // Slow connection - use 480p
            homepageVideo.src = '/videos/projects/cafe-connect/cafe_connect_homepage_480p.mp4';
          }
        } else {
          // Fallback: try to detect by attempting to load different qualities
          // Start with 720p as a good middle ground
          homepageVideo.src = '/videos/projects/cafe-connect/cafe_connect_homepage_720p.mp4';
        }
        
        homepageVideo.load();
      } catch (error) {
        // Fallback to 720p if detection fails
        if (homepageVideo) {
          homepageVideo.src = '/videos/projects/cafe-connect/cafe_connect_homepage_720p.mp4';
          homepageVideo.load();
        }
      }
    };

    selectOptimalSource();

    // Intersection Observer for autoplay when video comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && homepageVideo) {
            // Video is in view, play it
            homepageVideo.play().catch((error) => {
              // Autoplay may be blocked by browser, that's okay
              console.log('Autoplay prevented:', error);
            });
          } else if (homepageVideo) {
            // Video is out of view, pause it
            homepageVideo.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    if (homepageVideo) {
      observer.observe(homepageVideo);
    }

    return () => {
      if (homepageVideo) {
        observer.unobserve(homepageVideo);
      }
    };
  }, []);

  // Stamp mechanism video setup
  useEffect(() => {
    const stampVideo = stampVideoRef.current;
    if (!stampVideo) return;

    const selectOptimalSource = async () => {
      try {
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        
        if (connection) {
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink;
          
          if (downlink >= 5 || effectiveType === '4g') {
            stampVideo.src = '/videos/projects/cafe-connect/stamp_mechanism_1080p.mp4';
          } else if (downlink >= 2.5 || effectiveType === '3g') {
            stampVideo.src = '/videos/projects/cafe-connect/stamp_mechanism_720p.mp4';
          } else {
            stampVideo.src = '/videos/projects/cafe-connect/stamp_mechanism_480p.mp4';
          }
        } else {
          stampVideo.src = '/videos/projects/cafe-connect/stamp_mechanism_720p.mp4';
        }
        
        stampVideo.load();
      } catch (error) {
        if (stampVideo) {
          stampVideo.src = '/videos/projects/cafe-connect/stamp_mechanism_720p.mp4';
          stampVideo.load();
        }
      }
    };

    selectOptimalSource();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && stampVideo) {
            stampVideo.play().catch((error) => {
              console.log('Autoplay prevented:', error);
            });
          } else if (stampVideo) {
            stampVideo.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (stampVideo) {
      observer.observe(stampVideo);
    }

    return () => {
      if (stampVideo) {
        observer.unobserve(stampVideo);
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
                CAFE:CONNECT is a comprehensive mobile application developed for the Independent Cafe Owner&apos;s Network (ICON) 
                based in Worthing, Sussex, UK. This digital loyalty app helps local cafés compete with large chains 
                by offering a unified loyalty platform that eliminates paper stamp cards while enhancing the customer experience.
              </p>
              <p className="text-gray-700 mb-4">
                The application serves as ICON&apos;s flagship digital product, initially launched at Iconic Coffee before expanding 
                to the network&apos;s independent cafés throughout the UK. It creates a win-win ecosystem where cafés gain customer 
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
                  Digital loyalty cards with tap-to-earn functionality. Simply tap your phone to the café&apos;s NFC tag to collect stamps, complete with delightful confetti animations to celebrate your progress.
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
                ref={homepageVideoRef}
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

      {/* NFC Stamping Demo Video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">NFC Stamp Mechanism</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Watch how customers use NFC technology to collect stamps in real-time at participating cafés.
            </p>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <video 
                ref={stampVideoRef}
                className="w-full h-auto"
                controls
                preload="metadata"
                playsInline
                loop
                muted
              >
                <source src="/videos/projects/cafe-connect/stamp_mechanism_720p.mp4" type="video/mp4" />
                <source src="/videos/projects/cafe-connect/stamp_mechanism_480p.mp4" type="video/mp4" />
                <source src="/videos/projects/cafe-connect/stamp_mechanism.mp4" type="video/mp4" />
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

      {/* Other Projects Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Projects</h2>
            <p className="text-muted-foreground text-lg">Selected projects from my portfolio</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Karaoke Name",
                desc: "Real-time karaoke gig management platform with queue management, song requests, and location-based discovery for singers, hosts and venues.",
                tags: ["Next.js", "Firebase", "PWA", "Real-time"],
                link: "/projects/karaoke-name",
                videoBase: "karaoke_name_homepage"
              },
              {
                title: "Est85 Coffee Works",
                desc: "Modern coffee roastery e-commerce platform with interactive 3D elements, roast information, and online ordering capabilities.",
                tags: ["Next.js", "Three.js", "E-commerce", "3D"],
                link: "/projects/est85",
                videoBase: "est85_homepage"
              }
            ].map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/projects">Explore All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a similar project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let&apos;s discuss how I can help bring your mobile app idea to life with Flutter development.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}

// Project Card Component with Video Support
function ProjectCard({ project, index }: { project: any; index: number }) {
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
            video.src = `/videos/homepage/${project.videoBase}_high.mp4`;
          } else if (downlink >= 1 || effectiveType === '3g') {
            video.src = `/videos/homepage/${project.videoBase}_medium.mp4`;
          } else {
            video.src = `/videos/homepage/${project.videoBase}_low.mp4`;
          }
        } else {
          video.src = `/videos/homepage/${project.videoBase}_medium.mp4`;
        }
        
        video.load();
      } catch (error) {
        if (video) {
          video.src = `/videos/homepage/${project.videoBase}_medium.mp4`;
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
  }, [project.videoBase]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden h-full border-0 shadow-lg group cursor-pointer">
        <Link href={project.link}>
          <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
            >
              {/* Fallback sources */}
              <source src={`/videos/homepage/${project.videoBase}_medium.mp4`} type="video/mp4" />
              <source src={`/videos/homepage/${project.videoBase}_low.mp4`} type="video/mp4" />
            </video>
          </div>
        </Link>
        <CardContent className="p-6">
          <Link href={project.link}>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
          </Link>
          <p className="text-muted-foreground mb-4 line-clamp-3">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 