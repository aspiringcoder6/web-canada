import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./keyComponents/Navbar";
import Footer from "./pages/Homepage/components/Footer";
import Banner from "./pages/Homepage/components/Banner";

export default function MainPage() {
  const location = useLocation();
  const hideBanner = location.pathname === "/language-center";

  return (
    <div>
      <Navbar />
      {!hideBanner && <Banner />}
      <Outlet />
      <Footer />
    </div>
  );
}
