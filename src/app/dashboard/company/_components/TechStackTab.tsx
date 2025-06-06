"use client";

interface Tech {
  id: number;
  name: string;
}

interface Props {
  techStack: Tech[];
}

export default function TechStackTab({ techStack }: Props) {
  return (
    <section>
      {techStack.length === 0 && <p>No tech stack information available.</p>}
      <div>
        {techStack.map((tech) => (
          <span
            key={tech.id}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
