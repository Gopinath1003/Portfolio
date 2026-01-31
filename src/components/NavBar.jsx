import { useState } from "react";

const tabs = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    
    <div
  className="fixed top-6 left-1/2 -translate-x-1/2 z-50
  w-1/4 h-14 px-2 rounded-full
  bg-gray-400 backdrop-blur-xl
  font-medium font-poppins text-lg
  flex items-center overflow-hidden
  before:content-['']
  before:absolute before:-inset-0.75
  before:rounded-full
  before:bg-white/20
  before:backdrop-blur-2xl
  before:border before:border-white/30
  before:z-[-1]"
>

      {/* Hover bubble */}
      {hoverIndex !== null && hoverIndex !== activeIndex && (
        <span
          className="absolute h-12 rounded-full bg-linear-to-b from-[#3f3f3f] to-[#212121]
            shadow-[inset_0_2px_7px_#ffffff29] transition-all duration-200"
          style={{
            width: "24%",
            transform: `translateX(${hoverIndex * 100}%)`,
            left: "",
          }}
        />
      )}

      {/* Active bubble */}
      <span
        className="absolute h-12 rounded-full bg-linear-to-b from-[#f2f2f2] to-[#b3b3b3]
          shadow-[inset_0_2px_7px_white] transition-all duration-200 z-10"
        style={{
          width: "24%",
          transform: `translateX(${activeIndex * 100}%)`,
          left: "",
        }}
      />

      {/* Links */}
      <div className="relative z-20 flex w-full justify-around">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => {
              setActiveIndex(index);
              document.getElementById(tab.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`w-1/4 text-center transition-colors
      ${
        activeIndex === index
          ? "text-black"
          : "text-honeydew hover:text-gray-300"
      }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
