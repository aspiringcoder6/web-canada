import { Outlet } from "react-router-dom";
import Navbar from "./keyComponents/Navbar";
import Footer from "./pages/Homepage/components/Footer";
import Banner from "./pages/Homepage/components/Banner";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
}
