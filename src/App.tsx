import Hero from './components/Hero'
import Services from './components/Services'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
