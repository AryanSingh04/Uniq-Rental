import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import { useRef } from 'react';
import Contact from './pages/Contact';
import Vehicle from './pages/Vehicle';
import Testmonal from './pages/Testmonal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-[100vw] h-fit overflow-x-hidden">
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/vehicle' element={<Vehicle/>} />
          <Route path='/testimonal' element={<Testmonal/>} />
        </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
