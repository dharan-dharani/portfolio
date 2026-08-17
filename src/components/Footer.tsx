import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { personalInfo, navLinks } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-page flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {personalInfo.name}
          </p>
          <p className="text-xs text-[var(--color-ink-faint)]">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {[
            {
              href: personalInfo.linkedin,
              label: "LinkedIn",
              icon: <LinkedinIcon size={18} />,
            },
            {
              href: personalInfo.github,
              label: "GitHub",
              icon: <GithubIcon size={18} />,
            },
            {
              href: `mailto:${personalInfo.email}`,
              label: "Email",
              icon: <Mail size={18} />,
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
