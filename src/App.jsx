import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Store from "./components/Store";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// import { Bounce, ToastContainer } from "react-toastify";
import toast, { Toaster } from 'react-hot-toast';


export default function App() {
  // const location = useLocation()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster />
       
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}
