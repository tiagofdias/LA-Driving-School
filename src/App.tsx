import { Contact } from "./components/contacts";
import "./App.css";
import { Faq } from "./components/faq";
import { Feature } from "./components/feature";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Testimonials } from "./components/testimonials";
import { Vehicles } from "./components/vehicles";
import { Footer } from "./components/footer";
import Starfield from "react-starfield";
import { Pricing } from "./components/pricing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
      <ToastContainer />
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <Header />
        <Hero />
        <Feature />
        <Vehicles />
        <Testimonials />
        <Pricing />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
