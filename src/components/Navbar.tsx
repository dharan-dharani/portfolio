import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-surface)]/95 backdrop-blur border-[var(--color-border)] shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-[var(--color-bg)]/80 backdrop-blur border-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-[15px] font-bold text-[var(--color-ink)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-accent)] text-xs font-bold text-white">
            {initials}
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={personalInfo.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            <Download size={15} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-[15px] font-medium text-[var(--color-ink)] border-b border-[var(--color-border)] last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-page pb-4">
            <a
              href={personalInfo.resumeFile}
              download
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white"
            >
              <Download size={15} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
