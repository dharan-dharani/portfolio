import { GraduationCap } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Education" title="Education" />

        <div ref={ref} className="reveal grid gap-4 md:max-w-3xl">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-bold text-[var(--color-ink)]">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-medium text-[var(--color-ink-faint)]">
                    {edu.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                  {edu.degree}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                  {edu.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
