export default function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="text-[15px] font-light tracking-[0.45em] uppercase text-[#f5f5f5] mb-3">
            AURA
          </p>
          <p className="text-[11px] text-[#444] leading-relaxed max-w-[160px]">
            Minimal forms. Enduring quality. Designed for the in-between.
          </p>
        </div>

        {[
          { heading: 'Shop',    links: ['New Arrivals', 'Tops', 'Bottoms', 'Outerwear', 'Essentials'] },
          { heading: 'Studio',  links: ['About', 'Sustainability', 'Careers', 'Press'] },
          { heading: 'Help',    links: ['Sizing', 'Shipping', 'Returns', 'Contact'] },
        ].map(({ heading, links }) => (
          <div key={heading}>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#555] mb-4">{heading}</p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[12px] text-[#444] hover:text-[#d4c5a9] transition-colors tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#333] tracking-wider">
            © 2025 AURA Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Accessibility'].map((item) => (
              <a key={item} href="#" className="text-[10px] text-[#333] hover:text-[#666] transition-colors tracking-wider">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
