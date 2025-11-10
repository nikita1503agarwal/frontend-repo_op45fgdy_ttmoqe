import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Aurelia Necklace', price: '$420', img: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Luna Ring', price: '$290', img: 'https://images.unsplash.com/photo-1617038260897-41a1c5d50ddd?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Seraphine Earrings', price: '$350', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220b?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Noir Cuff', price: '$510', img: 'https://images.unsplash.com/photo-1610965242930-bcfb8a929d96?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeaturedGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl">Featured Pieces</h2>
          <a href="/collections" className="text-sm text-gray-700 hover:text-black">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-50"
            >
              <img src={p.img} alt={p.name} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{p.name}</h3>
                  <span className="text-amber-600 font-semibold">{p.price}</span>
                </div>
                <button className="mt-3 w-full border border-gray-200 rounded-full py-2 text-sm hover:bg-gray-50">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
