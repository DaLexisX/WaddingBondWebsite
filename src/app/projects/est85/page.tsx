'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Est85Project() {
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
            video.src = '/videos/projects/est85/est85_homepage_1080p.mp4';
          } else if (downlink >= 2.5 || effectiveType === '3g') {
            video.src = '/videos/projects/est85/est85_homepage_720p.mp4';
          } else {
            video.src = '/videos/projects/est85/est85_homepage_480p.mp4';
          }
        } else {
          video.src = '/videos/projects/est85/est85_homepage_720p.mp4';
        }
        
        video.load();
      } catch (error) {
        if (video) {
          video.src = '/videos/projects/est85/est85_homepage_720p.mp4';
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
      <section className="bg-gradient-to-r from-amber-800 to-amber-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex flex-col items-center">
              <img
                src="/images/est85_coffee_works_transparent_cropped_380w.png"
                alt="Est.85 Coffee Works Logo"
                className="w-[380px] h-auto mb-4"
              />
              <p className="text-xl text-center max-w-2xl mb-4">
                Premium coffee roastery e-commerce platform with interactive 3D elements
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
                Est.85 Coffee Works is a modern e-commerce platform for a premium coffee roastery, featuring interactive 3D elements, 
                roast information, and online ordering capabilities. The site showcases the roastery&apos;s offerings with sophisticated 
                visual design and smooth user experience.
              </p>
              <p className="text-gray-700 mb-4">
                Built with Next.js and Three.js, the platform combines modern web technologies with immersive 3D graphics to create 
                an engaging shopping experience. The site features a physics-based coffee beans celebration effect, parallax scrolling, 
                and responsive design optimized for all devices.
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
              Experience the interactive homepage with 3D coffee bean animations and smooth scrolling effects.
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
                <source src="/videos/projects/est85/est85_homepage_720p.mp4" type="video/mp4" />
                <source src="/videos/projects/est85/est85_homepage_480p.mp4" type="video/mp4" />
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
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive 3D Elements</h3>
                <p className="text-gray-600">
                  Physics-based coffee beans celebration effect with realistic particle physics. Three.js-powered 3D models 
                  including coffee beans, scoops, and sacks for immersive visual experience.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600">
                  Complete online ordering system with roast information, product details, and shopping cart functionality. 
                  Streamlined checkout process for coffee enthusiasts.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Roast Information</h3>
                <p className="text-gray-600">
                  Detailed roast profiles and information pages showcasing the roastery&apos;s offerings. Comprehensive product 
                  descriptions with flavor profiles and origin details.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4zm0 0h-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Parallax Scrolling</h3>
                <p className="text-gray-600">
                  Sophisticated depth and motion throughout the page with parallax effects. Smooth scroll navigation with 
                  progress indicators and section dots for intuitive navigation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-brown-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                  Mobile-first approach with fully responsive layouts optimized for all devices. Touch-friendly interactions 
                  and adaptive UI elements for seamless experience across platforms.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">SEO Optimized</h3>
                <p className="text-gray-600">
                  Comprehensive meta tags, Open Graph, and Twitter Cards for optimal social sharing. Structured data with 
                  JSON-LD schema for enhanced search engine visibility.
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
                Est.85 Coffee Works is built with Next.js 15 and Three.js, combining modern web technologies with immersive 3D graphics 
                to create an engaging e-commerce experience.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Frontend:</span> Next.js 15 (App Router) with React 19 and TypeScript</li>
                <li><span className="font-medium">3D Graphics:</span> Three.js with React Three Fiber and Drei helpers</li>
                <li><span className="font-medium">Physics:</span> Cannon-es physics engine for realistic particle effects</li>
                <li><span className="font-medium">Styling:</span> Tailwind CSS for responsive design</li>
                <li><span className="font-medium">Deployment:</span> Optimized for Vercel with zero-config deployment</li>
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
                  <h4 className="font-semibold mb-2">Three.js</h4>
                  <p className="text-sm text-gray-600">3D graphics library for immersive visual experiences</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">React Three Fiber</h4>
                  <p className="text-sm text-gray-600">React renderer for Three.js with declarative API</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cannon-es</h4>
                  <p className="text-sm text-gray-600">Physics engine for realistic particle simulations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tailwind CSS</h4>
                  <p className="text-sm text-gray-600">Utility-first CSS framework for rapid UI development</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">TypeScript</h4>
                  <p className="text-sm text-gray-600">Statically typed JavaScript for enhanced code quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a similar project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let&apos;s discuss how I can help bring your e-commerce platform to life with modern web technologies and 3D graphics.</p>
          <Link href="/contact" className="bg-white text-amber-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}

