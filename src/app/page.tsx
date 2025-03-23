import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Doug Wadding-Bond</h1>
              <h2 className="text-2xl md:text-3xl mb-6">Senior Flutter & Mobile Developer</h2>
              <p className="text-xl mb-8">Building cross-platform mobile experiences with a focus on user-centered design</p>
              <div className="flex space-x-4">
                <a href="/projects" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">View Projects</a>
                <a href="/contact" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Contact Me</a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image 
                src="/profile.jpg" 
                alt="Doug Wadding-Bond" 
                width={256} 
                height={256} 
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Project</h2>
          <p className="text-gray-600 mb-12 text-center">My latest work</p>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="mb-4">
                      <Image 
                        src="/images/projects/cafe-connect/cafe_connect_logo_black.png" 
                        alt="CAFE:CONNECT Logo" 
                        width={280} 
                        height={280} 
                        className="mx-auto mb-4"
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    CAFE:CONNECT is a digital loyalty app connecting coffee lovers with independent cafés through a seamless rewards system. 
                    Developed for the Independent Cafe Owner's Network (ICON) based in Worthing, Sussex, UK, this Flutter-powered app 
                    revolutionizes loyalty programs with NFC-enabled stamp cards, detailed café discovery features, and robust user profiles.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-2">
                      <li>NFC tap-to-earn digital stamp cards with confetti animations</li>
                      <li>Interactive café finder with location services and distance calculation</li>
                      <li>Comprehensive café profiles with menus, hours and social links</li>
                      <li>Secure authentication with email, Google and Apple sign-in</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NFC Integration</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Location Services</span>
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
                    <a href="#" className="flex h-10">
                      <img 
                        src="/images/projects/cafe-connect/badges/google-play.png" 
                        alt="Get it on Google Play" 
                        className="h-10 w-auto"
                      />
                    </a>
                    <div className="mb-6">
                      <Link href="/projects/cafe-connect" className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition duration-300">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center relative overflow-hidden shadow-md">
                    <span className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot1.webp')" }}></span>
                    <span className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark1.webp')" }}></span>
                  </div>
                  <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center relative overflow-hidden shadow-md">
                    <span className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot2.webp')" }}></span>
                    <span className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark2.webp')" }}></span>
                  </div>
                  <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center relative overflow-hidden shadow-md">
                    <span className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot3.webp')" }}></span>
                    <span className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark3.webp')" }}></span>
                  </div>
                  <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center relative overflow-hidden shadow-md">
                    <span className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot4.webp')" }}></span>
                    <span className="absolute inset-0 bg-cover bg-center hidden dark:block" style={{ backgroundImage: "url('/images/projects/cafe-connect/screenshot_dark4.webp')" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills Overview</h2>
          <p className="text-gray-600 mb-12 text-center">My technical expertise</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
              <p className="text-gray-600 mb-4">Flutter, Dart, iOS, Android, Responsive UI Design</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Front-End</h3>
              <p className="text-gray-600 mb-4">JavaScript, TypeScript, React, Next.js, HTML/CSS</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Back-End</h3>
              <p className="text-gray-600 mb-4">Firebase, RESTful APIs, Node.js, ASP.NET Core</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-4">Azure, Firebase, CI/CD, Docker, GitHub Actions</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/skills" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">View All Skills</a>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Recent Work</h2>
          <p className="text-gray-600 mb-12 text-center">Some of my latest projects</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">DimensionalAV</h3>
                <p className="text-gray-600 mb-4">4D & 3D+3T Audio Visualizer that responds to music in multiple dimensions.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Three.js</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Web Audio API</span>
                </div>
                <a href="/projects/dimensional-av" className="text-blue-600 font-semibold">View Project →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">PeerReview</h3>
                <p className="text-gray-600 mb-4">Peer Review website for A Multidimensional Temporal Universe paper.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                </div>
                <a href="/projects/peer-review" className="text-blue-600 font-semibold">View Project →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Code Survey</h3>
                <p className="text-gray-600 mb-4">Understanding the evolution in large software systems with LLM.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">NLP</span>
                </div>
                <a href="/projects/code-survey" className="text-blue-600 font-semibold">View Project →</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">I'm currently available for freelance work and new opportunities. Let's discuss how I can help with your project.</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
