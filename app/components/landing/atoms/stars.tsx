export function Stars() {
  return (
    <div className="l-stars">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.7L6 22l1.5-7.2L2 10l7.1-1.1z" />
        </svg>
      ))}
    </div>
  );
}
