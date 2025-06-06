"use client";

interface Tech {
  id: number;
  name: string;
}

interface InterviewExperience {
  id: number;
  role: string;
  experience: string;
  outcome: string;
  difficulty: string;
  tech_stack: Tech[];
}

interface Props {
  interviews: InterviewExperience[];
}

export default function InterviewExperiencesTab({ interviews }: Props) {
  return (
    <section>
      {interviews.length === 0 && <p>No interview experiences available.</p>}
      {interviews.map((exp) => (
        <div
          key={exp.id}
          className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
          <p className="mb-2">{exp.experience}</p>
          <p>
            <strong>Outcome:</strong>{" "}
            <span
              className={`font-semibold ${
                exp.outcome === "selected"
                  ? "text-green-600"
                  : exp.outcome === "rejected"
                  ? "text-red-600"
                  : exp.outcome === "on hold"
                  ? "text-yellow-600"
                  : "text-blue-600"
              }`}
            >
              {exp.outcome}
            </span>
          </p>
          <p>
            <strong>Difficulty:</strong> {exp.difficulty}
          </p>
          <div className="mt-2">
            <strong>Tech Stack:</strong>{" "}
            {exp.tech_stack.length > 0 ? (
              exp.tech_stack.map((tech) => (
                <span
                  key={tech.id}
                  className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
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
