const tabs = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

const Footer = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="bg-bg mt-20 rounded-tl-4xl rounded-tr-4xl text-text">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:mx-5 justify-between items-start gap-8">
          {/* Left: Name, tagline, nav links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full sm:w-auto">
            <div className="max-w-xs">
              <h3 className="text-lg font-semibold">Gopinath</h3>
              <p className="text-sm opacity-70 mt-1">
                3rd year Computer Science Engineering student passionate about
                building modern web applications.
              </p>
            </div>

            <div className="hidden sm:block w-px bg-gray-400/40 self-stretch" />

            {/* Nav links */}
            <div className="flex sm:flex-col gap-4 sm:gap-3 text-sm opacity-80 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab.id)}
                  className="text-left hover:text-button transition cursor-pointer"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Social icons */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Gopinath1003"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="bg-button w-11 h-11 flex justify-center items-center rounded-full hover:scale-105 transition"
            >
              <i className="fa-brands fa-github fa-lg text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gopinath-s-7a4892276/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="bg-button w-11 h-11 flex justify-center items-center rounded-full hover:scale-105 transition"
            >
              <i className="fa-brands fa-linkedin fa-lg text-white"></i>
            </a>
            <a
              href="mailto:gopi18706@gmail.com"
              aria-label="Email"
              className="bg-button w-11 h-11 flex justify-center items-center rounded-full hover:scale-105 transition"
            >
              <i className="fa-solid fa-envelope fa-lg text-white"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom */}
        <div className="text-center text-sm opacity-60">
          Made with ❤️ by Gopinath
        </div>
      </div>
    </footer>
  );
};

export default Footer;
