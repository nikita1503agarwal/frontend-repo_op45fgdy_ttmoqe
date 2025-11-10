import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cart(){
  const items = [
    { id: 1, name: 'Aurelia Necklace', price: 420, qty: 1 },
    { id: 2, name: 'Luna Ring', price: 290, qty: 2 },
  ]
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl mb-8">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((i) => (
              <div key={i.id} className="flex items-center justify-between border border-neutral-100 rounded-xl p-4">
                <div>
                  <h3 className="font-medium">{i.name}</h3>
                  <p className="text-sm text-gray-600">Qty: {i.qty}</p>
                </div>
                <div className="font-semibold">${(i.price * i.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="border border-neutral-100 rounded-xl p-6 h-fit">
            <h3 className="font-medium mb-4">Order Summary</h3>
            <div className="flex items-center justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <button className="mt-6 w-full px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors">Checkout</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
