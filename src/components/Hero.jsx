import NavBar from "./NavBar";
import darkmode from "../assets/darkmode.png";
import resumeLogo from "../assets/resumeLogo.png";

function Hero() {
  return (
    <section className="w-full p-6">
      <div className="max-w-7xl mx-auto">
        <svg
          viewBox="0 0 1447 698"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 572.006V122.924C0 101.385 17.4609 83.9238 39 83.9238H47.4104C68.9495 83.9238 86.4104 66.4629 86.4104 44.9238V39C86.4104 17.4609 103.871 0 125.41 0H944.48C966.02 0 983.48 17.4609 983.48 39V44.9238C983.48 66.4629 1000.94 83.9238 1022.48 83.9238H1408C1429.54 83.9238 1447 101.385 1447 122.924V659C1447 680.539 1429.54 698 1408 698H357.17C335.631 698 318.17 680.539 318.17 659V650.006C318.17 628.467 300.709 611.006 279.17 611.006H39C17.4609 611.006 0 593.545 0 572.006Z"
            fill="#1d3557"
          />
          <foreignObject x="0" y="0" width="1447" height="698">
            <div className="w-full h-full flex flex-col justify-between text-honeydew">
              <NavBar />
              <div className="flex justify-between px-12">
                <div className="w-1/2 px-12 text-white">
                  <p className="text-sm opacity-80">Hi, my name is</p>
                  <h2 className="text-6xl font-geist font-extrabold leading-tight tracking-wide">
                    GOPINATH
                  </h2>
                  <h3 className="text-2xl font-semibold mt-2">
                    I’m a Aspiring Software Engineer
                  </h3>
                  <p className="text-base font-roboto pb-4 leading-relaxed max-w-md mt-4">
                    I’m a 3rd year Computer Science student passionate about Web
                    Development, React, and AI-driven applications. I enjoy
                    building real-world projects and continuously improving my
                    problem-solving skills.
                  </p>
                  <button className="bg-accent text-white text-lg font-roboto font-medium px-6 py-3 rounded-full">
                    Contact Me
                  </button>
                </div>
                <div className="w-1/2 bg-gray-200">
                  <img src="" alt="" />
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="w-16 h-16 p-3 bg-accent rounded-4xl flex justify-center items-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5ZM15 25V5C17.6522 5 20.1957 6.05357 22.0711 7.92893C23.9464 9.8043 25 12.3478 25 15C25 17.6522 23.9464 20.1957 22.0711 22.0711C20.1957 23.9464 17.6522 25 15 25Z"
                        fill="#FFFAFA"
                      />
                    </svg>
                  </div>

                  <button className=" text-sm ml-12 px-6 w-40 py-3 rounded-full bg-accent flex justify-around items-center bg-punch_red text-honeydew hover:bg-punch_red-600">
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
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
