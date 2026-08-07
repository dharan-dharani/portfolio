import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="skills"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Core technologies and practices I use to build and ship production-ready Flutter applications."
        />

        <div
          ref={ref}
          className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5"
            >
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
