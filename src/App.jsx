import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LanguageCenter from "./pages/Homepage/LanguageCenter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/language-center" element={<LanguageCenter />} />
      </Routes>
    </>
  );
}

export default App;
