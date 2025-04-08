import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import Link from 'next/link'

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <Layout>
      {/* Hero sekce */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden mb-12 shadow-lg" style={{ backgroundImage: "url('/images/hero-coffee.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vítejte v CoffeeShopu</h1>
          <p className="text-lg md:text-xl mb-6">Ručně pražená káva z celého světa – přímé spojení s farmáři.</p>
          <Link href="/products" className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-200 font-semibold">
            Prozkoumat nabídku
          </Link>
        </div>
      </section>

      {/* Sekce proč právě my */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Proč právě my?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-3xl mb-2">🌱</p>
            <h3 className="font-bold mb-2">Původ</h3>
            <p>Káva od malých farmářů z Latinské Ameriky, Afriky a Asie.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-3xl mb-2">🔥</p>
            <h3 className="font-bold mb-2">Ruční pražení</h3>
            <p>Každá dávka je pečlivě upražená pro maximální chuť.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-3xl mb-2">♻️</p>
            <h3 className="font-bold mb-2">Eko balení</h3>
            <p>Balení bez plastu – šetrné k přírodě i zákazníkovi.</p>
          </div>
        </div>
      </section>

      {/* Vybrané produkty */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Vybrané produkty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} showAddButton />
          ))}
        </div>
      </section>

      {/* Citát */}
      <section className="text-center py-12 px-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          „Každé zrnko má svůj příběh. Nechte ho vyprávět ve vašem šálku.“
        </blockquote>
      </section>
    </Layout>
  )
}
