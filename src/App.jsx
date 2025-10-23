import Header from './components/Header.jsx'
import HeroNew from './components/HeroNew.jsx'
import ServicesNew from './components/ServicesNew.jsx'
import AboutNew from './components/AboutNew.jsx'
import LetsTalk from './components/LetsTalk.jsx'
import Stats from './components/Stats.jsx'
import Team from './components/Team.jsx'
import FooterNew from './components/FooterNew.jsx'

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroNew />
        <ServicesNew />
        <AboutNew />
        <LetsTalk />
        <Stats />
        <Team />
      </main>
      <FooterNew />
    </div>
  )
}

export default App
