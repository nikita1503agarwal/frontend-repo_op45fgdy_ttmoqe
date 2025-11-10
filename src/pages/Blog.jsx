import Header from '../components/Header'
import Footer from '../components/Footer'

const posts = [
  { title: 'Caring for Fine Jewelry', excerpt: 'Keep your pieces radiant with these simple at-home tips.', img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Behind the Craft', excerpt: 'A look into our atelier and the artisans behind every piece.', img: 'https://images.unsplash.com/photo-1617038260897-41a1c5d50ddd?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Choosing the Perfect Stone', excerpt: 'Clarity, cut, color — how to find the right gemstone for you.', img: 'https://images.unsplash.com/photo-1603575449299-a36769b114d3?q=80&w=1200&auto=format&fit=crop' },
]

export default function Blog(){
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl mb-8">Journal</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl overflow-hidden border border-neutral-100">
              <img src={p.img} alt="" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
