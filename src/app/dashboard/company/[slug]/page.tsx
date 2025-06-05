import React from "react";
import Link from "next/link";

interface Tech {
  id: number;
  name: string;
}

interface Role {
  id: number;
  title: string;
  description?: string;
}

interface CompanyData {
  name: string;
  description: string;
  tech_stack: Tech[];
  headquarters: string;
  founded_year: number;
  employee_count: number;
  industry: string;
  website: string;
  average_ctc: number;
  work_culture: string;
  roles: Role[];
  interview_tips: string[];
}

interface Props {
  params: { slug: string };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchCompanyData(slug: string): Promise<CompanyData> {
  console.log(API_URL);
  const res = await fetch(`${API_URL}/view-info/?company_name=${slug}`, {
    headers: {
      Authorization: ``,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch company data");
  }
  const data = await res.json();
  console.log(data);
  return data;
}

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
      {tech}
    </span>
  );
}

export default async function CompanyInfoPage({ params }: Props) {
  const { slug } = params;
  const company = await fetchCompanyData(slug);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      {/* Company Name */}
      <h1 className="text-4xl font-extrabold mb-4">{company.name}</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">{company.description}</p>

      {/* Basic Info */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p>
            <strong>Founded:</strong> {company.founded_year}
          </p>
          <p>
            <strong>Headquarters:</strong> {company.headquarters}
          </p>
          <p>
            <strong>Employee Count:</strong> {company.employee_count}
          </p>
        </div>
        <div>
          <p>
            <strong>Industry:</strong> {company.industry}
          </p>
          <p>
            <strong>Website: </strong>
            <Link
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {company.website}
            </Link>
          </p>
          <p>
            <strong>Average CTC (Freshers):</strong> {company.average_ctc} LPA
          </p>
        </div>
      </section>

      {/* Work Culture */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Work Culture</h2>
        <p className="text-gray-700">{company.work_culture}</p>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div>
          {Array.isArray(company.tech_stack) &&
          company.tech_stack.length > 0 ? (
            company.tech_stack.map((tech) => (
              <TechBadge key={tech.id} tech={tech.name} />
            ))
          ) : (
            <p>No tech stack info available.</p>
          )}
        </div>
      </section>

      {/* Roles */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Roles</h2>
        {Array.isArray(company.roles) && company.roles.length > 0 ? (
          company.roles.map((role) => (
            <div
              key={role.id ?? role.title} // Use role.id if available, fallback to title
              className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
              <p className="mb-2 text-gray-700">
                {role.description
                  ? role.description
                  : "No description available."}
              </p>
            </div>
          ))
        ) : (
          <p>No roles information available.</p>
        )}
      </section>

      {/* Interview Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Interview Tips</h2>
        {Array.isArray(company.interview_tips) &&
        company.interview_tips.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {company.interview_tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        ) : (
          <p>No interview tips available.</p>
        )}
      </section>
    </main>
  );
}
