'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight,
  CheckCircle2, 
  Code2,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef } from 'react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4 text-sm font-medium py-1 px-3">
                Available for hire
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white" style={{textShadow: '0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.25)'}}>
                Douglas<br />Wadding-Bond
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-100 font-light">
                Full-Stack Developer & Consultant
              </h2>
              <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Crafting exceptional cross-platform mobile experiences with a focus on performance, usability, and modern design.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-900/20">
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>

              <div className="mt-12 flex gap-6 justify-center md:justify-start">
                <a href="https://github.com/DaLexisX" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://uk.linkedin.com/in/wadding" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:doug@wadding.bond" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <Image 
                  src="/profile.jpg" 
                  alt="Doug Wadding-Bond" 
                  fill
                  className="rounded-full object-cover border-4 border-white/10 shadow-2xl relative z-10"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </motion.div>
      </section>

      {/* Featured Project Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
            <p className="text-muted-foreground text-lg">My latest work</p>
          </motion.div>
          
          {/* CAFE:CONNECT Featured Project Section */}
<section className="py-12">
  <div className="container mx-auto px-6">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
    >
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Column: Content & Details */}
        <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col">
          
          {/* Header & Role */}
          <div className="flex justify-center items-start mb-6">
            <Image
              src="/images/projects/cafe-connect/cafe_connect_logo_black.png"
              alt="CAFE:CONNECT Logo"
              width={160}
              height={160}
              className="dark:invert"
            />
            
          </div>

          {/* Section 1: Executive Summary (Business Audience) */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Designed and delivered CAFE:CONNECT, a comprehensive dual-purpose cloud platform for the hospitality sector. 
              This multi-platform ecosystem bridges the gap between consumer engagement and business operations, 
              delivering a seamless digital experience across web and mobile.
            </p>
            
            <ul className="grid grid-cols-1 gap-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-500 mt-1 shrink-0" />
                <span>
                  <strong>B2C Engagement:</strong> A digital loyalty and location-finder app (iOS/Android) driving customer footfall via NFC rewards.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-500 mt-1 shrink-0" />
                <span>
                  <strong>B2B Operations:</strong> A dedicated Community Hub for members featuring a peer-to-peer Marketplace, Forums, and resource libraries.
                </span>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-200 dark:bg-slate-700 mb-8"></div>

          {/* Section 2: Technical Deep Dive (Two Columns) */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical Specification
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Column A: Hybrid Architecture */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 mb-2">
                  Hybrid Architecture
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>
                      <strong>Containerized Web:</strong> Next.js 15 deployed on Google Cloud Run for dynamic scaling.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>
                      <strong>Native Mobile:</strong> High-performance Flutter clients for iOS and Android.
                    </span>
                  </li>
                  {/* UPDATED POINT 1: Focus on the Orchestration/Tools */}
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>
                      <strong>Automated Orchestration:</strong> PowerShell pipelines utilizing <strong>Google Cloud Build</strong> to synchronize container rollouts with Firebase Hosting updates.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column B: Systems Engineering */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 mb-2">
                  Key Features
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                   {/* UPDATED POINT 2: Focus on the Promotion Strategy found in script */}
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <span>
                      <strong>Artifact Promotion:</strong> Immutable staging-to-production pipelines that promote exact container hashes, ensuring absolute environment parity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <span>
                      <strong>Native Hardware:</strong> Frictionless NFC "tap-to-collect" protocols with automated QR code fallback.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <span>
                      <strong>Secure Redemption:</strong> Transactional validation logic ensuring accurate stamp accrual and fraud prevention.
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Footer: Tech Stack & Actions */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {['Next.js 15', 'React 19', 'Flutter', 'TypeScript', 'GCP Cloud Run', 'Firebase', 'Docker'].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs hover:bg-slate-200 border-0 cursor-default">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 shadow-lg shadow-orange-500/20">
                <Link href="/projects/cafe-connect">
                  View Architecture <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex gap-3 px-2 opacity-80 hover:opacity-100 transition-opacity">
                <a href="https://apps.apple.com/ph/app/cafe-connect/id6742357756" target="_blank" rel="noopener noreferrer" aria-label="App Store">
                  <img src="/images/projects/cafe-connect/badges/app-store-black.png" alt="" className="h-8 w-auto dark:hidden" />
                  <img src="/images/projects/cafe-connect/badges/app-store-white.png" alt="" className="h-8 w-auto hidden dark:block" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.independentcafeownersnetwork.iconrewards" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
                  <img src="/images/projects/cafe-connect/badges/google-play.png" alt="" className="h-8 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Interactive Demo */}
        <div className="lg:w-1/2 bg-slate-50 dark:bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 relative min-h-[600px] lg:min-h-full">
            <iframe 
              src="/projects/cafe-connect/embed/index.html" 
              className="w-full h-full absolute inset-0 border-0"
              title="CAFE:CONNECT Interactive Demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
      </div>
    </motion.div>
  </div>
</section>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg">The tools and technologies I work with</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Mobile Development",
                icon: "📱",
                skills: "Flutter, Dart, iOS, Android, Objective-C",
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Front-End",
                icon: "💻",
                skills: "React, Next.js, TypeScript, Tailwind, Three.js",
                color: "bg-purple-50 text-purple-600"
              },
              {
                title: "Back-End",
                icon: "⚙️",
                skills: "ASP.NET Core, Node.js, Firebase, GCP",
                color: "bg-green-50 text-green-600"
              },
              {
                title: "Cloud & DevOps",
                icon: "☁️",
                skills: "GCP, Azure, Docker, CI/CD, GitHub Actions",
                color: "bg-orange-50 text-orange-600"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-slate-50/50">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${skill.color} flex items-center justify-center text-2xl mb-4`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm">{skill.skills}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Button asChild variant="ghost" size="lg" className="text-blue-600 hover:text-blue-700">
              <Link href="/skills">View Full Skillset <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
            <p className="text-muted-foreground text-lg">Selected projects from my portfolio</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Karaoke Name",
                desc: "Real-time karaoke gig management platform with queue management, song requests, and location-based discovery for singers, hosts and venues.",
                tags: ["Next.js", "Firebase", "PWA", "Real-time"],
                link: "/projects/karaoke-name",
                videoBase: "karaoke_name_homepage"
              },
              {
                title: "CAFE:CONNECT",
                desc: "Digital loyalty platform for independent cafes featuring NFC stamp integration, mobile app connectivity, and a comprehensive B2B community hub.",
                tags: ["Next.js", "Flutter", "Firebase", "NFC"],
                link: "/projects/cafe-connect",
                videoBase: "cafe_connect_homepage"
              },
              {
                title: "Est85 Coffee Works",
                desc: "Modern coffee roastery e-commerce platform with interactive 3D elements, roast information, and online ordering capabilities.",
                tags: ["Next.js", "Three.js", "E-commerce", "3D"],
                link: "/projects/est85",
                videoBase: "est85_homepage"
              }
            ].map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/projects">Explore All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600">
           <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to bring your ideas to life?</h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              I'm currently open for new opportunities and interesting projects.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-2xl">
              <Link href="/contact">Let's Work Together</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
