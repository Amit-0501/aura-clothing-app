import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [justAdded, setJustAdded] = useState(false)
  const { addToCart } = useCart()

  // ── Close on Escape ──────────────────────────────
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // ── Lock body scroll ─────────────────────────────
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const handleAddToCart = () => {
    addToCart(product, selectedSize)
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
      onClose()
    }, 900)
  }

  return (
    /* ── Backdrop ────────────────────────────────── */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${product.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0a0a0a]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* ── Modal panel ──────────────────────────── */}
      <div
        className="relative bg-[#121212] border border-[#222] max-w-2xl w-full max-h-[92vh] overflow-hidden flex flex-col sm:flex-row animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute top-4 right-4 z-10 text-[#555] hover:text-[#f5f5f5] transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* ── Product image ─────────────────────── */}
        <div className="sm:w-[46%] aspect-[3/4] sm:aspect-auto flex-shrink-0 bg-[#0f0f0f]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Details panel ─────────────────────── */}
        <div className="flex-1 flex flex-col justify-between p-7 sm:p-8 overflow-y-auto">
          {/* Top info */}
          <div>
            <p className="text-[9px] tracking-[0.4em] text-[#d4c5a9] uppercase mb-2">
              {product.category} · {product.color}
            </p>
            <h2 className="text-[22px] font-light text-[#f5f5f5] leading-tight mb-2">
              {product.name}
            </h2>
            <p className="text-[18px] text-[#888] mb-6">\${product.price}</p>

            <p className="text-[13px] text-[#666] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-[0.3em] text-[#888] uppercase">
                  Size — <span className="text-[#f5f5f5]">{selectedSize}</span>
                </p>
                <button className="text-[10px] text-[#555] hover:text-[#888] underline underline-offset-2 transition-colors">
                  Size Guide
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={[
                      'px-3.5 py-2 text-[10px] tracking-wider border transition-all duration-150',
                      selectedSize === size
                        ? 'border-[#d4c5a9] text-[#d4c5a9] bg-[#d4c5a9]/10'
                        : 'border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-[#999]',
                    ].join(' ')}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              className={[
                'w-full py-4 text-[10px] tracking-[0.3em] uppercase transition-all duration-300',
                justAdded
                  ? 'bg-[#d4c5a9] text-[#0a0a0a]'
                  : 'bg-[#f5f5f5] text-[#0a0a0a] hover:bg-[#d4c5a9]',
              ].join(' ')}
            >
              {justAdded ? '✓  Added to Bag' : 'Add to Bag'}
            </button>

            <p className="text-[10px] text-[#3a3a3a] text-center tracking-wider">
              Free shipping on orders over \$150
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
