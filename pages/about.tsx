import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">O CoffeeShopu</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        CoffeeShop je místo, kde se vášeň pro kávu potkává s kvalitou. Spolupracujeme s malými farmáři z Latinské Ameriky, Afriky a Asie, kteří pěstují kávu tradičními a udržitelnými způsoby.
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Naše káva je pečlivě pražená v malých dávkách, abychom zachovali její jedinečné chutě a aroma. Každá směs, kterou nabízíme, má svůj vlastní příběh, který začíná u původu zrnek a končí ve vašem šálku.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Děkujeme, že podporujete férový obchod a kvalitní kávovou kulturu.
      </p>
    </Layout>
  )
}
