import React from 'react';

export default function Skills() {
  return (
    <div className="min-h-screen">
      {/* Skills Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
          <p className="text-xl max-w-3xl">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mobile Development */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Flutter</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Dart</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">iOS</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Android</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">React Native</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Front-End */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Front-End</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">JavaScript</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">TypeScript</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">React</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Next.js</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">HTML/CSS</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Back-End */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Back-End</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Firebase</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Node.js</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">RESTful APIs</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">ASP.NET Core</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">SQL</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Cloud & DevOps */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Azure</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Firebase</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">CI/CD</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Docker</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24 font-semibold">Git</span>
                      <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                        <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Programming Languages</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Primary Languages</h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">Dart</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </li>
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">JavaScript/TypeScript</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </li>
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">C#</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </li>
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">Python</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Additional Languages</h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">HTML/CSS</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </li>
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">SQL</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </li>
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">Java</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </li>
                      <li className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">Swift</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Professional Skills</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Development Methodologies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Agile Development</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Scrum</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Test-Driven Development</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Continuous Integration/Deployment</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Object-Oriented Design</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Problem Solving</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Team Collaboration</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Communication</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Time Management</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Adaptability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Visual Studio Code</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Git & GitHub</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Firebase Console</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Azure DevOps</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Jira & Confluence</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Specialized Knowledge</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>UI/UX Design Principles</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Mobile App Architecture</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>API Design & Integration</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Data Privacy & Security</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Performance Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Looking for a skilled developer with expertise in Flutter and mobile development? I'm available for new opportunities and projects.</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
