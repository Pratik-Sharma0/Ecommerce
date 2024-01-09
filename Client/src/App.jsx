import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import Errorpage from "./Errorpage";
import Header from "./components/Header";
import Cart from "./Cart";
import Footer from "./components/Footer";
import Success from "./Success";
import Cancel from "./Cancel";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
