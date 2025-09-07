import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index/Index";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import Category from "./Pages/Category/Category/Category";
import About from "./Pages/About/About"
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact"
import Product from "./Pages/Product/Product"
// import Cart from "./Pages/Cart/Cart"
import Electrical from "./Pages/Category/Electrical/Electrical"
import Engine from "./Pages/Category/Engine/Engine"
import Hydraulics from "./Pages/Category/Hydraulics/Hydraulics"
import Tires from "./Pages/Category/Tires/Tires"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BackToTop from "./components/BackToTop/BackToTop";
import './App.css'

const App = () => {

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Category/electrical" element={<Electrical />} />
        <Route path="/Category/engine" element={<Engine />} />
        <Route path="/Category/hydraulics" element={<Hydraulics />} />
        <Route path="/Category/tires" element={<Tires />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        {/* <Route path="/Cart" element={<Cart />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
