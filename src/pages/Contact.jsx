import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl mb-6">Contact Us</h1>
        <p className="text-gray-600">We're here to help with sizing, care, and custom orders. Send us a message and our specialists will respond within 24 hours.</p>

        <form className="mt-10 grid grid-cols-1 gap-4">
          <input className="border border-neutral-200 rounded-lg px-4 py-3" placeholder="Full Name" />
          <input className="border border-neutral-200 rounded-lg px-4 py-3" placeholder="Email" />
          <textarea className="border border-neutral-200 rounded-lg px-4 py-3 h-32" placeholder="Your Message" />
          <button className="mt-2 px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors w-fit">Send Message</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}
