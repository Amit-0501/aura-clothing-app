export const products = [
  {
    id: 1,
    name: 'Studio Oversized Tee',
    category: 'Tops',
    price: 48,
    description:
      'A relaxed, drop-shoulder silhouette crafted from 100% organic cotton. Features a brushed interior for unmatched softness and a worn-in feel from day one. Pair with wide-leg trousers or layer under a coat.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=80&auto=format&fit=crop',
    color: 'Off-White',
    featured: true,
  },
  {
    id: 2,
    name: 'Ribbed Stretch Tank',
    category: 'Tops',
    price: 32,
    description:
      'A second-skin ribbed tank in a premium stretch-cotton blend. The clean neckline and cropped length make it a perfect base layer or solo statement.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=80&auto=format&fit=crop',
    color: 'Black',
    featured: false,
  },
  {
    id: 3,
    name: 'Wide-Leg Trousers',
    category: 'Bottoms',
    price: 118,
    description:
      'Elevated tailoring in a fluid, wide-leg cut. Made from a lightweight wool-blend with a mid-rise waistband, two front pockets, and a concealed zip fly.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=80&auto=format&fit=crop',
    color: 'Stone',
    featured: true,
  },
  {
    id: 4,
    name: 'Cargo Jogger',
    category: 'Bottoms',
    price: 88,
    description:
      'Utilitarian meets comfort. French terry cargo joggers with a tapered leg, elastic waistband with drawstring, and four functional pockets — two cargo, two side.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=700&q=80&auto=format&fit=crop',
    color: 'Olive',
    featured: false,
  },
  {
    id: 5,
    name: 'Wool Overcoat',
    category: 'Outerwear',
    price: 248,
    description:
      'A classic single-breasted overcoat in a 70% Italian wool blend. Fully lined, with two front patch pockets, a structured notch lapel, and a slightly relaxed silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&q=80&auto=format&fit=crop',
    color: 'Camel',
    featured: true,
  },
  {
    id: 6,
    name: 'Quilted Puffer Vest',
    category: 'Outerwear',
    price: 138,
    description:
      'A streamlined puffer vest filled with recycled down alternative. Quilted baffles, two side zip pockets, and a stand collar for extra warmth without bulk.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=80&auto=format&fit=crop',
    color: 'Slate',
    featured: false,
  },
  {
    id: 7,
    name: 'Heavy Canvas Tote',
    category: 'Essentials',
    price: 58,
    description:
      'Heavy-duty 16oz deadstock canvas tote with reinforced double handles and an interior zip pocket. Naturally aged character from first use. Fits a 15" laptop.',
    sizes: ['One Size'],
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&q=80&auto=format&fit=crop',
    color: 'Natural',
    featured: false,
  },
  {
    id: 8,
    name: 'Merino Ribbed Beanie',
    category: 'Essentials',
    price: 28,
    description:
      'A finely ribbed merino wool beanie with a double-layered folded cuff. Naturally temperature-regulating, moisture-wicking, and itch-free. One size, fits most.',
    sizes: ['One Size'],
    image:
      'https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=700&q=80&auto=format&fit=crop',
    color: 'Charcoal',
    featured: true,
  },
]

export const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Essentials']

export const SORT_OPTIONS = [
  { label: 'Featured',          value: 'featured'   },
  { label: 'Price: Low → High', value: 'price_asc'  },
  { label: 'Price: High → Low', value: 'price_desc' },
]
