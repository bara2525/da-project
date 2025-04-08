import Link from 'next/link'
import { useCart } from '../context/CartContext'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

const ProductCard = ({ product, showAddButton = false }: { product: Product, showAddButton?: boolean }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
        <p className="mt-2 text-lg font-semibold text-green-700 dark:text-green-400">{product.price} Kč</p>
        <div className="mt-3 flex justify-between items-center">
          <Link href={`/product/${product.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Detail</Link>
          {showAddButton && (
            <button onClick={() => addToCart(product)} className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
              Přidat
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
