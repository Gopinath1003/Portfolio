const Contact = () => {
  return (
    <section id="contact" className="min-h-[70vh] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="text-sm opacity-70 mt-2">
            Let’s connect and build something together
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* LEFT: Contact Info */}
          <div className="bg-[#d48a3c] rounded-3xl p-8 space-y-6">
            
            <div>
              <p className="text-sm opacity-70">Email</p>
              <p className="text-base font-semibold">
                gopinath@example.com
              </p>
            </div>

            <div>
              <p className="text-sm opacity-70">Phone</p>
              <p className="text-base font-semibold">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div>
              <p className="text-sm opacity-70">Location</p>
              <p className="text-base font-semibold">
                India
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm opacity-70 mb-3">Find me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1f2b2b] p-3 rounded-full hover:scale-105 transition"
                >
                  🐙
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1f2b2b] p-3 rounded-full hover:scale-105 transition"
                >
                  💼
                </a>
                <a
                  href="mailto:gopinath@example.com"
                  className="bg-[#1f2b2b] p-3 rounded-full hover:scale-105 transition"
                >
                  ✉️
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <form className="bg-[#81c8c8] rounded-3xl p-8 space-y-5">
            
            <div>
              <label className="text-sm opacity-70">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 rounded-xl bg-black/20 outline-none"
              />
            </div>

            <div>
              <label className="text-sm opacity-70">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-1 p-3 rounded-xl bg-black/20 outline-none"
              />
            </div>

            <div>
              <label className="text-sm opacity-70">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full mt-1 p-3 rounded-xl bg-black/20 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-full bg-[#d48a3c] text-black font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
