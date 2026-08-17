import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { SkillIcon } from "../components/SkillIcons";
import { skillGroups } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-colors hover:border-[var(--color-ink-faint)]"
            >
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-soft)]"
                  >
                    <SkillIcon name={skill} size={14} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
