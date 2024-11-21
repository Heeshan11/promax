import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "@pages/HomePage"
import About from "@pages/about/About"
import { banners } from "@data/constants"
import Navigation from "@components/Navigation"
import Contact from "@pages/contact/Contact"
import Products from "@pages/products/Products"
import ProductDetails from "@pages/ProductDetails/ProductDetails"
import Footer from "@components/Footer"
import Solution from "@pages/solutions/Solutions"
import { MainProvider } from "./context/MainProvider"
import ConditionalFooter from "./constants/ConditionalFooter"


const App = () => {
  return (

    <Router>
      <div>
        <MainProvider>

          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage data={banners} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solution />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          <ConditionalFooter />
        </MainProvider>
      </div>
    </Router>
  )
}

export default App