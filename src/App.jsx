import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom"; // Thêm Outlet
import Homepage from "./pages/Homepage/Homepage";
import MainPage from "./mainPage";
import Highschoolprogram from "./pages/Highschoolprogram/Highschoolprogram";
import About from "./pages/Aboutpage/About";
import OSSD from "./pages/OSSD/OSSD";
import Eliteprogram from "./pages/Eliteprogram/Eliteprogram";
import LanguageCenter from "./pages/Homepage/LanguageCenter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Homepage />} /> {/* Trang chủ */}
          <Route path="highschool" element={<Highschoolprogram />} />
          <Route path="highschool/OSSD" element={<OSSD />} />
          <Route path="highschool/Elite" element={<Eliteprogram />} />
          <Route path="about" element={<About />} />
          <Route path="language-center" element={<LanguageCenter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;