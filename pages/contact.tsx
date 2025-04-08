import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Kontaktujte nás</h1>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Vaše jméno" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Váš e-mail" className="w-full border p-2 rounded" />
        <textarea placeholder="Zpráva" className="w-full border p-2 rounded h-32"></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Odeslat</button>
      </form>
    </Layout>
  )
}
