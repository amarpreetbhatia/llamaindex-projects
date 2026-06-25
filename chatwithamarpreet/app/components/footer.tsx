import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Amarpreet</h3>
            <p className="text-sm text-gray-400">
              AI Enablement Architect & Enterprise Modernization Expert
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors">AI & Generative AI</li>
              <li className="hover:text-blue-400 transition-colors">Cloud-Native</li>
              <li className="hover:text-blue-400 transition-colors">DevSecOps</li>
              <li className="hover:text-blue-400 transition-colors">Platform Engineering</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/amarpreetbhatia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/amarpreetbhatia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:amarpreetbhatia@gmail.com"
                className="hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://amarpreetbhatia.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Portfolio"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Amarpreet Bhatia. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Built with Next.js, LlamaIndex, and OpenRouter AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
