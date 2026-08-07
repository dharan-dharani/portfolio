import { ExternalLink } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import { projects } from "../data/portfolio";

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="projects"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Projects"
          description="Real-world applications built end-to-end, from architecture to deployment."
        />

        <div ref={ref} className="reveal grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-shadow hover:shadow-[0_4px_20px_-8px_rgba(28,28,30,0.12)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                {project.type}
              </span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {project.description}
              </p>

              <p className="mt-4 text-xs font-semibold text-[var(--color-ink)]">
                Role: <span className="font-normal text-[var(--color-ink-soft)]">{project.role}</span>
              </p>

              <ul className="mt-3 space-y-2">
                {project.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-soft)]"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-ink-faint)]" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline"
                >
                  View project
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
