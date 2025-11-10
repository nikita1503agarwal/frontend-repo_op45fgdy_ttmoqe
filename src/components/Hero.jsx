import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-white pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Timeless Luxury. Handcrafted to Perfection.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-200">
            Discover elegant pieces that blend modern minimalism with enduring craftsmanship.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/collections" className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-100 transition-colors">Shop Now</Link>
            <Link to="/custom" className="px-6 py-3 border border-white/70 text-white rounded-full hover:bg-white/10 transition-colors">Custom Orders</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
