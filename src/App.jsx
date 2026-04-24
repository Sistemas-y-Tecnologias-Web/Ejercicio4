import HeroCard from "./components/HeroCard"

function App() {

  return (
    <>
      <HeroCard
        heroKey="lucio"
        name="Lucio"
        portrait="https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png"
        role="damage" />
      <HeroCard
        heroKey="lucio"
        name="Lucio"
        portrait="https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png"
        role="damag" />
    </>
  )
}

export default App
