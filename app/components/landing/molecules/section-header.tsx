import { Reveal } from "../atoms/reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, lede, centered }: SectionHeaderProps) {
  const wrapStyle = centered
    ? { textAlign: "center" as const, marginLeft: "auto", marginRight: "auto", maxWidth: 960 }
    : undefined;
  const eyebrowStyle = centered ? { justifyContent: "center" } : undefined;
  const titleStyle = centered ? { margin: "0 auto" } : undefined;
  const ledeStyle = centered ? { marginLeft: "auto", marginRight: "auto" } : undefined;

  return (
    <Reveal>
      <div className="l-section-head" style={wrapStyle}>
        <div className="l-eyebrow" style={eyebrowStyle}>{eyebrow}</div>
        <h2 className="l-section-title" style={titleStyle}>{title}</h2>
        {lede && <p className="l-section-lede" style={ledeStyle}>{lede}</p>}
      </div>
    </Reveal>
  );
}
