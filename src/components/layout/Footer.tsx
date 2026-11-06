import { profile } from "../../data";
import { Icon } from "../ui/Icon";
import { isFilled } from "../../lib/placeholder";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = profile.links.filter((l) => l.icon !== "download" && isFilled(l.href));

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-5 py-9 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <span className="rail-dual h-6 w-[3px] rounded-full" aria-hidden />
          <p className="text-sm text-muted">
            <span className="text-ink-2">{profile.name}</span>
            <span className="mx-2 text-line-2" aria-hidden="true">·</span>
            {year}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-label={l.label}
              target={/^https?:/i.test(l.href) ? "_blank" : undefined}
              rel={/^https?:/i.test(l.href) ? "noopener noreferrer" : undefined}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink-2 transition-colors hover:border-tech hover:text-tech"
            >
              <Icon name={l.icon} size={16} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink-2 transition-colors hover:border-tech hover:text-tech"
          >
            <Icon name="arrow" size={16} className="-rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
}
