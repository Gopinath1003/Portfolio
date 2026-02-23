import "../index.css";

export default function Header() {


  return (
    <div className="flex justify-between items-center w-full">
      {/* LOGO (unchanged) */}
      <div>
        <div className="w-16 h-16 p-3 bg-button rounded-full flex justify-center items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0.404297C29.9999 2.69891 28.5938 4.66411 26.5967 5.48828C26.7088 5.62485 26.8194 5.76278 26.9268 5.90332H13.7578V5.98633C9.38921 6.57778 6.01968 10.3644 6.01953 14.9512C6.01953 19.9484 10.0186 24 14.9521 24C18.5367 24 21.627 21.8607 23.0498 18.7744H19.3467C16.2603 18.7743 13.7581 16.2719 13.7578 13.1855C13.7578 13.0474 13.7655 12.9101 13.7754 12.7744H23.624C23.6162 12.7422 23.6088 12.7098 23.6006 12.6777H29.8213C29.8263 12.7098 29.8292 12.7423 29.834 12.7744H29.9834C29.9933 12.91 30 13.0474 30 13.1855C30 13.415 29.9839 13.641 29.957 13.8633C29.9852 14.2385 30 14.6176 30 15C29.9999 23.2841 23.2842 30 15 30C6.71577 30 6.64917e-05 23.2841 0 15C0 7.12943 6.06185 0.674769 13.7715 0.0498047C13.7726 0.0331968 13.7732 0.016571 13.7744 0H29.9834C29.9931 0.133496 30 0.268326 30 0.404297Z"
            fill="#FFFAFA"
          />
        </svg>
        
      </div>
      </div>
      
      {/* Social */}
      <div className="w-46 h-16 p-2 bg-gray-200 rounded-full flex justify-between items-center">
        <div className="w-13 h-13 p-3 text-text bg-button rounded-full flex justify-center items-center cursor-pointer">
          <a href="https://www.linkedin.com/in/gopinath-s-7a4892276/" target="_blank">
          <i class="fa-brands fa-linkedin-in fa-lg"></i>
          </a>
        </div>
        <div className="w-13 h-13 p-3 text-text bg-button rounded-full flex justify-center items-center cursor-pointer">
          <i class="fa-brands fa-x-twitter fa-lg"></i>
        </div>
        <div className="w-13 h-13 p-3 text-text bg-button rounded-full flex justify-center items-center cursor-pointer">
          <a href="https://github.com/Gopinath1003" target="_blank">
          <i className="fa-brands fa-github fa-lg"></i>
          </a>

        </div>
      </div>
      
    </div>
  );
}

