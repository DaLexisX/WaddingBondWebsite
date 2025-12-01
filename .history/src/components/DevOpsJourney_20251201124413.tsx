"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  CloudLightning,
  Box,
  ShieldCheck,
  Globe,
  ArrowDown,
} from "lucide-react";

type PipelineStep = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  tech: string[];
  details: string;
  highlight?: boolean;
};

// Data structure representing your specific pipeline steps
const pipelineSteps: PipelineStep[] = [
  {
    title: "Local Trigger",
    icon: <Terminal className="w-6 h-6 text-white" />,
    color: "bg-slate-800",
    description: "PowerShell automation script triggers the process.",
    tech: ["deploy.ps1", ".gcloudignore"],
    details:
      "Filters heavy node_modules before upload to ensure lightweight context.",
  },
  {
    title: "Cloud Compilation",
    icon: <CloudLightning className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
    description: "Google Cloud Build accepts the source context.",
    tech: ["cloudbuild.yaml", "GCP"],
    details:
      "Injects secure environment variables (Stripe/Firebase keys) via build-args.",
  },
  {
    title: "Multi-Stage Docker Build",
    icon: <Box className="w-6 h-6 text-white" />,
    color: "bg-indigo-600",
    description: "Optimizes container size and security.",
    tech: ["Dockerfile", "Next.js Standalone"],
    details:
      "Stage 1 builds the app. Stage 2 copies ONLY necessary artifacts, discarding dev dependencies.",
    highlight: true, // Special visual emphasis
  },
  {
    title: "Secure Runner",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    color: "bg-emerald-600",
    description: "Container preparation for production.",
    tech: ["Non-root User", "Alpine Linux"],
    details:
      "Switches to 'nextjs' system user to prevent container breakout attacks.",
  },
  {
    title: "Live Deployment",
    icon: <Globe className="w-6 h-6 text-white" />,
    color: "bg-violet-600",
    description: "Zero-downtime rollout.",
    tech: ["Cloud Run", "Firebase Hosting"],
    details:
      "Traffic migrates to the new revision only after health checks pass.",
  },
];

const PipelineCard = ({
  step,
  index,
}: {
  step: PipelineStep;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* 1. The Timeline Dot (Center) */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        <div
          className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${step.color}`}
        >
          {step.icon}
        </div>
      </div>

      {/* 2. The Content Card */}
      <div
        className={`w-full md:w-1/2 pl-20 md:pl-0 ${
          isEven ? "md:pr-12 text-right" : "md:pl-12 text-left"
        }`}
      >
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100 group">
          {/* Header */}
          <div
            className={`flex flex-col ${
              isEven ? "md:items-end" : "md:items-start"
            }`}
          >
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {step.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {step.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <p className="text-slate-600 text-sm mb-3">{step.description}</p>
          <p className="text-slate-400 text-xs border-t pt-3 border-slate-100">
            {step.details}
          </p>

          {/* Special Visual for "Shrinking" Image (The Senior Detail) */}
          {step.highlight && (
            <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-200 rounded flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs font-bold text-indigo-700">1GB+</span>
                </div>
                <span className="text-[10px] text-indigo-400">Builder</span>
              </div>
              <ArrowDown className="text-indigo-400 animate-bounce" />
              <div className="text-center">
                <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center mx-auto mb-1 shadow-md">
                  <span className="text-[10px] font-bold text-white">80MB</span>
                </div>
                <span className="text-[10px] text-indigo-600 font-bold">
                  Runner
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Empty spacer for the other side (Desktop only) */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
};

const DevOpsJourney = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Architecture &amp; Deployment
        </h2>
        <p className="text-slate-500 mt-2">
          Fully automated CI/CD pipeline leveraging Google Cloud Platform and
          multi-stage Docker builds.
        </p>
      </div>

      <div className="relative">
        {/* The Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {pipelineSteps.map((step, index) => (
            <PipelineCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevOpsJourney;


