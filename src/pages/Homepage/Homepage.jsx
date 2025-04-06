import Navbar from "../../keyComponents/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Graduates from "./components/Graduates";
import Hero from "./components/Hero";
import History from "./components/History";
import Logos from "./components/Logos";
import Principal from "./components/Principal";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <History />
      <Programs />
      <Principal />
      <Logos />
      <Graduates />
      <Testimonials />
    </div>
  );
}
