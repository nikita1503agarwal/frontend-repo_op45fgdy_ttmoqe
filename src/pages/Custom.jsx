import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom(){
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl mb-6">Custom Design</h1>
        <p className="text-gray-600">Design a bespoke piece with our team. Share your vision and we’ll craft it into reality with sketches, 3D renders, and artisan-led production.</p>

        <form className="mt-10 grid grid-cols-1 gap-4">
          <input className="border border-neutral-200 rounded-lg px-4 py-3" placeholder="Your Name" />
          <input className="border border-neutral-200 rounded-lg px-4 py-3" placeholder="Email" />
          <input className="border border-neutral-200 rounded-lg px-4 py-3" placeholder="Phone" />
          <textarea className="border border-neutral-200 rounded-lg px-4 py-3 h-32" placeholder="Describe your idea" />
          <button className="mt-2 px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors w-fit">Request Consultation</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}
