import React from 'react';

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Experience Hero Section */}
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl max-w-3xl">
            Over a decade of experience delivering high-quality software solutions across various industries.
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
                        <p className="text-gray-600">Founder & Lead Developer</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2023 - Present</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Founded and developed CAFE:CONNECT, a digital loyalty app connecting coffee lovers with independent cafés through a seamless rewards system.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                      <li>Architected and built a cross-platform mobile application using Flutter and Firebase</li>
                      <li>Implemented NFC tap-to-earn functionality and location-based café discovery</li>
                      <li>Designed and developed the backend infrastructure using Firebase services</li>
                      <li>Created a café management portal for business owners to manage rewards and analytics</li>
                      <li>Successfully launched on both iOS App Store and Google Play Store</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NFC Integration</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Location Services</span>
                    </div>
                  </div>
                </div>

                {/* Senior Mobile Developer */}
                <div className="mb-12">
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Senior Mobile Developer</h3>
                        <p className="text-gray-600">Various Companies</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2018 - 2023</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Worked as a Senior Mobile Developer across multiple companies, specializing in Flutter and cross-platform development.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                      <li>Led development teams in creating and maintaining mobile applications</li>
                      <li>Architected scalable and maintainable mobile solutions</li>
                      <li>Implemented CI/CD pipelines for automated testing and deployment</li>
                      <li>Mentored junior developers and conducted code reviews</li>
                      <li>Collaborated with product managers and designers to deliver user-centered experiences</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React Native</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">iOS</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Android</span>
                    </div>
                  </div>
                </div>

                {/* Software Developer */}
                <div className="mb-12">
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Software Developer</h3>
                        <p className="text-gray-600">Deyard</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2015 - 2018</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Worked as a full-stack developer at Deyard, focusing on web and mobile application development.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                      <li>Developed and maintained web applications using JavaScript and C#</li>
                      <li>Created RESTful APIs and integrated with third-party services</li>
                      <li>Implemented responsive UI designs and improved user experiences</li>
                      <li>Collaborated with cross-functional teams to deliver projects on time</li>
                      <li>Participated in agile development processes and sprint planning</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C#</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">ASP.NET</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">SQL</span>
                    </div>
                  </div>
                </div>

                {/* Junior Developer */}
                <div>
                  <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full border-4 border-blue-600 bg-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Junior Developer</h3>
                        <p className="text-gray-600">Various Companies</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2012 - 2015</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Started my career as a Junior Developer, working on various web and software development projects.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                      <li>Assisted in developing and maintaining web applications</li>
                      <li>Learned and implemented best practices in software development</li>
                      <li>Collaborated with senior developers on feature implementation</li>
                      <li>Participated in code reviews and improved coding skills</li>
                      <li>Gained experience in full software development lifecycle</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MySQL</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">CAFE:CONNECT Launch</h3>
                  <p className="text-gray-600">
                    Successfully launched CAFE:CONNECT on both iOS and Android platforms, connecting independent cafés with customers through a digital loyalty program.
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
                    Improved application performance by 40% through code optimization, reducing load times and enhancing user experience across multiple projects.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Team Leadership</h3>
                  <p className="text-gray-600">
                    Led development teams of up to 8 developers, implementing agile methodologies and delivering projects on time and within budget.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security Implementation</h3>
                  <p className="text-gray-600">
                    Implemented robust security measures and data privacy protocols, ensuring compliance with GDPR and other regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-bold">Sarah Johnson</h3>
                      <p className="text-gray-600 text-sm">Product Manager</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Doug is an exceptional developer who consistently delivers high-quality code. His expertise in Flutter and mobile development was instrumental in the success of our project. He's not only technically proficient but also great at communicating complex concepts to non-technical stakeholders."
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-bold">Michael Chen</h3>
                      <p className="text-gray-600 text-sm">CTO</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Working with Doug was a pleasure. His deep understanding of mobile development and ability to architect scalable solutions made him an invaluable asset to our team. He consistently went above and beyond to ensure our application was performant and user-friendly."
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-bold">Emma Rodriguez</h3>
                      <p className="text-gray-600 text-sm">UI/UX Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Doug has a rare combination of technical expertise and design sensibility. He was able to take my UI designs and implement them flawlessly, often suggesting improvements that enhanced the user experience. His attention to detail and commitment to quality made him a joy to collaborate with."
                  </p>
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
          <p className="text-xl mb-8 max-w-2xl mx-auto">I'm currently available for new opportunities and projects. Let's discuss how my experience can benefit your team.</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
