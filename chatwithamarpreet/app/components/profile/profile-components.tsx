import React from "react";

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <div className="mb-12 pb-12 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export function ExperienceItem({
  title,
  company,
  period,
  location,
  description,
}: ExperienceItemProps) {
  return (
    <div className="mb-8 pl-4 border-l-4 border-blue-500">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg text-blue-600 font-medium">{company}</p>
        </div>
        <div className="text-sm text-gray-600 mt-2 md:mt-0">
          <p className="font-medium">{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 mt-3">
        {description.map((item, idx) => (
          <li key={idx} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2">
      {skill}
    </span>
  );
}

export function CertificationBadge({ cert }: { cert: string }) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 mb-3">
      <p className="text-gray-800 font-medium">{cert}</p>
    </div>
  );
}
