import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl max-w-3xl">
            Senior Flutter & Mobile Developer with over a decade of experience delivering high-quality software solutions.
          </p>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-6">
                I'm a versatile full-stack developer with over 10 years of experience delivering end-to-end software solutions. 
                Recently, I've focused on Flutter development with proven success in architecting and deploying cross-platform 
                mobile applications.
              </p>
              <p className="text-gray-700 mb-6">
                I'm passionate about crafting intuitive user experiences and scalable solutions, as demonstrated by my work on 
                CAFE:CONNECT—a fully integrated app using Flutter and Firebase. I excel at bridging the gap between design and 
                technology, bringing a strong blend of technical expertise and practical problem-solving skills to every project.
              </p>
              <p className="text-gray-700">
                My approach combines deep technical knowledge with a user-centered design philosophy, ensuring that the solutions 
                I build not only function flawlessly but also provide exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Philosophy Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Technical Philosophy</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">My Approach to Development</h3>
                <p className="text-gray-700 mb-6">
                  I believe in creating software that solves real problems and enhances user experiences. My development 
                  philosophy centers around these key principles:
                </p>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">User-Centered Design</h4>
                      <p className="text-gray-700">
                        I prioritize understanding user needs and behaviors to create intuitive, accessible interfaces that 
                        deliver exceptional experiences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Clean, Maintainable Code</h4>
                      <p className="text-gray-700">
                        I write code that is readable, well-documented, and follows best practices, making it easier to 
                        maintain and extend over time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Performance Optimization</h4>
                      <p className="text-gray-700">
                        I focus on creating efficient, optimized applications that load quickly and run smoothly across 
                        all devices and platforms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Modular Architecture</h4>
                      <p className="text-gray-700">
                        I design systems with modular, reusable components that can be easily tested, maintained, and scaled 
                        as projects grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-semibold">BTEC Level 3 Diploma in Aeronautical Engineering</div>
                      <div className="text-gray-600">Double Merit</div>
                    </li>
                    <li>
                      <div className="font-semibold">BTEC Level 3 Diploma in General Engineering</div>
                      <div className="text-gray-600">Merit</div>
                    </li>
                    <li>
                      <div className="font-semibold">NVQ Level 3 in Aeronautical Engineering</div>
                      <div className="text-gray-600">Aircraft Mechanical</div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-semibold">Certified Information Privacy Professional (CIPP/E)</div>
                    </li>
                    <li>
                      <div className="font-semibold">Certified Information Privacy Manager (CIPM)</div>
                    </li>
                    <li>
                      <div className="font-semibold">Certified Information Privacy Technologist (CIPT)</div>
                    </li>
                    <li>
                      <div className="font-semibold">Ongoing Professional Development</div>
                      <div className="text-gray-600">Cloud architecture, security, and CEH studies</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Personal Interests</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6">
                  Beyond my professional work, I'm passionate about exploring emerging technologies and continuing to expand 
                  my technical knowledge. Some of my interests include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Emerging Mobile Technologies</h4>
                      <p className="text-gray-700">
                        Exploring new frameworks, tools, and approaches in mobile development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">VR/AR Development</h4>
                      <p className="text-gray-700">
                        Experimenting with virtual and augmented reality technologies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Advanced Flutter Techniques</h4>
                      <p className="text-gray-700">
                        Deepening my knowledge of Flutter for complex, high-performance applications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Continuous Learning</h4>
                      <p className="text-gray-700">
                        Staying current with industry trends and expanding my technical knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Check out my projects or get in touch to discuss how we can work together.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/projects" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">View Projects</a>
            <a href="/contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">Contact Me</a>
          </div>
        </div>
      </section>
    </div>
  );
}
