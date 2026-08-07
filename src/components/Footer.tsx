import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-page flex flex-col-reverse items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-[var(--color-ink-faint)]">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send email"
            className="text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
