import { Avatar } from "../atoms/avatar";
import { Stars } from "../atoms/stars";

interface PersonCardProps {
  initials: string;
  name: string;
  role: string;
  bio: string;
  src?: string;
  grad?: string;
  lab?: string;
  showStars?: boolean;
  quote?: string;
}

export function PersonCard({ initials, name, role, bio, src, grad, lab, showStars, quote }: PersonCardProps) {
  if (showStars && quote) {
    return (
      <div className="l-testi">
        <Stars />
        <p className="l-testi-quote">&ldquo;{quote}&rdquo;</p>
        <div className="l-testi-author">
          <Avatar initials={initials} src={src} grad={grad} size={40} />
          <div className="l-testi-meta">
            <span className="l-testi-name">{name}</span>
            <span className="l-testi-role">{role}{lab ? ` · ${lab}` : ""}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-5 rounded-lg border border-ink-200 bg-white p-7 shadow-card">
      <Avatar initials={initials} src={src} grad={grad} size={64} className="mr-2" />
      <div className="flex flex-col gap-0.5">
        <span className="text-base font-bold text-navy-900">{name}</span>
        <span className="text-[13px] font-semibold text-teal-600">{role}</span>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{bio}</p>
      </div>
    </div>
  );
}
