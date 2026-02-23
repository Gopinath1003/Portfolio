import { useState, useEffect } from "react";
import Header from "./Header";
import profile from "../assets/profile.png";
import "../index.css";

function Hero() {
  const themes = ["", "theme-dark", "theme-blue", "theme-winter","theme-dark1"]; // "" = default
  const [themeIndex, setThemeIndex] = useState(0);
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  const handleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  useEffect(() => {
    document.documentElement.className = themes[themeIndex];
  }, [themeIndex]);

  useEffect(() => {
    const homeSection = document.getElementById("home");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHomeVisible(entry.isIntersecting);
      },
      {
        threshold: 0.0, // 30% of section visible
      },
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  return (
    <section
      id="home"
      className="
    w-full
    p-6
  "
    >
      <div className="max-w-7xl mx-auto">
        <svg
          viewBox="0 0 1447 775"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 655V111C0 90.5655 16.5655 74 37 74C57.4345 74 74 57.4345 74 37C74 16.5655 90.5655 0 111 0H454.5C474.935 0 491.5 16.5655 491.5 37C491.5 57.4345 508.065 74 528.5 74H918C938.435 74 955 57.4345 955 37C955 16.5655 971.565 0 992 0H1216C1236.43 0 1253 16.5655 1253 37C1253 57.4345 1269.57 74 1290 74H1406C1428.64 74 1447 92.3563 1447 115V729C1447 751.644 1428.64 770 1406 770H316.17C295.736 770 279.17 753.435 279.17 733C279.17 712.565 262.605 696 242.17 696H41C18.3563 696 0 677.644 0 655Z"
            fill="var(--bg)"
          />

          <foreignObject x="0" y="0" width="1447" height="770">
            <div className="w-full h-full flex flex-col justify-between">
              <Header />
              <div className="flex justify-between items-center px-12">
                <div className="w-1/2 px-12 text-text">
                  <p className="text-button font-bold opacity-80">
                    Hi, my name is
                  </p>
                  <h2 className="text-6xl tracking-widest font-chromate font-extrabold leading-tight">
                    GOPINATH
                  </h2>
                  <h3 className="text-2xl font-semibold mt-2">
                    I’m a Aspiring Software Engineer
                  </h3>
                  <p className="text-base font-poppins pb-4 leading-relaxed max-w-md mt-4">
                    I’m a 3rd year Computer Science student passionate about Web
                    Development, React, and AI-driven applications. I enjoy
                    building real-world projects and continuously improving my
                    problem-solving skills.
                  </p>
                  <button
                    className="bg-button text-text text-lg font-roboto px-6 py-3 rounded-full cursor-pointer"
                    onClick={() => {
                      document.getElementById("contact").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    Contact Me
                  </button>
                </div>
                <div className="w-1/2 h-125 mr-10 overflow-visible relative">
                  <div className="absolute left-10 w-140 h-140 rounded-full border-8 border-dashed border-button animate-slow-spin"></div>

                  <img
                    className="mask-image brightness-120 contrast-105 saturate-80"
                    src={profile}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex">
                  <div
                    className="w-16 h-16 p-3 bg-button text-white rounded-4xl flex justify-center items-center cursor-pointer"
                    onClick={handleTheme}
                  >
                    <i class="fa-solid fa-circle-half-stroke fa-xl"></i>
                  </div>
                  <a href="../../public/resume/Gopinath_S.pdf" download>
                    <button className="bg-button text-text2 text-sm ml-10 px-6 h-16 w-40 py-3 rounded-full flex justify-around items-center cursor-pointer">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.25 11.25H23.125L16.25 4.375V11.25ZM7.5 2.5H17.5L25 10V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V5C5 3.6125 6.1125 2.5 7.5 2.5ZM17.5 25V23.75C17.5 22.0875 14.1625 21.25 12.5 21.25C10.8375 21.25 7.5 22.0875 7.5 23.75V25H17.5ZM12.5 15C11.837 15 11.2011 15.2634 10.7322 15.7322C10.2634 16.2011 10 16.837 10 17.5C10 18.163 10.2634 18.7989 10.7322 19.2678C11.2011 19.7366 11.837 20 12.5 20C13.163 20 13.7989 19.7366 14.2678 19.2678C14.7366 18.7989 15 18.163 15 17.5C15 16.837 14.7366 16.2011 14.2678 15.7322C13.7989 15.2634 13.163 15 12.5 15Z"
                          fill="#FFFAFA"
                        />
                      </svg>

                      <p className="text-lg font-medium">Resume</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
      {!isHomeVisible && (
        <div
          className="fixed bottom-5 left-10 w-14 h-14 text-white bg-button rounded-full flex justify-center items-center cursor-pointer z-50 shadow-lg transition-all duration-300 animate-fadeIn"
          onClick={handleTheme}
        >
          <i class="fa-solid fa-circle-half-stroke fa-xl"></i>
        </div>
      )}
      <div className="fixed bottom-0 right-10 flex flex-col items-center z-50">
        <a
          href="mailto:gopi18706@gmail.com"
          className="writing-mode-vertical mb-5 text-sm tracking-widest text-bg transition duration-300 hover:-translate-y-1"
          style={{ writingMode: "vertical-rl" }}
        >
          gopi18706@gmail.com
        </a>

        <div className="w-0.5 h-25 bg-bg"></div>
      </div>
    </section>
  );
}

export default Hero;
