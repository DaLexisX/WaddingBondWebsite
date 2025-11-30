import React from 'react';

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Experience Hero Section */}
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl max-w-3xl">
            Versatile full-stack developer with over a decade of experience delivering end-to-end software solutions. 
            Adept in web, mobile, and AI development pipelines.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Work History</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 pr-6">
                A comprehensive timeline of my career from Senior Web Developer roles to Lead Architect positions.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="relative border-l-4 border-blue-600 pl-8 pb-6">
                
                {/* CAFE:CONNECT */}
                <div className="mb-12">
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">CAFE:CONNECT</h3>
                        <p className="text-gray-600">Lead Developer & Architect</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2023 - Present</span>
                      </div>
                    </div>
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
                </div>

                {/* Higgidy */}
                <div className="mb-12">
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Higgidy</h3>
                        <p className="text-gray-600">Systems Lead / Senior Developer</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2016 - 2023</span>
                      </div>
                    </div>
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
                </div>

                {/* Loria Consulting */}
                <div className="mb-12">
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Loria Consulting</h3>
                        <p className="text-gray-600">Senior CRM Developer</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2015 - 2016</span>
                      </div>
                    </div>
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
                </div>

                {/* Havas Helia */}
                <div className="mb-12">
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Havas Helia</h3>
                        <p className="text-gray-600">Senior Web Developer</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2012 - 2015</span>
                      </div>
                    </div>
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
                </div>

                {/* SilentManager */}
                <div>
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">SilentManager</h3>
                        <p className="text-gray-600">Senior Web Developer</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2009 - 2012</span>
                      </div>
                    </div>
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
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-6 rounded-lg shadow-md">
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
                
                <div className="bg-white p-6 rounded-lg shadow-md">
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
                
                <div className="bg-white p-6 rounded-lg shadow-md">
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
                
                <div className="bg-white p-6 rounded-lg shadow-md">
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-6">
                
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                     <span className="font-bold text-blue-600">FIP</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fellow of Information Privacy (FIP)</h3>
                    <p className="text-gray-600">IAPP</p>
                    <p className="text-gray-500 text-sm mt-1">Recognized for comprehensive knowledge in privacy laws and data protection.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                   <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path d="M12 14l9-5-9-5-9 5 9 5z" />
                       <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                     </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">BTEC Level 3 Diploma</h3>
                    <p className="text-gray-600">Aeronautical Engineering & General Engineering</p>
                    [cite_start]<p className="text-gray-500 text-sm mt-1">[cite: 85, 86]</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                     </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">NVQ Level 3</h3>
                    <p className="text-gray-600">Aeronautical Engineering</p>
                    [cite_start]<p className="text-gray-500 text-sm mt-1">[cite: 87]</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for new opportunities. Let's discuss how my full-stack expertise can benefit your team.
          </p>
          <a href="mailto:doug@wadding.bond" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}