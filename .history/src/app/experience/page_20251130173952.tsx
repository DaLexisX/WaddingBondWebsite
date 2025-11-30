'use client';

import React from 'react';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Experience Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl max-w-3xl text-slate-200">
            Versatile full-stack developer with over a decade of experience delivering end-to-end software solutions. 
            Adept in web, mobile, and AI development pipelines.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Work History</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600 pr-6">
                A comprehensive timeline of my career from Senior Web Developer roles to Lead Architect positions.
              </p>
            </div>
          </div>
          <VerticalTimeline lineColor="#2563eb">
            {/* CAFE:CONNECT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#1f2937', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2023 - Present"
              iconStyle={{ background: '#2563eb', color: '#fff' }}
            >
              <div>
                <h3 className="text-xl font-bold">CAFE:CONNECT</h3>
                <h4 className="text-gray-600 mb-4">Lead Developer & Architect</h4>
                <p className="text-gray-700 mb-4">
                  Designed and delivered a dual-purpose cloud platform for the hospitality sector, integrating a B2C digital loyalty app with a B2B Community Hub.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Engineered a high-availability hybrid architecture using Next.js on Google Cloud Run and Flutter for native mobile clients.</li>
                  <li>Built a serverless backend with Firebase, utilizing Firestore NoSQL data modeling and Atomic Transactions.</li>
                  <li>Implemented real-time data synchronization using Firestore Listeners and fan-out writes for notifications.</li>
                  <li>Established automated CI/CD pipelines using GitHub Actions for deployment to Cloud Run and GCP.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js 15</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">GCP</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
            </VerticalTimelineElement>

            {/* Higgidy */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#1f2937', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2016 - 2023"
              iconStyle={{ background: '#2563eb', color: '#fff' }}
            >
              <div>
                <h3 className="text-xl font-bold">Higgidy</h3>
                <h4 className="text-gray-600 mb-4">Systems Lead / Senior Developer</h4>
                <p className="text-gray-700 mb-4">
                  Full-stack development in an IT leadership role, acting as principal engineer for internal manufacturing and operational projects.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Developed production line monitoring tools (ASP.NET MVC) to visualize real-time throughput and identify bottlenecks.</li>
                  <li>Created an intranet portal integrated with Azure AD for single sign-on.</li>
                  <li>Wrote complex SQL stored procedures to integrate factory floor systems with the central ERP.</li>
                  <li>Introduced React and Next.js to modernize QA dashboards and improve user experience.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C# / ASP.NET</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">SQL Server</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Azure AD</span>
                </div>
              </div>
            </VerticalTimelineElement>

            {/* Loria Consulting */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#1f2937', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2015 - 2016"
              iconStyle={{ background: '#2563eb', color: '#fff' }}
            >
              <div>
                <h3 className="text-xl font-bold">Loria Consulting</h3>
                <h4 className="text-gray-600 mb-4">Senior CRM Developer</h4>
                <p className="text-gray-700 mb-4">
                  Developed custom features and extensions for Sage CRM, translating complex client requirements into technical designs.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Built an inspection portal (jQuery/Bootstrap) allowing field engineers to input offline data and sync upon reconnection.</li>
                  <li>Automated data import/export by integrating Excel processing into CRM workflows using C# and VSTO.</li>
                  <li>Enhanced CRM reports and dashboards with custom SQL queries and ASP pages.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Sage CRM</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C#</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">VSTO</span>
                </div>
              </div>
            </VerticalTimelineElement>

            {/* Havas Helia */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#1f2937', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2012 - 2015"
              iconStyle={{ background: '#2563eb', color: '#fff' }}
            >
              <div>
                <h3 className="text-xl font-bold">Havas Helia</h3>
                <h4 className="text-gray-600 mb-4">Senior Web Developer</h4>
                <p className="text-gray-700 mb-4">
                  Developed pixel-perfect web solutions for major enterprise clients like Dove, Nescafé, and EasyJet.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Built back-end systems for promotional campaigns using ASP.NET and MS SQL.</li>
                  <li>Implemented dynamic content for high-volume email campaigns reaching millions of customers.</li>
                  <li>Migrated legacy PHP/MySQL websites to ASP.NET platforms, improving security and stability.</li>
                  <li>Optimized performance to achieve sub-second load times despite heavy graphical content.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML5/CSS3</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ASP.NET</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">APIs</span>
                </div>
              </div>
            </VerticalTimelineElement>

            {/* SilentManager */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#1f2937', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2009 - 2012"
              iconStyle={{ background: '#2563eb', color: '#fff' }}
            >
              <div>
                <h3 className="text-xl font-bold">SilentManager</h3>
                <h4 className="text-gray-600 mb-4">Senior Web Developer</h4>
                <p className="text-gray-700 mb-4">
                  Full-stack developer for interactive fantasy sports gaming platforms handling tens of thousands of concurrent users.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Programmed complex game logic and real-time leaderboards using C# and T-SQL.</li>
                  <li>Built and published a companion iOS app in Objective-C.</li>
                  <li>Implemented OAuth login flows (Facebook/Yahoo) to lower barriers to entry.</li>
                  <li>Developed internal admin tools for game operations and content moderation.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Web Forms</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">iOS (Objective-C)</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">T-SQL</span>
                </div>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Platform Launch</h3>
                  <p className="text-gray-600">
                    Successfully delivered the fully functional CAFE:CONNECT platform into production, leveraging modern serverless architecture and cross-platform mobile development.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                  <p className="text-gray-600">
                    Optimized inventory sync processes at Higgidy, cutting run time by 50%. Achieved sub-second load times for heavy graphical campaign sites at Havas Helia.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                  <p className="text-gray-600">
                    Published native applications for various projects, ranging from Fantasy Sports (iOS/Objective-C) to hospitality rewards (Flutter/Dart).
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Process Automation</h3>
                  <p className="text-gray-600">
                    Developed scheduled jobs and automated reporting tools that saved hours of manual work weekly for manufacturing and administrative teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section (Replaced Testimonials) */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-6">
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300 flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4 overflow-hidden">
                     <Image 
                       src="/images/fip_logo.png" 
                       alt="FIP Logo" 
                       width={48} 
                       height={48}
                       className="object-contain"
                     />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fellow of Information Privacy (FIP)</h3>
                    <p className="text-gray-600">IAPP</p>
                    <p className="text-gray-500 text-sm mt-1">Recognized for comprehensive knowledge in privacy laws and data protection.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300 flex items-start">
                   <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4 overflow-hidden">
                     <Image 
                       src="/images/cng.png" 
                       alt="CNG Logo" 
                       width={48} 
                       height={48}
                       className="object-contain"
                     />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">BTEC Level 3 Diploma</h3>
                    <p className="text-gray-600">Aeronautical Engineering & General Engineering</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300 flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4 overflow-hidden">
                     <Image 
                       src="/images/cng.png" 
                       alt="CNG Logo" 
                       width={48} 
                       height={48}
                       className="object-contain"
                     />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">NVQ Level 3</h3>
                    <p className="text-gray-600">Aeronautical Engineering</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            I'm currently available for new opportunities. Let's discuss how my full-stack expertise can benefit your team.
          </p>
          <a href="mailto:doug@wadding.bond" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}