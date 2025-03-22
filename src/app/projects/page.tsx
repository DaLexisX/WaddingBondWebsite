import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Projects Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl max-w-3xl">
            A showcase of my development work, featuring mobile applications, web projects, and technical experiments.
          </p>
        </div>
      </section>

      {/* Featured Project - CAFE:CONNECT */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">CAFE:CONNECT</h3>
                      <p className="text-gray-600 mb-6">
                        A digital loyalty app connecting coffee lovers with independent cafés through a seamless rewards system.
                        The app helps local cafés compete with large chains by offering a unified loyalty platform.
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Digital loyalty cards for multiple cafés</li>
                          <li>NFC tap-to-earn functionality</li>
                          <li>Café discovery with location services</li>
                          <li>Personalized rewards and offers</li>
                          <li>Cross-platform compatibility (iOS & Android)</li>
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
                      <div className="flex space-x-4">
                        <a href="https://apps.apple.com/ph/app/cafe-connect/id6742357756" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                          <span>App Store</span>
                        </a>
                        <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                          <span>Google Play</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-gray-600">App Screenshot 1</span>
                      </div>
                      <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-gray-600">App Screenshot 2</span>
                      </div>
                      <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-gray-600">App Screenshot 3</span>
                      </div>
                      <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-gray-600">App Screenshot 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Other Projects</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 gap-8">
                {/* DimensionalAV Project */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
                      <div className="bg-gray-300 rounded-lg w-full h-48 flex items-center justify-center">
                        <span className="text-gray-600">Project Screenshot</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">DimensionalAV</h3>
                      <p className="text-gray-600 mb-4">
                        4D & 3D+3T Audio Visualizer that responds to music in multiple dimensions, creating an immersive visual experience synchronized with audio input.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Three.js</span>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Web Audio API</span>
                      </div>
                      <div className="flex space-x-4">
                        <a href="https://github.com/DaLexisX/DimensionalAV" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>View on GitHub</span>
                        </a>
                        <a href="/projects/dimensional-av" className="text-blue-600 font-semibold">View Details →</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PeerReview Project */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
                      <div className="bg-gray-300 rounded-lg w-full h-48 flex items-center justify-center">
                        <span className="text-gray-600">Project Screenshot</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">PeerReview</h3>
                      <p className="text-gray-600 mb-4">
                        A peer review website for "A Multidimensional Temporal Universe" paper, facilitating academic discussion and feedback on theoretical physics concepts.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                      </div>
                      <div className="flex space-x-4">
                        <a href="https://github.com/DaLexisX" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>View on GitHub</span>
                        </a>
                        <a href="/projects/peer-review" className="text-blue-600 font-semibold">View Details →</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Survey Project */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
                      <div className="bg-gray-300 rounded-lg w-full h-48 flex items-center justify-center">
                        <span className="text-gray-600">Project Screenshot</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">Code Survey</h3>
                      <p className="text-gray-600 mb-4">
                        A tool for understanding the evolution in large software systems using LLM technology to analyze codebases and identify patterns and architectural changes.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">NLP</span>
                      </div>
                      <div className="flex space-x-4">
                        <a href="https://github.com/DaLexisX" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>View on GitHub</span>
                        </a>
                        <a href="/projects/code-survey" className="text-blue-600 font-semibold">View Details →</a>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">I'm always interested in new challenges and opportunities. Let's discuss how I can help bring your ideas to life.</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
