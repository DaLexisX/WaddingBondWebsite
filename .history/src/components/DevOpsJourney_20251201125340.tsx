"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  CloudLightning, 
  Package, 
  ShieldCheck, 
  Rocket, 
  ArrowDown, 
  Server,
  FileCode,
  Layers
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// The data structure based on your specific 5-step process
const pipelineSteps = [
  {
    title: "1. Local Trigger & Context Filter",
    icon: <Terminal className="w-6 h-6 text-white" />,
    color: "bg-slate-800",
    description: "The deployment sequence begins locally. To ensure speed, we strictly filter the upload context.",
    tech: ["deploy.ps1", ".gcloudignore", "PowerShell"],
    details: "The script runs a git-based version tag and zips the source code. Crucially, it ignores the massive `node_modules` folder via `.gcloudignore`, reducing upload size from >1GB to <5MB."
  },
  {
    title: "2. Cloud Build Ingestion",
    icon: <CloudLightning className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
    description: "Google Cloud Build receives the lightweight source zip and initiates the build pipeline.",
    tech: ["cloudbuild.yaml", "GCP Secret Manager"],
    details: "The `cloudbuild.yaml` manifesto takes over. It injects environment variables and API keys as build-args securely, preparing the Docker context."
  },
  {
    title: "3. Docker Builder Stage",
    icon: <Package className="w-6 h-6 text-white" />,
    color: "bg-indigo-600",
    description: "A temporary 'heavy' container handles the compilation logic.",
    tech: ["npm ci", "TypeScript", "Next.js Build"],
    details: "We run `npm ci` for a clean install and `npm run build` to compile TypeScript. This generates the Next.js 'Standalone' folder—a traced output containing only the necessary production files.",
    isBuilderStage: true // Special visual flag
  },
  {
    title: "4. Docker Runner Stage",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    color: "bg-emerald-600",
    description: "Construction of the final, secure, immutable production image.",
    tech: ["Alpine Linux", "Non-root User"],
    details: "This stage copies *only* the 'standalone' folder and 'public' assets from the Builder. It discards source code and dev dependencies. It creates a system user (nextjs) to ensure the app runs without root privileges.",
    isRunnerStage: true // Special visual flag
  },
  {
    title: "5. Cloud Run Deployment",
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: "bg-violet-600",
    description: "Zero-downtime rollout to the serverless edge.",
    tech: ["Cloud Run", "Revisions", "Traffic Splitting"],
    details: "The final lightweight image is deployed. Cloud Run spins up the container, performs a health check, and migrates traffic to the new revision only when ready."
  }
];

export default function Architecture() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30 px-4 py-1 text-sm">
            CI/CD Case Study
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The Deployment Pipeline
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-slate-300 leading-relaxed">
            How I architected a secure, multi-stage Docker build pipeline on Google Cloud Platform to reduce image size by 90% and ensure zero-downtime deployments.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Layers className="text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Immutable Infrastructure</h3>
            <p className="text-slate-600 text-sm">Every deployment creates a new, sealed container. No patching live servers; we just replace them.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Security First</h3>
            <p className="text-slate-600 text-sm">Running as a non-root user within minimal Alpine Linux containers to minimize the attack surface.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Optimized for Scale</h3>
            <p className="text-slate-600 text-sm">Using Next.js Standalone mode to drastically reduce image size, ensuring faster cold starts.</p>
          </div>
        </div>

        {/* The Timeline Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {pipelineSteps.map((step, index) => (
              <TimelineCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Summary */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Pipeline Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Google Cloud Run', 'Cloud Build', 'Docker', 'Next.js 15', 'PowerShell Core', 'Firebase Hosting'].map((tech) => (
              <span key={tech} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Individual Timeline Card Component
type TimelineCardProps = {
  step: (typeof pipelineSteps)[number];
  index: number;
};

const TimelineCard = ({ step, index }: TimelineCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-start ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      
      {/* 1. The Timeline Node (Center) */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 mt-1">
        <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${step.color}`}>
          {step.icon}
        </div>
      </div>

      {/* 2. The Content Card */}
      <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
        <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
          
          {/* Header */}
          <div className={`flex flex-col mb-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
              {step.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {step.tech.map((t: string) => (
                <span key={t} className="px-2 py-0.5 text-xs font-semibold bg-slate-100 text-slate-600 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            {step.description}
          </p>
          
          <div className={`p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-500 leading-relaxed ${isEven ? 'text-right' : 'text-left'}`}>
            <FileCode className={`w-4 h-4 mb-1 inline-block mr-1 text-slate-400`} />
            {step.details}
          </div>

          {/* The "Optimization" Visual for Builder/Runner stages */}
          {(step.isBuilderStage || step.isRunnerStage) && (
             <div className="mt-4 pt-4 border-t border-slate-100">
               {step.isBuilderStage && (
                 <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-600 bg-amber-50 p-2 rounded">
                   <span>Input: Source Code</span>
                   <ArrowDown className="w-3 h-3" />
                   <span>Output: Standalone Folder</span>
                 </div>
               )}
               {step.isRunnerStage && (
                 <div className="flex items-center justify-center gap-4">
                   <div className="text-center opacity-40 grayscale">
                     <div className="w-10 h-10 bg-slate-300 rounded mx-auto mb-1 flex items-center justify-center text-[10px] text-white font-bold">1GB</div>
                     <span className="text-[10px]">Builder</span>
                   </div>
                   <ArrowDown className="w-5 h-5 text-emerald-500 animate-bounce" />
                   <div className="text-center">
                     <div className="w-10 h-10 bg-emerald-500 rounded mx-auto mb-1 flex items-center justify-center text-[10px] text-white font-bold shadow-lg shadow-emerald-200">80MB</div>
                     <span className="text-[10px] font-bold text-emerald-700">Runner</span>
                   </div>
                 </div>
               )}
             </div>
          )}

        </div>
      </div>

      {/* 3. Empty spacer for the other side (Desktop only) */}
      <div className="hidden md:block md:w-1/2" />
      
    </motion.div>
  );
};