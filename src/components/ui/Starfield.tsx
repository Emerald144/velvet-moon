// Decorative twinkling stars. Positions are deterministic so SSR and client match.
const STARS = Array.from({ length: 60 }, (_, i) => ({
  left: (i * 37.7) % 100,
  top: (i * 53.3) % 100,
  size: (i % 3) + 1,
  delay: (i % 7) * 0.45,
}));

export function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cream animate-twinkle"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
        />
      ))}
    </div>
  );
}
