import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl mb-6">About Niva Jewels</h1>
        <p className="text-gray-600 leading-relaxed">Founded on the belief that jewelry should be both timeless and personal, Niva Jewels crafts pieces that celebrate individuality. Our artisans work with premium metals and ethically sourced gemstones to create designs defined by elegance and restraint.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-neutral-100">
            <h3 className="font-medium">Ethically Sourced</h3>
            <p className="text-sm text-gray-600 mt-2">We partner with trusted suppliers to ensure every stone is responsibly sourced.</p>
          </div>
          <div className="p-6 rounded-2xl border border-neutral-100">
            <h3 className="font-medium">Handcrafted</h3>
            <p className="text-sm text-gray-600 mt-2">Each piece is shaped, set, and polished by hand for lasting beauty.</p>
          </div>
          <div className="p-6 rounded-2xl border border-neutral-100">
            <h3 className="font-medium">Lifetime Care</h3>
            <p className="text-sm text-gray-600 mt-2">Complimentary cleaning and inspections to keep your jewelry radiant.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
