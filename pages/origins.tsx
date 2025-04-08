import Layout from '../components/Layout'

export default function Origins() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Původ naší kávy</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Naše káva pochází z různých regionů světa, každý s jedinečnou chutí a charakterem:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
        <li><strong>Kolumbie:</strong> Vyvážená chuť, jemná acidita, tóny karamelu.</li>
        <li><strong>Etiopie:</strong> Květinová vůně, citrusová svěžest, komplexní profil.</li>
        <li><strong>Brazílie:</strong> Sladké a oříškové tóny, nízká kyselost, ideální pro espresso.</li>
        <li><strong>Sumatra:</strong> Zemitá chuť, plné tělo, nízká acidita.</li>
        <li><strong>Guatemala:</strong> Čokoládové a kořeněné aroma, bohaté tělo.</li>
      </ul>
    </Layout>
  )
}
