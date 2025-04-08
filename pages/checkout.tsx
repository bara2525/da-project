import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const router = useRouter()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setSubmitted(true)
    clearCart()
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Platba</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded">
          Objednávka úspěšně odeslána! Děkujeme za nákup.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input type="text" placeholder="Jméno" required className="w-full border p-2 rounded" />
          <input type="email" placeholder="E-mail" required className="w-full border p-2 rounded" />
          <select required className="w-full border p-2 rounded">
            <option value="">Zvolte způsob platby</option>
            <option value="card">Platební karta</option>
            <option value="bank">Bankovní převod</option>
            <option value="cod">Dobírka</option>
          </select>
          <p className="font-bold">Celková částka: {total} Kč</p>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Odeslat objednávku</button>
        </form>
      )}
    </Layout>
  )
}
