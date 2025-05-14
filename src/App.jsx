import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import Products from "./components/products";
import Footer from "./components/footer";
import Testimonies from "./components/testimonies";
import Problems from './components/problems';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
  <>
    <Navbar />
    <Hero />
    <Problems />
    <Benefits />
    <Products />
    <Testimonies />
    <Footer />
    <Analytics />
  </>
  )
}


export default App
