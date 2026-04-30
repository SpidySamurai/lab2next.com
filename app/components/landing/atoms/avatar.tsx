import Image from "next/image";

interface AvatarProps {
  initials: string;
  src?: string;
  grad?: string;
  size?: number;
  className?: string;
}

export function Avatar({ initials, src, grad, size = 64, className }: AvatarProps) {
  const base = [
    "shrink-0 flex items-center justify-center rounded-full",
    "bg-navy-900 text-white font-mono font-bold overflow-hidden",
    className,
  ].filter(Boolean).join(" ");

  const style = {
    width: size,
    height: size,
    fontSize: Math.round(size * 0.28),
    ...(grad ? { background: grad } : {}),
  };

  if (src) {
    return (
      <div className={base} style={style}>
        <Image
          src={src}
          alt={initials}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={base} style={style}>
      {initials}
    </div>
  );
}
