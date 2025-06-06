"use client";

import { useState } from "react";
import OverviewTab from "./OverviewTab";
import RolesTab from "./RolesTab";
import InterviewExperiencesTab from "./InterviewExperienceTab";
import ReviewsTab from "./ReviewTab";
import TechStackTab from "./TechStackTab";
import { InsightsTab } from "./InsightsTab";

import type { Company } from "@/types/company";

interface Props {
  company: Company;
}

export default function CompanyTabs({ company }: Props) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-4xl font-extrabold mb-6">{company.name}</h1>

      <div className="mb-8 border-b border-gray-300">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {[
            { id: "overview", label: "Overview" },
            { id: "roles", label: "Roles" },
            { id: "interviews", label: "Interview Experiences" },
            { id: "reviews", label: "Reviews" },
            { id: "techstack", label: "Tech Stack" },
            { id: "insights", label: "Insights" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-current={activeTab === id ? "page" : undefined}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === "overview" && <OverviewTab company={company} />}
      {activeTab === "roles" && <RolesTab roles={company.roles} />}
      {activeTab === "interviews" && (
        <InterviewExperiencesTab interviews={company.interview_experiences} />
      )}
      {activeTab === "reviews" && <ReviewsTab reviews={company.reviews} />}
      {activeTab === "techstack" && (
        <TechStackTab techStack={company.tech_stack} />
      )}
      {activeTab === "insights" && <InsightsTab company={company} />}
    </div>
  );
}
