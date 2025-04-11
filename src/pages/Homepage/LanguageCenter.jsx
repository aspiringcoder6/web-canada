import Navbar from "../../keyComponents/Navbar";
import Footer from "./components/Footer";
import HeroSection from "../Homepage/components/LanguageCenter/Hero"
import LanguagePrograms from "../Homepage/components/LanguageCenter/LanguageProgram"
import Testimonials from "../Homepage/components/LanguageCenter/Testimonials"
import EnglishLevelForm from "../Homepage/components/LanguageCenter/EnglishTestForm"
import DownloadSection from "../Homepage/components/LanguageCenter/Download"

export default function LanguageCenter() {
  return (
    <div>
      <HeroSection />
      <LanguagePrograms />
      <Testimonials />
      <EnglishLevelForm />
      <DownloadSection />
    </div>
  );
}
