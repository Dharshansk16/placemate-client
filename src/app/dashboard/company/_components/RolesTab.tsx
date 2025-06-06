"use client";

interface Tech {
  id: number;
  name: string;
}

interface Role {
  id: number;
  title: string;
  description: string;
  tech_stack: Tech[];
  average_ctc: number;
  job_location: string;
  openings_per_year: number;
}

interface Props {
  roles: Role[];
}

export default function RolesTab({ roles }: Props) {
  return (
    <section>
      {roles.length === 0 && <p>No roles information available.</p>}
      {roles.map((role) => (
        <div
          key={role.id}
          className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
          <p className="mb-2 text-gray-700">{role.description}</p>

          <p>
            <strong>Average CTC:</strong> {role.average_ctc} LPA
          </p>
          <p>
            <strong>Job Locations:</strong> {role.job_location}
          </p>
          <p>
            <strong>Openings per Year:</strong> {role.openings_per_year}
          </p>

          <div className="mt-2">
            <strong>Tech Stack:</strong>{" "}
            {role.tech_stack.length > 0 ? (
              role.tech_stack.map((tech) => (
                <span
                  key={tech.id}
                  className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                >
                  {tech.name}
                </span>
              ))
            ) : (
              <span>None listed</span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
