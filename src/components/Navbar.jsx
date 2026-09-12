import { useCart } from '../context/CartContext'

// Shopping bag icon
function BagIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

export default function Navbar({ onCartOpen }) {
  const { itemCount } = useCart()

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-[15px] font-light tracking-[0.45em] uppercase text-[#f5f5f5] select-none"
        >
          AURA
        </a>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {['Studio', 'Collections', 'About'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11px] text-[#666] hover:text-[#f5f5f5] transition-colors duration-200 tracking-[0.25em] uppercase"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Cart trigger */}
        <button
          onClick={onCartOpen}
          aria-label={`Open shopping bag — ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
          className="relative flex items-center gap-2 text-[#f5f5f5] hover:text-[#d4c5a9] transition-colors duration-200"
        >
          <BagIcon />

          {/* Badge */}
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 bg-[#d4c5a9] text-[#0a0a0a] text-[10px] font-semibold rounded-full flex items-center justify-center leading-none">
              {itemCount > 99 ? '99+' : itemCount}
            </span>
          )}

          <span className="hidden sm:inline text-[11px] tracking-[0.25em] uppercase">
            Bag
          </span>
        </button>
      </div>
    </header>
  )
}
