import { useState, useEffect } from "react";
import { skills } from "../data/skillsData";

function Skills() {
  const [active, setActive] = useState(null);

  const allSkills = Object.values(skills).flat();

  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(2);
      else if (window.innerWidth < 768) setColumns(3);
      else if (window.innerWidth < 1024) setColumns(4);
      else setColumns(5);
      console.log(columns);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <section id="skills" className="max-w-7xl mx-auto py-16 px-6">
      {/* Title */}
      <div className="mb-12 text-title">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-500 mb-10">
          Technologies and tools I work with
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-16 items-start justify-around">
        {/* LEFT SIDE */}
        <div
          className="grid grid-cols-2 gap-4 w-full
          lg:flex lg:flex-col lg:w-auto"
        >
          <SkillButton
            text="Frontend Development"
            onHover={() => setActive("frontend")}
            onLeave={() => setActive(null)}
          />
          <SkillButton
            text="Backend Development"
            onHover={() => setActive("backend")}
            onLeave={() => setActive(null)}
          />
          <SkillButton
            text="Programming Languages"
            onHover={() => setActive("programming")}
            onLeave={() => setActive(null)}
          />
          <SkillButton
            text="Tools & Platforms"
            onHover={() => setActive("tools")}
            onLeave={() => setActive(null)}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex items-center justify-center -ml-10">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6">
            {" "}
            {allSkills.map((skill, index) => {
              const isHighlighted =
                active === null || skills[active].includes(skill);
              const row = Math.floor(index / columns);
              const offset = row % 2 !== 0;

              return (
                <div
                  key={skill}
                  className={`
                            transition-transform duration-300
                            ${offset ? "translate-x-18" : ""}
                            ${row > 0 ? "-mt-10" : ""}
                                    
                          `}
                >
                  <Hexagon label={skill} active={isHighlighted} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

/* ---------- SUB COMPONENTS ---------- */

function SkillButton({ text, onHover, onLeave }) {
  return (
    <button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="bg-button text-white px-6 py-3 rounded-full
                 font-medium hover:bg-button opacity-90 cursor-pointer transition-all"
    >
      {text}
    </button>
  );
}

function Hexagon({ label, active }) {
  return (
    <svg
      width="120"
      height="162"
      viewBox="0 0 146 162"
      xmlns="http://www.w3.org/2000/svg"
      className={`
    ${active ? 'scale-110 opacity-100' : 'opacity-30'}
  `}
    >
      <path
        d="M61.7461 2.94753C68.5529 -0.982389 76.9393 -0.982388 83.7461 2.94753L134.492 32.2458C141.299 36.1758 145.492 43.4385 145.492 51.2984V109.895C145.492 117.755 141.299 125.018 134.492 128.948L83.7461 158.246C76.9393 162.176 68.5529 162.176 61.7461 158.246L11 128.948C4.19314 125.018 -0.0000368 117.755 -0.0000368 109.895L-0.0000368 51.2984C-0.0000368 43.4385 4.19314 36.1758 11 32.2458L61.7461 2.94753Z"
        fill="var(--bg)"
      />

      <image
        href={`/skills/${label.toLowerCase()}.png`}
        x="63"
        y="60"
        width="70"
        height="70"
        transform="translate(-25, -25)"
      />

      {/* Text Below Image */}
      <text
        x="73"
        y="120" // 👈 moved lower
        textAnchor="middle"
        fill="var(--text)"
        fontSize="16"
        fontWeight="600"
      >
        {label}
      </text>
    </svg>
  );
}
