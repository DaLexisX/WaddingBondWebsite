import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doug Wadding-Bond | Senior Flutter & Mobile Developer",
  description: "Personal website of Doug Wadding-Bond, showcasing skills, projects, and professional experience in Flutter and mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 text-white">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Doug Wadding-Bond</div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-blue-400">Home</a>
              <a href="/about" className="hover:text-blue-400">About</a>
              <a href="/projects" className="hover:text-blue-400">Projects</a>
              <a href="/skills" className="hover:text-blue-400">Skills</a>
              <a href="/experience" className="hover:text-blue-400">Experience</a>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} Doug Wadding-Bond. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/DaLexisX" className="hover:text-blue-400">GitHub</a>
                <a href="https://uk.linkedin.com/in/wadding" className="hover:text-blue-400">LinkedIn</a>
                <a href="mailto:doug@wadding.bond" className="hover:text-blue-400">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
