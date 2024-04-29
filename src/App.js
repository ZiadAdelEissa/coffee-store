
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Proudects from './components/Proudects/Proudects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
<>
<Navbar />
<Routes>
     <Route path='/' element={
     <>
     <Home />
     <Proudects />
     </>
    } />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     {/* <Route path="/" element={} /> */}
   </Routes>
   <Footer />
</>
  );
}

export default App;
