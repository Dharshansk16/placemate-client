"use client";

import Link from "next/link";

interface Props {
  company: {
    description: string;
    headquarters: string;
    founded_year: number;
    employee_count: number;
    industry: string;
    website: string;
    average_ctc: number;
    work_culture: string;
  };
}

export default function OverviewTab({ company }: Props) {
  return (
    <section>
      <p className="mb-6 text-lg text-gray-700">{company.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Work Culture</h2>
        <p className="text-gray-700">{company.work_culture}</p>
      </div>
    </section>
  );
}
