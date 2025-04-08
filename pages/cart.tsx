import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Košík</h1>
      {cart.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Váš košík je prázdný.</p>
      ) : (
        <div>
          <ul className="mb-4 space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.price} Kč / ks</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 dark:bg-gray-700 rounded text-black dark:text-white">−</button>
                    <span className="text-gray-900 dark:text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 dark:bg-gray-700 rounded text-black dark:text-white">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 dark:text-white">{item.price * item.quantity} Kč</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm mt-2 hover:underline">Odebrat</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Celkem: {total} Kč</p>
          <Link href="/checkout" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Pokračovat k platbě
          </Link>
        </div>
      )}
    </Layout>
  )
}
