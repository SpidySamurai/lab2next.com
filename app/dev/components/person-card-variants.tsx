// DEV ONLY — experimental PersonCard variants. No production imports.

interface PersonCardTeamProps {
  initials: string;
  name: string;
  role: string;
  bio: string;
}

interface PersonCardTestiDarkProps {
  initials: string;
  name: string;
  role: string;
  quote: string;
  lab?: string;
  grad?: string;
}

/** Accent: team card with a teal top border accent. */
export function PersonCardAccent({ initials, name, role, bio }: PersonCardTeamProps) {
  return (
    <div className="flex items-center gap-5 rounded-lg border border-ink-200 border-t-[3px] border-t-teal-500 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 text-base font-bold text-white">
        {initials}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-base font-bold text-navy-900">{name}</span>
        <span className="text-[13px] font-semibold text-teal-600">{role}</span>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{bio}</p>
      </div>
    </div>
  );
}

/** Compact: tight inline layout with small avatar and name·role on one line. */
export function PersonCardCompact({ initials, name, role, bio }: PersonCardTeamProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-ink-200 bg-white p-3 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
        {initials}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-bold text-navy-900">
          {name}
          <span className="ml-1.5 font-normal text-ink-400">·</span>
          <span className="ml-1.5 text-sm font-medium text-teal-600">{role}</span>
        </p>
        <p className="text-xs leading-relaxed text-ink-500">{bio}</p>
      </div>
    </div>
  );
}

/** TestiDark: dark navy testimonial card with teal stars and gradient avatar. */
export function PersonCardTestiDark({ initials, name, role, quote, lab, grad }: PersonCardTestiDarkProps) {
  const defaultGrad = "linear-gradient(135deg, #0EA5E9, #7C3AED)";

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-navy-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-0.5">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-4 w-4 fill-teal-400" viewBox="0 0 20 20" aria-hidden>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm italic leading-relaxed text-white/80">&ldquo;{quote}&rdquo;</p>

      {/* Author row */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: grad ?? defaultGrad }}
        >
          {initials}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-white">{name}</span>
          <span className="text-xs text-white/60">
            {role}
            {lab ? ` · ${lab}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
