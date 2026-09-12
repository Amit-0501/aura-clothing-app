import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, onClick }) {
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const { addToCart } = useCart()

  // Quick-add with the middle size (or first if only 1)
  const handleQuickAdd = (e) => {
    e.stopPropagation()
    const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)] ?? product.sizes[0]
    addToCart(product, defaultSize)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1600)
  }

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setOverlayVisible(true)}
      onMouseLeave={() => setOverlayVisible(false)}
      onClick={onClick}
    >
      {/* ── Image wrapper ──────────────────────────── */}
      <div className="relative overflow-hidden bg-[#141414] aspect-[3/4] mb-3.5">
        <img
          src={product.image}
          alt={product.name}
          className="product-img w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-[#0a0a0a]/50 flex flex-col items-center justify-end pb-5 gap-2.5 transition-opacity duration-300 ${overlayVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Quick View */}
          <button
            onClick={(e) => { e.stopPropagation(); onClick() }}
            className="w-36 py-2 border border-white/70 text-white text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-[#0a0a0a] transition-colors duration-200"
          >
            Quick View
          </button>

          {/* Add to Bag */}
          <button
            onClick={handleQuickAdd}
            className={[
              'w-36 py-2 text-[10px] tracking-[0.2em] uppercase border transition-all duration-200',
              justAdded
                ? 'bg-[#d4c5a9] text-[#0a0a0a] border-[#d4c5a9]'
                : 'bg-[#f5f5f5] text-[#0a0a0a] border-[#f5f5f5] hover:bg-[#d4c5a9] hover:border-[#d4c5a9]',
            ].join(' ')}
          >
            {justAdded ? '✓ Added' : 'Add to Bag'}
          </button>
        </div>

        {/* New badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-[#d4c5a9] text-[#0a0a0a] text-[8px] font-semibold tracking-[0.25em] uppercase px-2 py-1 leading-none">
            New
          </span>
        )}
      </div>

      {/* ── Info ───────────────────────────────────── */}
      <div>
        <p className="text-[9px] tracking-[0.3em] text-[#555] uppercase mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-light text-[#e0e0e0] group-hover:text-[#d4c5a9] transition-colors duration-200 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-[#777]">\${product.price}</p>
      </div>
    </article>
  )
}
