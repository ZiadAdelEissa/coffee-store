
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Details from './components/details/Details';


function App() {
  return (
<>
<Navbar />
<Routes>
     <Route path='/' element={
     <>
     <Home />
     <Products />
     </>
    } />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/product/:productId" element={<Details/>} />
     {/* <Route path="/" element={} /> */}
   </Routes>
   <Footer />
</>
  );
}

export default App;
