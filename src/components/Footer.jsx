const tabs = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

const Footer = () => {
  return (
    <footer className="bg-bg mt-20 rounded-tl-4xl rounded-tr-4xl text-text">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left: Name & Tagline */}
          <div className="w-1/3 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Gopinath</h3>
              <p className="text-sm opacity-70 mt-1 max-w-xs">
                3rd year Computer Science Engineering student passionate about
                building modern web applications.
              </p>
            </div>
<hr className="bg-gray-400 w-[1.5px] h-44 mx-10 md:block" />
            {/* 🔥 Vertical Footer Navbar (Right Side) */}
            <div className="flex flex-col gap-3 text-sm opacity-80">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    document.getElementById(tab.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="text-left hover:text-button transition cursor-pointer"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Gopinath1003"
              target="_blank"
              rel="noreferrer"
              className="bg-button w-12 h-12 flex justify-center items-center rounded-full hover:drop-shadow-gray-200 hover:drop-shadow-md hover:scale-105 transition"
            >
              <i className="fa-brands fa-github fa-lg"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/gopinath-s-7a4892276/"
              target="_blank"
              rel="noreferrer"
              className="bg-button w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 transition"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>

            <a
              href="mailto:gopi18706@gmail.com"
              className="bg-button w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 transition"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Section */}
        <div className="text-center text-sm opacity-60">
          Made with ❤️ by Gopinath
        </div>
      </div>
    </footer>
  );
};

export default Footer;
