import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-2">Douglas Wadding-Bond</h3>
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/DaLexisX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://uk.linkedin.com/in/wadding" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:doug@wadding.bond"
              className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

