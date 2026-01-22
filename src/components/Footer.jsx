const Footer = () => {
  return (
    <footer className="bg-[#ade4e4] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Left: Name & Tagline */}
          <div>
            <h3 className="text-lg font-semibold">Gopinath</h3>
            <p className="text-sm opacity-70 mt-1 max-w-xs">
              3rd year Computer Science Engineering student passionate about
              building modern web applications.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Gopinath1003"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-black/30 rounded-full hover:scale-105 transition"
              aria-label="GitHub"
            >
              <i class="fa-brands fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gopinath-s-7a4892276/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-black/30 rounded-full hover:scale-105 transition"
              aria-label="LinkedIn"
            >
              <i class="fa-brands fa-linkedin fa-lg"></i>
            </a>
            <a
              href="mailto:gopi18706@gmail.com.com"
              className="p-3 bg-black/30 rounded-full hover:scale-105 transition"
              aria-label="Email"
            >
              <i class="fa-solid fa-envelope fa-lg"></i>
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Section */}
        <div className="text-center text-sm opacity-60">
          {/* © {new Date().getFullYear()} Gopinath. All rights reserved. */}
          Made with ❤️ by Gopinath
        </div>

      </div>
    </footer>
  );
};

export default Footer;
