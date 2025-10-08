// import Navbar from './components/Navbar'
import Navbar from "./pages/Navbar"
import SignIn from './components/signIn'
import ProductsPage from './components/list'
import SignUp from './components/signUp'
import Home from './components/home'
import { Routes, Route } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import { Card } from './pages/Card.jsx'
import ProceedToCheckout from './pages/CheckoutPage.jsx'
import { CartProvider } from "./context/CardContext.jsx";
import ProductDetails from "./components/product_details"

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/card" element={ <Card /> } />
        <Route path="/checkout" element={ <ProceedToCheckout />} />

      </Routes>
      </CartProvider>
    </div>
    
  )
}

export default App