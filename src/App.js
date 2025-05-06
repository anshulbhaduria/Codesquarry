import "./App.css";
import Banner from "./components/Banner/Banner";
import Divider from "./components/Divider/Divider";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import ServicesSection from "./components/ServicesSection/ServicesSection";

function App() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Divider />
      <Portfolio />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
