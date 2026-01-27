import { useState } from "react";
import { skills } from "../data/skillsData";

function Skills() {
  const [active, setActive] = useState(null);

  const allSkills = Object.values(skills).flat();
  const columns = 5;

  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2">My Skills</h2>
      <p className="text-gray-500 mb-10">Technologies and tools I work with</p>

      <div className="flex gap-16 items-start justify-around">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4">
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
        <div className="grid grid-cols-5 gap-x-6">
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
  );
}

export default Skills;

/* ---------- SUB COMPONENTS ---------- */

function SkillButton({ text, onHover, onLeave }) {
  return (
    <button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="bg-red-500 text-white px-6 py-3 rounded-full
                 font-medium hover:bg-red-600 cursor-pointer transition-all"
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
        transition-all duration-300
        ${active ? "scale-110 opacity-100" : "opacity-30"}
      `}
    >
      <path
        d="M61.7461 2.94753C68.5529 -0.982389 76.9393 -0.982388 83.7461 2.94753L134.492 32.2458C141.299 36.1758 145.492 43.4385 145.492 51.2984V109.895C145.492 117.755 141.299 125.018 134.492 128.948L83.7461 158.246C76.9393 162.176 68.5529 162.176 61.7461 158.246L11 128.948C4.19314 125.018 -0.0000368 117.755 -0.0000368 109.895L-0.0000368 51.2984C-0.0000368 43.4385 4.19314 36.1758 11 32.2458L61.7461 2.94753Z"
        fill="#1D3557"
      />

      {/* CENTER TEXT */}
      <text
        x="73"
        y="85"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="18"
        fontWeight="600"
      >
        {label}
      </text>
    </svg>
  );
}
