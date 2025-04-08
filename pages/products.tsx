import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'
import { useState } from 'react'

export default function Products() {
  const [origin, setOrigin] = useState("")
  const [priceLimit, setPriceLimit] = useState("")

  const filtered = productsData.filter(product => {
    const matchOrigin = origin ? product.origin === origin : true
    const matchPrice = priceLimit ? product.price <= parseInt(priceLimit) : true
    return matchOrigin && matchPrice
  })

  const origins = [...new Set(productsData.map(p => p.origin))]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Naše káva</h1>
      <div className="mb-6 flex gap-4">
        <select onChange={(e) => setOrigin(e.target.value)} className="border p-2 rounded bg-white dark:bg-gray-800 dark:text-white">
          <option value="">Všechny původy</option>
          {origins.map(o => <option key={o}>{o}</option>)}
        </select>
        <select onChange={(e) => setPriceLimit(e.target.value)} className="border p-2 rounded bg-white dark:bg-gray-800 dark:text-white">
          <option value="">Neomezit cenu</option>
          <option value="200">do 200 Kč</option>
          <option value="250">do 250 Kč</option>
          <option value="300">do 300 Kč</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} showAddButton />
        ))}
      </div>
    </Layout>
  )
}
