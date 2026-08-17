import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { LinkedinIcon, GithubIcon } from "../components/BrandIcons";
import { personalInfo } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } as const },
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: personalInfo.linkedinLabel,
    href: personalInfo.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: personalInfo.githubLabel,
    href: personalInfo.github,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description="Open to Flutter and mobile development opportunities. Feel free to reach out directly."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 md:max-w-3xl"
        >
          {contactItems.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <div className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-all hover:border-[var(--color-ink-faint)]">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[var(--color-ink-faint)]">
                    {contact.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-[var(--color-ink)]">
                    {contact.value}
                  </p>
                </div>
              </div>
            );

            if (!contact.href) {
              return <div key={contact.label}>{content}</div>;
            }

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                variants={fadeItem}
              >
                {content}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.a
          href={personalInfo.resumeFile}
          download
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-dark)] hover:text-[var(--color-bg)]"
        >
          <Download size={16} aria-hidden="true" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
