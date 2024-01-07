import { lazy, Suspense,useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
const Contact = lazy(()=>import('./pages/Contact'))
const About = lazy(()=> import( './pages/About'))
const Vehicle = lazy(()=> import('./pages/Vehicle'))
const Testmonal = lazy(()=> import("./pages/Testmonal"))


function App() {
  const [scroll,setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setScroll(scrollPosition > viewportHeight ? true:false);
      console.log(scrollPosition,viewportHeight,scroll)
    };
    document.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="w-[100vw] h-fit overflow-x-hidden">
      <BrowserRouter>
      <Navbar />
      { scroll &&
        <div className="w-14 aspect-square bg-orange-600 rounded-full fixed bottom-4 right-8 flex items-center justify-center hover:bg-orange-700 cursor-pointer" onClick={()=>window.scrollTo(0,0)}>
          <FaArrowUp size={25} color='white' className='anim'/>
        </div>
      }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Suspense fallback={<h3>Loading...</h3>}>  <About /></Suspense>
         } />
          <Route path='/contact' element={<Suspense fallback={<h3>Loading...</h3>}>  <Contact /></Suspense>
         } />
          <Route path='/vehicle' element={<Suspense fallback={<h3>Loading...</h3>}>  <Vehicle/></Suspense>
         } />
          <Route path='/testimonal' element={<Suspense fallback={<h3>Loading...</h3>}> <Testmonal/></Suspense>
         } />
        </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
