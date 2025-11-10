import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-amber-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl text-gray-900">Bespoke brilliance for your story</h3>
            <p className="mt-3 text-gray-600 max-w-prose">Work with our artisans to design a one-of-a-kind piece—crafted from premium metals and ethically sourced stones. From sketches to the final polish, we perfect every detail.</p>
            <div className="mt-6 flex items-center gap-4">
              <Link to="/custom" className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors">Start a Custom Order</Link>
              <Link to="/contact" className="px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors">Talk to a Specialist</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-2xl h-48 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-2xl h-48 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-2xl h-48 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
