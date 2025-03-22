import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl">
            I'm currently available for freelance work and new opportunities. Let's discuss how I can help with your project.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Send Me a Message</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:doug@wadding.bond" className="text-blue-600 hover:underline">doug@wadding.bond</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a href="https://uk.linkedin.com/in/wadding" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/wadding</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <a href="https://github.com/DaLexisX" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/DaLexisX</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Project Inquiry</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Looking to start a project?</h3>
                <p className="text-gray-600 mb-6">
                  I'm currently available for freelance work and new opportunities. If you're interested in working together, please provide some details about your project to get the conversation started.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">What I can help with:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Mobile application development (Flutter, iOS, Android)</li>
                      <li>Web application development</li>
                      <li>Cross-platform solutions</li>
                      <li>UI/UX implementation</li>
                      <li>Technical consulting and architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Project information that helps:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Brief description of your project or idea</li>
                      <li>Target platforms (web, mobile, both)</li>
                      <li>Timeline and budget considerations</li>
                      <li>Any specific technologies or requirements</li>
                      <li>Your role and involvement in the project</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="mailto:doug@wadding.bond?subject=Project%20Inquiry"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">FAQ</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">What is your typical process for working with new clients?</h3>
                  <p className="text-gray-600">
                    I typically start with an initial consultation to understand your needs and project requirements. From there, I'll provide a proposal outlining scope, timeline, and cost. Once approved, I follow an agile development approach with regular updates and feedback sessions to ensure the final product meets your expectations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">How do you handle project pricing?</h3>
                  <p className="text-gray-600">
                    I offer flexible pricing options including fixed-price projects, hourly rates, and retainer arrangements depending on your needs. For most projects, I prefer to provide a detailed estimate after understanding the full scope to ensure transparency and avoid surprises.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">What is your availability for new projects?</h3>
                  <p className="text-gray-600">
                    I'm currently available for new projects and can typically begin within 1-2 weeks of finalizing project details. For ongoing work, I offer dedicated hours each week to ensure consistent progress on your project.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Do you provide ongoing maintenance and support?</h3>
                  <p className="text-gray-600">
                    Yes, I offer ongoing maintenance and support packages for completed projects. This includes bug fixes, minor updates, and technical support to ensure your application continues to run smoothly after launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Ready to bring your ideas to life? I'm excited to hear about your project and discuss how I can help make it a reality.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="mailto:doug@wadding.bond" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">Email Me</a>
            <a href="https://uk.linkedin.com/in/wadding" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">Connect on LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
