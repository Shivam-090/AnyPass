
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Manager from './components/manager'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'

function App() {

  return (
    <>
    <div>
    <div className='[background:radial-gradient(100%_90%_at_50%_10%,theme(colors.blue.50)_40%,theme(colors.sky.300)_100%)]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Manager/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

    
    </div>
    <Footer/>

    </>
  )
}

export default App
