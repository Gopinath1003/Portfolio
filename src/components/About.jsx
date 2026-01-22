const About = () => {
  return (
    <section id="about" className="min-h-[80vh] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-sm opacity-70 mt-2">
            A brief introduction about who I am and what I do
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT: About Text Card */}
          <div>
            <img src="" alt="profile" />
          </div>
          <div className="grid gap-7">
            <div className="bg-bg rounded-3xl p-8 transition-all duration-300 hover:scale-[1.01]">
              <p className="text-base leading-relaxed mb-4">
                I’m a 3rd year Computer Science Engineering student with a
                strong interest in web development and problem-solving. I enjoy
                building real-world applications using modern technologies like
                React and Tailwind CSS.
              </p>

              <p className="text-base leading-relaxed">
                Alongside development, I actively practice data structures and
                algorithms and explore AI-based applications. I’m currently
                focused on improving my skills, building meaningful projects,
                and preparing for software engineering internships.
              </p>
              
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white border-text border rounded-2xl h-[120px] p-5 flex flex-col justify-center transition-all duration-300 hover:scale-[1.02]">
                <span className="text-xl">🎓</span>
                <p className="text-xs opacity-70 mt-1">Degree</p>
                <p className="text-sm font-semibold">B.E / B.Tech CSE</p>
              </div>

              {/* Card 2 */}
              <div className="border-text border rounded-2xl h-[120px] p-5 flex flex-col justify-center transition-all duration-300 hover:scale-[1.02]">
                <span className="text-xl">💻</span>
                <p className="text-xs opacity-70 mt-1">Focus</p>
                <p className="text-sm font-semibold">Web Development</p>
              </div>

              {/* Card 3 */}
              <div className="border-text border rounded-2xl h-[120px] p-5 flex flex-col justify-center transition-all duration-300 hover:scale-[1.02]">
                <span className="text-xl">⚛️</span>
                <p className="text-xs opacity-70 mt-1">Tech Stack</p>
                <p className="text-sm font-semibold">React & Tailwind</p>
              </div>

              {/* Card 4 */}
              <div className="border-text border rounded-2xl h-[120px] p-5 flex flex-col justify-center transition-all duration-300 hover:scale-[1.02]">
                <span className="text-xl">📍</span>
                <p className="text-xs opacity-70 mt-1">Location</p>
                <p className="text-sm font-semibold">India</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Info Cards */}
        </div>
      </div>
    </section>
  );
};

export default About;
