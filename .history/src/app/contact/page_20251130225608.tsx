'use client';

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const phone = formData.get('phone') as string | null;
    const company = formData.get('company') as string | null;
    const honeypot = formData.get('website'); // Honeypot field

    // Check honeypot - if filled, it's a bot
    if (honeypot) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Spam detected',
      });
      setIsSubmitting(false);
      return;
    }

    // Format subject with prefix
    const formattedSubject = `[wadding.bond CF] ${subject}`;

    // Build email body
    let emailBody = `Name: ${name}\n`;
    emailBody += `Email: ${email}\n`;
    if (phone) {
      emailBody += `Phone: ${phone}\n`;
    }
    if (company) {
      emailBody += `Company: ${company}\n`;
    }
    emailBody += `\nMessage:\n${message}`;

    try {
      const requestBody = {
        access_key: '73c216b4-9879-46da-95a2-f892ec12a7b8',
        subject: formattedSubject,
        from_name: name,
        from_email: email,
        message: emailBody,
      };

      // Log request for debugging
      console.log('Sending to Web3Forms:', {
        url: 'https://api.web3forms.com/submit',
        method: 'POST',
        body: requestBody,
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status, response.statusText);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const responseText = await response.text();
      console.log('Response text:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        throw new Error(`Invalid JSON response: ${responseText}`);
      }
      
      // Log response for debugging
      console.log('Web3Forms response:', data);

      // Check for success - Web3Forms returns success: true on success
      if (data.success === true) {
        console.log('Form submitted successfully, redirecting...');
        // Redirect to thank-you page with form data using window.location for static export
        const params = new URLSearchParams({
          name,
          email,
          subject,
          message,
          ...(phone && { phone }),
          ...(company && { company }),
        });
        // Use window.location.href for static export compatibility
        window.location.href = `/contact/thank-you?${params.toString()}`;
      } else {
        // Show error toast
        console.error('Form submission failed:', data);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: data.message || data.error || 'Failed to send message. Please try again.',
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while sending your message. Please try again.';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
      setIsSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl text-slate-200">
            I'm currently available for freelance work and new opportunities. Let's discuss how I can help with your project.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Send Me a Message</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
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
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <form onSubmit={handleSubmit}>
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone <span className="text-gray-400 text-sm font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your phone number"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                        Company <span className="text-gray-400 text-sm font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your company"
                        disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Section */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Project Inquiry</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
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
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">FAQ</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">What is your typical process for working with new clients?</h3>
                  <p className="text-gray-600">
                    I typically start with an initial consultation to understand your needs and project requirements. From there, I'll provide a proposal outlining scope, timeline, and cost. Once approved, I follow an agile development approach with regular updates and feedback sessions to ensure the final product meets your expectations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">How do you handle project pricing?</h3>
                  <p className="text-gray-600">
                    I offer flexible pricing options including fixed-price projects, hourly rates, and retainer arrangements depending on your needs. For most projects, I prefer to provide a detailed estimate after understanding the full scope to ensure transparency and avoid surprises.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">What is your availability for new projects?</h3>
                  <p className="text-gray-600">
                    I'm currently available for new projects and can typically begin within 1-2 weeks of finalizing project details. For ongoing work, I offer dedicated hours each week to ensure consistent progress on your project.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
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
      <section className="py-16 relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">Ready to bring your ideas to life? I'm excited to hear about your project and discuss how I can help make it a reality.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="mailto:doug@wadding.bond" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block">Email Me</a>
            <a href="https://uk.linkedin.com/in/wadding" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-block">Connect on LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
