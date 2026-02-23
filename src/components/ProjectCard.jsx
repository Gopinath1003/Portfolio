function ProjectCard({ title, description, tech, live, github }) {
  return (
    <div className="w-full max-w-95 hover:scale-101 transition-all delay-50">
      
      <svg
        viewBox="0 0 411 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Card shape */}
        <path
          d="M370.5 0.5H40.5C18.4086 0.5 0.5 18.4086 0.5 40.5V359C0.5 381.091 18.4086 399 40.5 399H285.5C307.591 399 325.5 381.091 325.5 359V354C325.5 331.909 343.409 314 365.5 314H370.5C392.591 314 410.5 296.091 410.5 274V40.5C410.5 18.4086 392.591 0.5 370.5 0.5Z"
          fill="var(--bg)"
          stroke="black"
        />

        {/* 🔹 Top Image */}
        <image
          href={`/projects/${title.toLowerCase()}.png`}
          x="20"
          y="20"
          width="371"
          height="170"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* 🔹 Bottom Content */}
        <foreignObject x="0" y="190" width="411" height="210">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="h-full p-4 rounded-t-2xl relative flex flex-col justify-around items-start"
          >
            <h3 className="font-semibold text-lg inline-block px-2">
              {title}
            </h3>

            <p className="text-sm mt-2 px-2 py-1">
              {description}
            </p>

            <div className="text-xs mt-2 mb-2 px-2 text-bg">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 px-2 py-1 mr-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <button className="mt-3 px-5 py-2 bg-button text-text2 rounded-full font-medium cursor-pointer transition">
              Live Demo
            </button>

            <button className="absolute bottom-2 right-2 p-8 w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-600 hover:scale-105 transition">
              <i
                className="fa-brands fa-github fa-2xl"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}

export default ProjectCard;