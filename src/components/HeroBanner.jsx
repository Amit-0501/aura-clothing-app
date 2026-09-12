export default function HeroBanner() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="relative h-[88vh] flex items-end">

        {/* ── Background image ─────────────────────────── */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80&auto=format&fit=crop"
            alt="AURA Studio editorial — model in minimal clothing"
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/25 to-[#0a0a0a]/10" />
        </div>

        {/* ── Hero text ────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
          <div className="max-w-md">
            <p className="text-[#d4c5a9] text-[10px] tracking-[0.5em] uppercase mb-5 animate-fade-in">
              Autumn — Winter 2025
            </p>

            <h1 className="text-[64px] md:text-[80px] font-light leading-[0.92] tracking-tight mb-7 animate-slide-up">
              Dressed<br />in Silence
            </h1>

            <p className="text-[#999] text-[13px] leading-relaxed mb-10 max-w-xs animate-slide-up">
              Minimal forms. Enduring quality. A wardrobe built for the in-between moments.
            </p>

            <a
              href="#collection"
              className="inline-flex items-center gap-3 border border-[#f5f5f5]/60 text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#0a0a0a] hover:border-[#f5f5f5] transition-all duration-300 px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase animate-slide-up"
            >
              Explore Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Scroll indicator ─────────────────────────── */}
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] tracking-[0.4em] uppercase rotate-90 origin-center translate-y-4">
            Scroll
          </span>
          <div className="w-px h-12 bg-[#f5f5f5]" />
        </div>
      </div>
    </section>
  )
}
