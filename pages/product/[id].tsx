import { useRouter } from 'next/router'
import products from '../../data/products.json'
import Layout from '../../components/Layout'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) return <Layout><p>Produkt nenalezen</p></Layout>

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Layout>
      <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-xl">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>
        <p className="mt-4 font-bold">{product.price} Kč</p>
        <button
          onClick={handleAdd}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Přidat do košíku
        </button>
        {added && <p className="text-green-700 mt-2">✅ Přidáno do košíku</p>}
      </div>
    </Layout>
  )
}
