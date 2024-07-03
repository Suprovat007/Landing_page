import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Courses from './components/Courses'
import Achivement from './components/Achivement'
import Categories from './components/Categories'
import Feedback from './components/Feedback'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
     <Navbar />
     <Hero />
     <Companies/>
     <Courses/>
     <Achivement/>
     <Categories/>
     <Feedback/>
     <CTA/>
     <Footer/>
    </>
  )
}

export default App
