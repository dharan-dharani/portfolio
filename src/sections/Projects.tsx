import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { useMagnetic } from "../hooks/useMagnetic";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import { projects } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const magneticRef = useMagnetic(0.12);

  return (
    <motion.article
      ref={magneticRef}
      variants={item}
      className="magnetic-btn group flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-all duration-300 hover:border-[var(--color-ink-faint)] hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.1)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
            {project.type}
          </span>
          <h3 className="mt-1 text-lg font-bold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
            {project.name}
          </h3>
        </div>
        {project.links.length > 0 && (
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name}`}
            className="flex h-8 w-8 flex-none items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-ink-soft)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_12px_-4px_rgba(255,255,255,0.15)]"
          >
            <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-200 group-hover:scale-110" />
          </a>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
        {project.description}
      </p>

      <p className="mt-4 text-xs font-semibold text-[var(--color-ink)]">
        Role:{" "}
        <span className="font-normal text-[var(--color-ink-soft)]">
          {project.role}
        </span>
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
        {project.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>

      {project.links.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] transition-colors hover:underline"
            >
              {link.label}
              <ExternalLink size={12} aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="projects"
      className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28 overflow-hidden"
    >
      <div
        className="section-glow -right-64 top-1/4 -translate-y-1/2 opacity-30"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Projects"
          title="Projects I've Worked On"
          description="Real-world applications built end-to-end, from architecture to deployment."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
