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

  // 👇 ADD THIS
  useEffect(() => {
    const sections = tabs.map((tab) =>
      document.getElementById(tab.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex(
              (tab) => tab.id === entry.target.id
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6, // 60% visible
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    
    <div
  className="fixed top-6 left-1/2 -translate-x-1/2 z-50
  w-1/4 h-14 px-2 rounded-full
  bg-bg 
  font-medium font-poppins text-lg
  flex items-center overflow-hidden
  backdrop-filter backdrop-blur-lg  border-gray-100 drop-shadow-button
"
>

      {/* Hover bubble */}
      {hoverIndex !== null && hoverIndex !== activeIndex && (
        <span
          className="absolute h-10 rounded-full bg-button
            shadow-[inset_0_0px_4px_#ffffff] transition-all duration-200 "
          style={{
            width: "24%",
            transform: `translateX(${hoverIndex * 100}%)`,
            left: "",
          }}
        />
      )}

      {/* Active bubble */}
      <span
        className="absolute h-10 rounded-full bg-button
          shadow-[inset_0_0px_4px_white] transition-all duration-200 z-10"
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
            className={`w-1/4 text-center transition-colors cursor-pointer
      ${
        activeIndex === index
          ? "text-white"
          : "text-text hover:text-gray-300"
      }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
