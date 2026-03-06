import { useState, useEffect } from "react";

const tabs = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = tabs.map((tab) => document.getElementById(tab.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => sections.forEach((s) => s && observer.unobserve(s));
  }, []);

  const scrollTo = (id, index) => {
    setActiveIndex(index);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── DESKTOP pill nav (md+) ── */}
      <div
        className="
          hidden md:flex
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          w-1/4 h-14 px-2 rounded-full
          bg-bg font-medium font-poppins text-base
          items-center overflow-hidden
          backdrop-blur-lg drop-shadow-sm drop-shadow-button
        "
      >
        {/* Hover bubble */}
        {hoverIndex !== null && hoverIndex !== activeIndex && (
          <span
            className="absolute h-10 rounded-full bg-button shadow-[inset_0_0px_4px_#ffffff] transition-all duration-200"
            style={{ width: "24%", transform: `translateX(${hoverIndex * 100}%)` }}
          />
        )}

        {/* Active bubble */}
        <span
          className="absolute h-10 rounded-full bg-button shadow-[inset_0_0px_4px_white] transition-all duration-200 z-10"
          style={{ width: "24%", transform: `translateX(${activeIndex * 100}%)` }}
        />

        {/* Links */}
        <div className="relative z-20 flex w-full justify-around">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => scrollTo(tab.id, index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`w-1/4 text-center transition-colors cursor-pointer${
                activeIndex === index ? "text-white" : "text-text hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── MOBILE hamburger button (< md) ── */}
      <button
        className="md:hidden fixed top-5 right-5 z-50 w-12 h-12 bg-bg rounded-full flex flex-col justify-center items-center gap-1.5 shadow-lg"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-0.5 bg-text transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-text transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-text transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* ── MOBILE dropdown menu ── */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-bg/95 backdrop-blur-lg mx-4 mt-20 rounded-2xl overflow-hidden shadow-2xl">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => scrollTo(tab.id, index)}
              className={`w-full text-left px-6 py-4 text-base font-medium font-poppins transition-colors border-b border-white/5 last:border-0 ${
                activeIndex === index
                  ? "text-white bg-button"
                  : "text-text hover:bg-button/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
