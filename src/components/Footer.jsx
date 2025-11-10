import { Instagram, Phone, MessageCircle, Pinterest } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-3">Niva Jewels</h3>
            <p className="text-sm text-gray-600">
              Luxury handcrafted jewelry designed to elevate every moment.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 012-3456</li>
              <li>Email: care@nivajewels.com</li>
              <li>Hours: Mon–Sat, 10am–7pm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Follow</h4>
            <div className="flex items-center gap-4 text-gray-700">
              <a href="#" aria-label="Instagram" className="hover:text-black"><Instagram className="w-5 h-5"/></a>
              <a href="#" aria-label="WhatsApp" className="hover:text-black"><MessageCircle className="w-5 h-5"/></a>
              <a href="#" aria-label="Pinterest" className="hover:text-black"><Pinterest className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Niva Jewels. All rights reserved.</div>
      </div>
    </footer>
  )
}
