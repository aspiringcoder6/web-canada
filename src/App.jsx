import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MainPage from "./mainPage";
import Highschoolprogram from "./pages/Highschoolprogram/Highschoolprogram";
import About from "./pages/Aboutpage/About";
import OSSD from "./pages/OSSD/OSSD";
import Eliteprogram from "./pages/Eliteprogram/Eliteprogram";
import Artprogram from "./pages/Artprogram/Artprogram";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Homepage />} />
          <Route path="/highschool" element={<Highschoolprogram />} />
          <Route path="/highschool/OSSD" element={<OSSD />} />
          <Route path="/highschool/Elite" element={<Eliteprogram />} />
          <Route path="/highschool/Art" element={<Artprogram />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
