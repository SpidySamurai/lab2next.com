// DEV ONLY — experimental PersonCard variants. No production imports.
import { Reveal } from "../../components/landing/atoms/reveal";
import { Avatar } from "../../components/landing/atoms/avatar";

interface PersonCardTeamProps {
  initials: string;
  name: string;
  role: string;
  bio: string;
  delay?: number;
}

interface PersonCardTestiDarkProps {
  initials: string;
  name: string;
  role: string;
  quote: string;
  lab?: string;
  grad?: string;
  delay?: number;
}

/** Accent: team card with a teal top border accent. */
export function PersonCardAccent({ initials, name, role, bio, delay = 0 }: PersonCardTeamProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-center gap-5 rounded-lg border border-ink-200 border-t-[3px] border-t-teal-500 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <Avatar initials={initials} size={64} />
        <div className="flex flex-col gap-0.5">
          <span className="text-base font-bold text-navy-900">{name}</span>
          <span className="text-[13px] font-semibold text-teal-600">{role}</span>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{bio}</p>
        </div>
      </div>
    </Reveal>
  );
}

/** Compact: tight inline layout with small avatar and name·role on one line. */
export function PersonCardCompact({ initials, name, role, bio, delay = 0 }: PersonCardTeamProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-start gap-3 rounded-lg border border-ink-200 bg-white p-3 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <Avatar initials={initials} size={36} />
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-bold text-navy-900">
            {name}
            <span className="ml-1.5 font-normal text-ink-400">·</span>
            <span className="ml-1.5 text-sm font-medium text-teal-600">{role}</span>
          </p>
          <p className="text-xs leading-relaxed text-ink-500">{bio}</p>
        </div>
      </div>
    </Reveal>
  );
}

/** TestiDark: dark navy testimonial card with teal stars and gradient avatar.
 *  Stars are inline (teal vs amber — intentional color variant). */
export function PersonCardTestiDark({ initials, name, role, quote, lab, grad, delay = 0 }: PersonCardTestiDarkProps) {
  const defaultGrad = "linear-gradient(135deg, #0EA5E9, #7C3AED)";

  return (
    <Reveal delay={delay}>
      <div className="flex flex-col gap-4 rounded-lg bg-navy-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-0.5">
        <div className="flex gap-1 text-teal-400">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.7L6 22l1.5-7.2L2 10l7.1-1.1z" />
            </svg>
          ))}
        </div>
        <p className="text-sm italic leading-relaxed text-white/80">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-3">
          <Avatar initials={initials} grad={grad ?? defaultGrad} size={40} />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold text-white">{name}</span>
            <span className="text-xs text-white/60">{role}{lab ? ` · ${lab}` : ""}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
