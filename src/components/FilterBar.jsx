import { CATEGORIES, SORT_OPTIONS } from '../data/products'

export default function FilterBar({ activeCategory, onCategoryChange, sortBy, onSortChange }) {
  return (
    <section id="collection" className="max-w-7xl mx-auto px-6 pt-14 pb-8">
      {/* Section heading */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.4em] text-[#555] uppercase mb-2">Collection</p>
        <h2 className="text-2xl font-light text-[#f5f5f5] tracking-tight">All Pieces</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-[#1c1c1c] pt-6">

        {/* ── Category pills ─────────────────────────── */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                aria-pressed={active}
                className={[
                  'px-4 py-2 text-[10px] tracking-[0.25em] uppercase border transition-all duration-200',
                  active
                    ? 'bg-[#f5f5f5] text-[#0a0a0a] border-[#f5f5f5]'
                    : 'bg-transparent text-[#666] border-[#2a2a2a] hover:border-[#555] hover:text-[#d4c5a9]',
                ].join(' ')}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* ── Sort select ────────────────────────────── */}
        <label className="flex items-center gap-3 shrink-0">
          <span className="text-[10px] tracking-[0.3em] text-[#555] uppercase">Sort</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-[#141414] border border-[#2a2a2a] text-[#f5f5f5] text-[11px] tracking-wide px-3 py-2.5 cursor-pointer focus:outline-none focus:border-[#555] transition-colors"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  )
}
