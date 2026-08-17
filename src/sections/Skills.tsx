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
      className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28 overflow-hidden"
    >
      <div
        className="section-glow -right-64 top-1/2 -translate-y-1/2 opacity-30"
        aria-hidden="true"
      />
      <div className="container-page relative">
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
              className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-ink-faint)] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.08)]"
            >
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group/item inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5 text-xs font-medium text-[var(--color-ink-soft)] transition-all duration-200 hover:border-[var(--color-ink-faint)] hover:text-[var(--color-accent)] hover:shadow-[0_0_12px_-4px_rgba(255,255,255,0.08)]"
                  >
                    <SkillIcon
                      name={skill}
                      size={14}
                      className="transition-transform duration-200 group-hover/item:scale-110"
                    />
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
