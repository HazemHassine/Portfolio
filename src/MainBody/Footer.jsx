import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t to-teal-600/0 from-gray-900/50 backdrop-blur-md py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-300">Get in Touch</h3>
            <p className="text-gray-300 max-w-xs">
              Thank you for visiting! I'm always open to new opportunities and collaborations.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-300">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-gray-300">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-teal-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-teal-300 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-teal-300 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-teal-300 transition-colors">Contact</button>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-300">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/HazemHassine"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-teal-500/20 text-white hover:bg-teal-400/40 transition-colors backdrop-blur-sm"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hazem-hassine/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-teal-500/20 text-white hover:bg-teal-400/40 transition-colors backdrop-blur-sm"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/mhazem_hassine/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-teal-500/20 text-white hover:bg-teal-400/40 transition-colors backdrop-blur-sm"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-teal-500/20">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Mohamed Hazem Hassine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

