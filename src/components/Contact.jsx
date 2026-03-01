const Contact = () => {
  return (
    <section id="contact" className="min-h-[70vh] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12 text-title">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="text-sm opacity-70 mt-2">
            Let’s connect and build something together
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT: Contact Info */}
          {/* LEFT: Contact Info */}
<div className="bg-button rounded-3xl p-10 text-white space-y-8">

  {/* Intro Text */}
  <p className="text-sm opacity-80 leading-relaxed">
    Feel free to reach out to me for any questions or opportunities.
    I'm always open to discussing new projects, creative ideas or
    opportunities to be part of your vision.
  </p>

  {/* Location */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30">
      <i className="fa-solid fa-location-dot"></i>
    </div>
    <div>
      <p className="text-sm opacity-70">Location</p>
      <p className="font-semibold">India</p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30">
      <i className="fa-solid fa-envelope"></i>
    </div>
    <div>
      <p className="text-sm opacity-70">Email</p>
      <p className="font-semibold">gopi18706@gmail.com</p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30">
      <i className="fa-solid fa-phone"></i>
    </div>
    <div>
      <p className="text-sm opacity-70">Phone</p>
      <p className="font-semibold">+91 XXXXX XXXXX</p>
    </div>
  </div>

  {/* Social Section */}
  <div className="pt-4">
    <p className="text-sm opacity-70 mb-4">Follow Me</p>
    <div className="flex gap-4">
      <a
        href="https://github.com/Gopinath1003"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-full hover:scale-105 transition"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/gopinath-s-7a4892276/"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-full hover:scale-105 transition"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="mailto:gopi18706@gmail.com"
        className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-full hover:scale-105 transition"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  </div>

</div>

          {/* RIGHT: Contact Form */}
          <form className="bg-bg rounded-3xl p-7 sm:p-8 space-y-5">
            <div>
              <label className="text-sm opacity-70">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 rounded-xl bg-black/10 outline-none focus:ring-2 focus:ring-button/40 transition"
              />
            </div>
            <div>
              <label className="text-sm opacity-70">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-1 p-3 rounded-xl bg-black/10 outline-none focus:ring-2 focus:ring-button/40 transition"
              />
            </div>
            <div>
              <label className="text-sm opacity-70">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full mt-1 p-3 rounded-xl bg-black/10 outline-none resize-none focus:ring-2 focus:ring-button/40 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-full bg-button text-white font-medium hover:opacity-90 transition cursor-pointer"
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
