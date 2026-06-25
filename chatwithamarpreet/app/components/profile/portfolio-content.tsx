import React from "react";
import {
  ProfileSection,
  ExperienceItem,
  SkillBadge,
  CertificationBadge,
} from "@/app/components/profile/profile-components";

const EXPERIENCE = [
  {
    title: "Lead Engineer & Solution Architect – Platform Modernization",
    company: "Zurich Insurance",
    period: "October 2025 - Present (9 months)",
    location: "North Sydney, NSW",
    description: [
      "Led architecture and engineering direction for scalable microfrontend and cloud-native platforms",
      "Designed and governed AWS-backed state management and platform integration patterns",
      "Established reusable engineering standards, shared libraries, and CI/CD guardrails",
      "Provided technical leadership across squads, influencing architecture decisions",
      "Mentored engineers and promoted modern engineering practices leveraging GitHub Copilot",
    ],
  },
  {
    title: "Principal Consultant",
    company: "Infosys",
    period: "May 2022 - November 2025 (3 years 7 months)",
    location: "Sydney, NSW",
    description: [
      "Owned and delivered complex software features using JAVA, NodeJS and Cloud",
      "Defined and implemented scalable software architectures",
      "Led cross-functional teams, fostering collaborative environment",
    ],
  },
  {
    title: "Tech Lead / Principal Software Engineer",
    company: "Westpac",
    period: "May 2022 - November 2025 (3 years 7 months)",
    location: "Sydney, NSW",
    description: [
      "Architected enterprise-grade database ontologies for high-stakes migration",
      "Led the development of a scalable desktop ecosystem using OpenFin",
      "Collaborated with vendor teams to optimize platform performance",
    ],
  },
];

const SKILLS = [
  "Cloud-Native Architecture",
  "Technical Leadership",
  "Enterprise Integration",
  "Generative AI",
  "LlamaIndex",
  "LangChain",
  "Spring AI",
  "Semantic Kernel",
  "AutoGen",
  "n8n",
  "FlowiseAI",
  "GitHub Copilot",
  "Cursor AI",
  "Python",
  "TypeScript",
  "Java",
  "Kotlin",
  "Node.js",
  "React.js",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "DevSecOps",
  "Microservices",
  "Platform Engineering",
];

const CERTIFICATIONS = [
  "Programming with JavaScript",
  "Microsoft Certified: Azure Fundamentals",
  "Open Digital Architecture Foundation Level Exam",
  "Generative AI for Software Development",
  "Agentic AI and AI Agents for Leaders",
];

export function PortfolioContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      {/* About Section */}
      <ProfileSection title="About Me" id="about">
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I'm an Enterprise AI Enablement Architect and technology leader with
            20+ years of experience driving enterprise modernization,
            cloud-native transformation, and platform engineering initiatives
            across banking, insurance, telecommunications, and regulated
            enterprise environments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Throughout my career, I've helped organizations modernize complex
            platforms, scale engineering capabilities, and align technology
            strategy with business outcomes. My experience spans enterprise
            architecture, cloud-native systems, DevSecOps, microservices,
            platform engineering, and large-scale digital transformation
            programs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In recent years, my focus has evolved toward AI-enabled
            transformation and AI-first engineering practices — exploring how
            Generative AI, agentic workflows, and intelligent automation can
            reshape enterprise software delivery, developer productivity, and
            operating models.
          </p>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-900 font-medium mb-2">Current Interests:</p>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>
                • Enterprise AI Enablement & AI-First Transformation
              </li>
              <li>• Agentic AI & Workflow Automation</li>
              <li>• Platform Engineering & DevSecOps</li>
              <li>• Cloud-Native Modernization</li>
              <li>• Enterprise Integration & API Strategy</li>
              <li>• AI Governance & Responsible AI</li>
            </ul>
          </div>
        </div>
      </ProfileSection>

      {/* Experience Section */}
      <ProfileSection title="Professional Experience" id="experience">
        <div className="space-y-2">
          {EXPERIENCE.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
          ))}
        </div>
      </ProfileSection>

      {/* Skills Section */}
      <ProfileSection title="Skills & Expertise" id="skills">
        <div className="flex flex-wrap">
          {SKILLS.map((skill, idx) => (
            <SkillBadge key={idx} skill={skill} />
          ))}
        </div>
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
          <p className="text-gray-800 font-medium mb-2">
            🚀 Hands-on AI Development:
          </p>
          <p className="text-gray-700 text-sm">
            I actively build and explore with LlamaIndex, LangChain, Spring AI,
            Semantic Kernel, and AutoGen. Currently leveraging GitHub Copilot
            and Cursor for spec-driven AI engineering workflows and modern AI
            developer tooling.
          </p>
        </div>
      </ProfileSection>

      {/* Certifications Section */}
      <ProfileSection title="Certifications & Credentials" id="certifications">
        <div className="space-y-3">
          {CERTIFICATIONS.map((cert, idx) => (
            <CertificationBadge key={idx} cert={cert} />
          ))}
        </div>
      </ProfileSection>

      {/* Call to Action */}
      <div
        id="contact"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Let's Connect!</h2>
        <p className="text-blue-100 mb-6">
          Interested in discussing AI-first transformation, enterprise
          modernization, or platform engineering? I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://linkedin.com/in/amarpreetbhatia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:amarpreetbhatia@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors font-medium border border-blue-400"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
