import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  return (
    <div className="min-h-screen">
      {/* Skills Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
          <p className="text-xl max-w-3xl text-slate-200">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Programming Languages</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Core languages I use regularly for building production applications.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                    C#
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-0">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-0">
                    Dart
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-0">
                    HTML5
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                    CSS3
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                    SQL
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-0">
                    Python
                  </Badge>
                </div>
              </div>
                  </div>
                      </div>
                      </div>
      </section>

      {/* Web & Front-End Section */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Web & Front-End</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Modern frameworks and libraries for building responsive, performant web applications.
              </p>
                      </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-0">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                        Tailwind
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-pink-100 text-pink-800 hover:bg-pink-200 border-0">
                        Framer Motion
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                        Three.js
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Recharts
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        React Three Fiber
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-0">
                        Embla Carousel
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-teal-100 text-teal-800 hover:bg-teal-200 border-0">
                        Lucide React
                      </Badge>
                      </div>
                      </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Legacy & Enterprise</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        ASP.NET MVC
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        ASP.NET Web Forms
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-0">
                        jQuery
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                        Bootstrap
                      </Badge>
                </div>
                  </div>
                </div>
                      </div>
                      </div>
                      </div>
                      </div>
      </section>

      {/* Mobile Development Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Mobile Development</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Cross-platform and native mobile development experience.
              </p>
                      </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-0">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-0">
                    Dart
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 border-0">
                    iOS
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                    Android
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                    Objective-C
                  </Badge>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Built and published native iOS apps (Objective-C) and cross-platform apps (Flutter) for production use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
                
      {/* Back-End & APIs Section */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Back-End & APIs</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Server-side development, APIs, and backend architecture.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Frameworks & Platforms</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        ASP.NET Core
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        ASP.NET Web API
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Firebase Admin SDK
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        GCP Cloud Functions
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Integration & Services</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        RESTful APIs
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                        Stripe
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                        Leaflet / Maps
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        OAuth / SSO
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Azure AD
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-0">
                        Axios
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-0">
                        Cheerio
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-rose-100 text-rose-800 hover:bg-rose-200 border-0">
                        Zod
                      </Badge>
                      </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
                
      {/* Databases & Data Management Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Databases & Data</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Relational and NoSQL database experience with performance optimization.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Relational Databases</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        MS SQL Server
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        T-SQL
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        Stored Procedures
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        Query Optimization
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        Indexing Strategies
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">NoSQL & Cloud Data</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Firebase Firestore
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Real-time Listeners
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Atomic Transactions
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Azure Data Services
                      </Badge>
                      </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & DevOps Section */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Cloud & DevOps</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Cloud platforms, containerization, and CI/CD pipelines.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Cloud Platforms</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Google Cloud Platform (GCP)
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Azure
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        AWS
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Firebase
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-0">
                        Cloud Run
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">DevOps Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Docker
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                        GitHub Actions
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Azure DevOps
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        CI/CD Pipelines
                      </Badge>
                    </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
      </section>

      {/* Development Tools Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Development Tools</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                IDEs, version control, and project management tools.
              </p>
                        </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">IDEs & Editors</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Visual Studio
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-0">
                        VS Code / Cursor
                      </Badge>
                        </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Version Control</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Git
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                        GitHub
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        TFS
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        SVN
                      </Badge>
                        </div>
                        </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Project Management</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        JIRA
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Azure Boards
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Trello
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                        Confluence
                      </Badge>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Quality Section */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Testing & Quality</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Testing frameworks and quality assurance practices.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                    NUnit
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                    xUnit
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-0">
                    Jest
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                    Unit Testing
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                    Integration Testing
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-slate-100 text-slate-800 hover:bg-slate-200 border-0">
                    Performance Profiling
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science & Python Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Data Science & Python</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Python libraries and tools for data analysis and AI development.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Data Analysis</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        Pandas
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                        NumPy
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                        SQLAlchemy
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-0">
                        DuckDB
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        PyArrow
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Web & Visualization</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-red-100 text-red-800 hover:bg-red-200 border-0">
                        Streamlit
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        PyDeck
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Interests Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Other Interests</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600">
                Additional technologies and creative tools I work with.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">3D & Graphics</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 border-0">
                        Unity3D
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                        Three.js
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Blender
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Design Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-pink-100 text-pink-800 hover:bg-pink-200 border-0">
                        Photoshop
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
                        Illustrator
                      </Badge>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s work together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">Looking for a skilled developer with expertise in Flutter and mobile development? I&apos;m available for new opportunities and projects.</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
