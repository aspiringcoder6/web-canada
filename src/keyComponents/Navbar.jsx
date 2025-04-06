import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolling down more than 100px
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-[100] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white py-2 border-b-1 border-b-[#23417e]">
        <div className="w-[95%] m-auto flex items-center text-[#697ea7] justify-between">
          <img src="/assets/images/logos/oxford.png" className="w-[5%]" />
          <a className="nav-link">Home</a>
          <a className="nav-link">About OCC</a>
          <a className="nav-link">High School Program</a>
          <a className="nav-link" href="/language-center">Language Center</a>
          <a
            className="nav-link"
            href="https://internationalyouthprogram.com/index.html"
          >
            Camp Programs
          </a>
          <a className="nav-link">Programs Fee</a>
          <a className="nav-link">Student Services</a>
          <button
            className="flex items-center gap-1 text-[#23417e] border-1 border-[#23417e] py-2 px-5 rounded-3xl transition-all duration-400 ease-in-out group hover:text-white hover:bg-[#23417e]"
            style={{ fontFamily: "SFUIBold" }}
          >
            <img
              src="/assets/images/globe.svg"
              className="w-5 h-5 transition-all duration-400 ease-in-out group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
            />
            English
          </button>
        </div>
      </div>
    </div>
  );
}
