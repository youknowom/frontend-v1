import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Webpages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Webpages/ScrollToTop.js";
import { FaArrowUp } from "react-icons/fa6";
import "./App.css";
import { AllProducts } from "./Webpages/AllProducts.jsx";
import ProductDetail from "./Webpages/Products/ProductDetail.jsx";
import UtilitySector from "./Webpages/Setors/UtilitySector.jsx";
import InquiryForm from "./Webpages/InquiryForm.jsx";
import AboutUs from "./Webpages/AboutUs.jsx";
import ContactUs from "./Webpages/ContactUs.jsx";
function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const checkScroll = () =>
      setShowScroll(window.scrollY > window.innerHeight / 2);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <ScrollToTop />
          <Routes>
            <Route path="*" name="HomePage" element={<Home />} />
            <Route path="/" name="HomePage" element={<Home />} />
            <Route
              path="/allProducts"
              name="AppProducts"
              element={<AllProducts />}
            />
            {/* Dynamic Product Route */}
            <Route
              path="/product/:id"
              name="ProductDetail"
              element={<ProductDetail />}
            />
            {/* Sector Routes */}
            <Route
              path="/utilitySector"
              name="sector1"
              element={<UtilitySector />}
            />
            <Route path="/inquiryForm" name="form" element={<InquiryForm />} />
            <Route path="/about-us" name="form" element={<AboutUs />} />
            <Route
              path="/contact-us"
              name="Contact-us"
              element={<ContactUs />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      {showScroll && (
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default App;
