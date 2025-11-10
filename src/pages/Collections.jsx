import Header from '../components/Header'
import Footer from '../components/Footer'

const collections = [
  { title: 'Signature Gold', img: 'https://images.unsplash.com/photo-1611501275019-cd6bfd109f1d?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Rose Radiance', img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Midnight Noir', img: 'https://images.unsplash.com/photo-1623330188319-5f17b9a7c11f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Eternal Pearls', img: 'https://images.unsplash.com/photo-1582582621959-48d0b9e56f60?q=80&w=1200&auto=format&fit=crop' },
]

export default function Collections(){
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl mb-8">Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c) => (
            <div key={c.title} className="group rounded-2xl overflow-hidden bg-neutral-50">
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="text-lg font-medium">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
