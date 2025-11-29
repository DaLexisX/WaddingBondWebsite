'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <Image 
                    src="/images/projects/cafe-connect/cafe_connect_logo_black.png" 
                    alt="CAFE:CONNECT Logo" 
                    width={200} 
                    height={200} 
                    className="mb-6 dark:invert"
                  />
                  <h3 className="text-2xl font-bold mb-4">CAFE:CONNECT</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A revolutionary digital loyalty platform for the Independent Cafe Owner's Network (ICON). 
                    Connecting coffee lovers with independent cafés through NFC-enabled rewards, 
                    discovery features, and seamless user experiences.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Flutter', 'Firebase', 'NFC', 'Maps API', 'iOS', 'Android'].map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Link href="/projects/cafe-connect">
                        Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
                    <a href="https://play.google.com/store/apps/details?id=com.icon.cafeconnect" target="_blank" rel="noopener noreferrer" className="flex h-10">
                      <img
                        src="/images/projects/cafe-connect/badges/google-play.png"
                        alt="Get it on Google Play"
                        className="h-10 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-slate-100 dark:bg-slate-900 relative overflow-hidden min-h-[400px]">
                  <iframe 
                    src="/projects/cafe-connect/embed/index.html" 
                    className="w-full h-full absolute inset-0 border-0"
                    title="CAFE:CONNECT Interactive Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
              </div>
            </div>
          </motion.div>
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
                skills: "Flutter, Dart, iOS, Android",
                color: "bg-blue-50 text-blue-600",
                level: 95
              },
              {
                title: "Front-End",
                icon: "💻",
                skills: "React, Next.js, TypeScript, Tailwind",
                color: "bg-purple-50 text-purple-600",
                level: 90
              },
              {
                title: "Back-End",
                icon: "⚙️",
                skills: "Firebase, Node.js, .NET Core",
                color: "bg-green-50 text-green-600",
                level: 85
              },
              {
                title: "Cloud & DevOps",
                icon: "☁️",
                skills: "Azure, Docker, CI/CD",
                color: "bg-orange-50 text-orange-600",
                level: 80
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
                    <p className="text-muted-foreground mb-4 text-sm">{skill.skills}</p>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div 
                        className="h-2 rounded-full bg-current opacity-80"
                        style={{ width: `${skill.level}%`, color: 'inherit' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
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
                title: "DimensionalAV",
                desc: "4D & 3D+3T Audio Visualizer",
                tags: ["JavaScript", "Three.js", "Web Audio"],
                link: "/projects/dimensional-av",
                color: "bg-indigo-500"
              },
              {
                title: "PeerReview",
                desc: "Academic paper review platform",
                tags: ["HTML", "CSS", "JavaScript"],
                link: "/projects/peer-review",
                color: "bg-emerald-500"
              },
              {
                title: "Code Survey",
                desc: "LLM-powered software analysis",
                tags: ["Python", "ML", "NLP"],
                link: "/projects/code-survey",
                color: "bg-rose-500"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full border-0 shadow-lg group cursor-pointer">
                  <div className={`h-48 ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                      {project.title.substring(0, 2)}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
