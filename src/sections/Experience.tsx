import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import { experience } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="A track record of shipping real-time, cross-platform Flutter applications across delivery, mobility, and marketing-tech products."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          <div
            className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-[var(--color-border)] sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experience.map((job) => (
              <motion.li
                key={`${job.role}-${job.company}`}
                variants={item}
                className="relative sm:pl-10"
              >
                <span
                  className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] sm:block"
                  aria-hidden="true"
                />

                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-ink-faint)]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-ink)] sm:text-lg">
                        {job.role}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-accent)]">
                        {job.company}
                      </p>
                    </div>
                    <span className="whitespace-nowrap rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-soft)]">
                      {job.duration}
                      {job.current && (
                        <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] align-middle" />
                      )}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-soft)]"
                      >
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-ink-faint)]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
