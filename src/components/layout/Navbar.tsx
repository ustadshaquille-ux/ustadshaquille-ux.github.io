import { useEffect, useState } from "react";
import { navigation, profile } from "../../data";
import { useActiveSection } from "../../lib/hooks";
import { Icon } from "../ui/Icon";
import { isFilled } from "../../lib/placeholder";

const IDS = navigation.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body selama menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      {/* lompat ke konten — aksesibilitas keyboard */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      <header
        className={`no-print fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex min-h-11 min-w-11 items-center gap-2.5" aria-label="Back to top">
            <span className="rail-dual h-7 w-[3px] rounded-full" />
            <span className="font-mono text-sm font-bold tracking-tight text-ink">{initials}</span>
            <span className="hidden text-sm text-muted sm:inline">/ portfolio</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors ${
                  active === item.id ? "text-tech" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            {isFilled(profile.cv) && (
              <a
                href={profile.cv}
                download
                className="hidden min-h-11 rounded-lg border border-line-2 px-3.5 text-sm font-medium text-ink-2 transition-colors hover:border-tech hover:text-tech sm:inline-flex sm:items-center sm:gap-2"
              >
                <Icon name="download" size={15} />
                CV
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-2 text-ink-2 transition-colors hover:border-tech hover:text-tech md:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={16} />
            </button>
          </div>
        </nav>
      </header>

      {/* menu mobile */}
      {open && (
        <div
          className="no-print fixed inset-0 z-40 bg-bg/97 pt-16 backdrop-blur-xl md:hidden"
          onClick={() => setOpen(false)}
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-6">
            {navigation.map((item, i) => (
              <li key={item.id} className="border-b border-line last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-semibold text-ink"
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted tnum">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
