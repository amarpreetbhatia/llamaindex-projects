"use client";

import React from "react";
import { Briefcase, MapPin, FileText, Github, Linkedin, Mail } from "lucide-react";

export function ProfileHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Amarpreet Bhatia
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              AI Enablement Architect | Enterprise Modernization | Cloud-Native
            </p>
            <p className="text-lg text-blue-600 font-medium mb-6">
              Platforms, DevSecOps & AI-First Transformation
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6 text-gray-700">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Greater Sydney Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>20+ years of enterprise technology experience</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-gray-700 leading-relaxed mb-6 max-w-lg">
              Enterprise AI Enablement Architect and technology leader driving
              enterprise modernization, cloud-native transformation, and
              platform engineering initiatives. Specialized in Generative AI,
              RAG systems, agentic AI frameworks, and AI-first engineering
              practices.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/amarpreetbhatia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:amarpreetbhatia@gmail.com"
                className="inline-flex items-center space-x-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right - Key Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
              <p className="text-sm text-gray-500">Enterprise Technology</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <p className="text-gray-600 font-medium">AI Certifications</p>
              <p className="text-sm text-gray-500">Generative AI & Agentic AI</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
              <p className="text-gray-600 font-medium">Organizations Led</p>
              <p className="text-sm text-gray-500">Banking to Insurance</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <p className="text-gray-600 font-medium">Learning Mindset</p>
              <p className="text-sm text-gray-500">AI-First Evolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
