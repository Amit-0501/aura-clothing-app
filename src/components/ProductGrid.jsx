import ProductCard from './ProductCard'

export default function ProductGrid({ products, onProductClick }) {
  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <p className="text-[#333] text-xs tracking-[0.35em] uppercase">
          No items in this category
        </p>
      </div>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pb-28">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </main>
  )
}
