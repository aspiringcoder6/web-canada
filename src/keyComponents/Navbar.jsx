import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icon set for hamburger

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <a className="nav-link" href="/">
        Home
      </a>
      <a className="nav-link" href="/about">
        About OCC
      </a>
      <a className="nav-link" href="/highschool">
        High School Program
      </a>
      <a className="nav-link">Language Center</a>
      <a
        className="nav-link"
        href="https://internationalyouthprogram.com/index.html"
      >
        Camp Programs
      </a>
      <a className="nav-link">Programs Fee</a>
      <a className="nav-link">Student Services</a>
    </>
  );

  return (
    <div
      className={`fixed top-0 w-full z-[100] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white py-2 border-b border-[#23417e]">
        <div className="w-[95%] m-auto flex items-center justify-between text-[#697ea7]">
          <img src="/assets/images/logos/oxford.png" className="w-20" />

          {/* Desktop links */}
          <div className="hidden lg:flex gap-5 items-center justify-between w-[75%]">
            {navLinks}
          </div>
          <div className="hidden lg:block">
            <button className="flex items-center gap-1 text-[#23417e] border border-[#23417e] py-2 px-5 rounded-3xl transition-all duration-300 group hover:text-white hover:bg-[#23417e]">
              <img
                src="/assets/images/globe.svg"
                className="w-5 h-5 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
              />
              English
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#23417e]"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <>
            <div className="lg:hidden flex flex-col px-5 pb-3 space-y-3 text-[#697ea7]">
              {navLinks}
            </div>
            <button className="flex items-center m-auto gap-1 text-[#23417e] border border-[#23417e] py-2 px-5 rounded-3xl transition-all duration-300 group hover:text-white hover:bg-[#23417e]">
              <img
                src="/assets/images/globe.svg"
                className="w-5 h-5 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
              />
              English
            </button>
          </>
        )}
      </div>
    </div>
  );
}
