import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { getCartCount } = useCart()
  const count = getCartCount()
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDark(false)
    }
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const toggleTheme = () => {
    setDark(!dark)
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors">
      <header className="bg-gray-100 dark:bg-gray-800 shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">☕ CoffeeShop</Link>
          <nav className="space-x-4 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/origins" className="hover:underline">Origins</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/cart" className="relative hover:underline">
              Cart
              {count > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {count}
                </span>
              )}
            </Link>
          </nav>
          <button onClick={toggleTheme} className="ml-4 px-2 py-1 text-xs border rounded">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      <main className="container mx-auto p-6 flex-grow">{children}</main>
      <footer className="bg-gray-200 dark:bg-gray-800 text-center text-sm text-gray-700 dark:text-gray-300 py-4">
        &copy; {new Date().getFullYear()} CoffeeShop. Všechna práva vyhrazena. Barbora Rutarova
      </footer>
    </div>
  )
}
