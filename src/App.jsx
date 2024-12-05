import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowWorks from "./components/HowWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
   <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model/>
    <Features/>
    <HowWorks/>
    <Footer/>
   </main>
  );
}

export default App
