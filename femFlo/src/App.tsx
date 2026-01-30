
import './App.css'
import { Route,Routes, BrowserRouter } from 'react-router'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' index element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
