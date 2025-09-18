import Navbar from './components/Navbar'
// import Navbar from "./pages/Navbar"
import SignIn from './components/signIn'
import ProductsPage from './components/list'
import SignUp from './components/signUp'
import Home from './components/home'
import { Routes, Route } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<ProductsPage />} />
      </Routes>
    </div>
    
  )
}

export default App