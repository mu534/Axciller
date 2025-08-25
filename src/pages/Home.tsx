import type { FC } from "react";
import Navbar from "../assets/components/Navbar.tsx";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home: FC = () => {
  return (
    <section className="min-h-screen bg-black text-white font-sans">
      <style>
        {`
          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 100% %, 0% 100%);
          }

          @keyframes fadeIn {
            to { opacity: 1; }
          }

          @keyframes slideUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease forwards;
          }

          .slide-up {
            transform: translateY(20px);
            opacity: 0;
            animation: slideUp 1s ease forwards;
          }

          .hover-scale {
            transition: transform 0.3s ease;
          }

          .hover-scale:hover {
            transform: scale(1.05);
          }

          .st0 {
            font-family: 'Pristina-Regular', Pristina, serif;
            font-size: 24px;
            fill: #fff;
          }

          .st1 {
            fill: #fff;
          }

          .st2 {
            fill: none;
          }

          .st3 {
            stroke: #000;
            stroke-miterlimit: 10;
          }

          .st4 {
            clip-path: url(#clippath-1);
          }

          .st5 {
            clip-path: url(#clippath);
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-64px)] flex flex-col md:flex-row overflow-hidden z-10 bg-black">
        {/* White diagonal section */}
        <div className="relative flex-1 flex flex-col justify-center items-center p-8 md:p-12 text-black bg-white md:z-50 z-10 clip-diagonal">
          <h2 className="text-lg fade-in">Hi, I am</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 fade-in">
            Abdurehim Zakir
          </h1>
          <p className="text-gray-500 mt-2 fade-in">
            Graphic Designer & Video Editor
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 text-2xl fade-in">
            <a
              href="https://t.me/justdoit_5"
              aria-label="Telegram"
              className="text-gray-500 hover:text-blue-400 transition-all hover-scale"
            >
              <FaTelegramPlane aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/justdoit_5.a/"
              aria-label="Instagram"
              className="text-gray-500 hover:text-pink-500 transition-all hover-scale"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurehim-zakir-966529323/"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-blue-600 transition-all hover-scale"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* SVG section for hero section */}
        <div className="max-md:hidden md:flex flex-1 flex-col justify-center items-center bg-white relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 768"
            version="1.1"
            className="w-full max-w-[900px] md:max-w-[1not-last:100px] lg:max-w-[1100px] h-auto hover-scale"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="clippath">
                <rect
                  className="st2"
                  x="883.09"
                  y="350"
                  width="60.03"
                  height="98.39"
                />
              </clipPath>
              <clipPath id="clippath-1">
                <rect
                  className="st2"
                  x="849.4"
                  y="362.59"
                  width="98.39"
                  height="60.03"
                  transform="translate(-36.61 687.58) rotate(-41.11)"
                />
              </clipPath>
            </defs>
            <rect className="st1" width="1366" height="768" />
            <path d="M1363.08,225.46v317.07h-398.97c-42.35,0-82.16-16.49-112.1-46.43-29.94-29.94-46.43-69.76-46.43-112.1s16.49-82.16,46.43-112.1c29.94-29.94,69.75-46.43,112.1-46.43h398.97M1367.08,221.46h-402.97c-89.77,0-162.53,72.77-162.53,162.53h0c0,89.77,72.77,162.54,162.53,162.54h402.97V221.46h0Z" />
            <path d="M965.59,539.64h399.84c.32,0,.57-.26.57-.57V228.94c0-.32-.26-.57-.57-.57h-399.84c-85.96,0-155.64,69.68-155.64,155.64h0c0,85.96,69.68,155.64,155.64,155.64Z" />
            <g>
              <g>
                <path
                  className="st1"
                  d="M987.42,386.82l-4.79,13.02h-2.96l13.83-37.66h3.44l14.42,37.66h-3.17l-4.9-13.02h-15.87ZM1002.33,384.13c-4.2-11.19-6.35-16.57-7.1-19.1h-.05c-.91,2.85-3.33,9.52-6.72,19.1h13.88Z"
                />
                <path
                  className="st1"
                  d="M1017.76,372.94c4.47,6.62,6.4,9.58,7.48,11.19h.05c1.29-1.83,3.98-5.7,7.86-11.19h3.07l-9.36,13.02,9.52,13.88h-3.23c-3.87-5.76-6.67-9.85-7.96-11.73h-.05c-1.02,1.56-3.44,5.22-7.86,11.73h-3.12l9.52-13.67-9.09-13.24h3.17Z"
                />
                <path
                  className="st1"
                  d="M1060.53,391.93c-1.29,4.73-4.41,8.55-10.44,8.55-6.73,0-11.51-5-11.51-13.99,0-7.37,3.93-14.2,11.84-14.2,6.83,0,9.63,4.84,10.11,8.61h-2.74c-.81-3.12-2.85-6.08-7.42-6.08-5.7,0-8.93,4.84-8.93,11.57s3.01,11.57,8.66,11.57c3.93,0,6.29-1.99,7.69-6.03h2.74Z"
                />
                <path
                  className="st1"
                  d="M1067.47,360.19h2.69v5.22h-2.69v-5.22ZM1067.47,372.94h2.69v26.9h-2.69v-26.9Z"
                />
                <path
                  className="st1"
                  d="M1078.98,399.84v-39.65h2.69v39.65h-2.69Z"
                />
                <path
                  className="st1"
                  d="M1090.49,399.84v-39.65h2.69v39.65h-2.69Z"
                />
                <path
                  className="st1"
                  d="M1102.6,386.72c.05,6.94,3.55,11.25,8.72,11.25s6.78-2.85,7.75-5.06h2.74c-1.13,3.55-3.98,7.59-10.6,7.59-8.18,0-11.35-7.05-11.35-13.88,0-7.69,3.82-14.31,11.67-14.31,8.29,0,10.92,7.16,10.92,12.21,0,.75,0,1.51-.05,2.21h-19.8ZM1119.65,384.35c-.05-5.33-2.96-9.52-8.23-9.52-5.54,0-8.07,3.87-8.66,9.52h16.89Z"
                />
                <path
                  className="st1"
                  d="M1129.01,380.26c0-4.52-.05-6.46-.05-7.32h2.64c.05.86.11,2.58.11,6.03,1.56-4.04,5-6.46,9.36-6.67v2.91c-5.6.38-9.36,4.25-9.36,10.65v13.99h-2.69v-19.58Z"
                />
                <path
                  className="st1"
                  d="M1190.34,399.84h-2.42c-.22-.43-.32-2.37-.38-6.03-1.34,2.58-4.3,6.46-12.16,6.46-10.81,0-16.36-8.23-16.36-18.94,0-11.25,5.92-19.69,16.95-19.69,8.12,0,13.5,4.25,14.69,11.19h-2.91c-1.61-5.33-5.33-8.5-11.89-8.5-9.42,0-13.72,7.32-13.72,16.84,0,8.61,4.14,16.41,13.34,16.41s12.05-6.13,12.05-14.47v-.43h-12.16v-2.69h14.96v19.85Z"
                />
                <path
                  className="st1"
                  d="M1199.11,380.26c0-4.52-.05-6.46-.05-7.32h2.64c.05.86.11,2.58.11,6.03,1.56-4.04,5-6.46,9.36-6.67v2.91c-5.6.38-9.36,4.25-9.36,10.65v13.99h-2.69v-19.58Z"
                />
                <path
                  className="st1"
                  d="M1234.08,394.73c0,2.37.21,4.25.38,5.11h-2.58c-.21-.65-.38-1.83-.48-4.14-.91,1.99-3.28,4.79-8.82,4.79-6.24,0-8.93-4.04-8.93-8.07,0-5.92,4.57-8.61,12.64-8.61h5.11v-2.74c0-2.69-.81-6.29-6.94-6.29-5.43,0-6.24,2.85-6.83,5.06h-2.69c.32-2.96,2.15-7.53,9.58-7.53,6.13,0,9.58,2.58,9.58,8.5v13.93ZM1231.44,386.12h-5.27c-5.97,0-9.68,1.56-9.68,6.19,0,3.39,2.42,5.7,6.19,5.7,7.69,0,8.77-5.11,8.77-10.92v-.97Z"
                />
                <path
                  className="st1"
                  d="M1245.64,395.86v14.74h-2.69v-31.04c0-2.21,0-4.57-.05-6.62h2.64c.11,1.02.11,2.64.11,4.84,1.67-3.23,4.63-5.49,9.47-5.49,6.35,0,10.76,5.33,10.76,13.4,0,9.68-5.17,14.79-11.68,14.79-4.73,0-7.21-2.1-8.55-4.63ZM1263.02,385.8c0-6.24-3.01-10.92-8.34-10.92-6.51,0-9.2,4.09-9.2,11.41s2.1,11.67,8.82,11.67c5.6,0,8.72-4.74,8.72-12.16Z"
                />
                <path
                  className="st1"
                  d="M1275.28,360.19v17.27c1.51-2.8,4.14-5.17,8.88-5.17,3.82,0,9.09,1.94,9.09,10.44v17.11h-2.69v-16.57c0-5.33-2.42-8.34-6.89-8.34-5.33,0-8.39,3.28-8.39,9.9v15.01h-2.69v-39.65h2.69Z"
                />
                <path
                  className="st1"
                  d="M1302.07,360.19h2.69v5.22h-2.69v-5.22ZM1302.07,372.94h2.69v26.9h-2.69v-26.9Z"
                />
                <path
                  className="st1"
                  d="M1333.38,391.93c-1.29,4.73-4.41,8.55-10.44,8.55-6.73,0-11.51-5-11.51-13.99,0-7.37,3.93-14.2,11.84-14.2,6.83,0,9.63,4.84,10.11,8.61h-2.74c-.81-3.12-2.85-6.08-7.42-6.08-5.7,0-8.93,4.84-8.93,11.57s3.01,11.57,8.66,11.57c3.93,0,6.29-1.99,7.69-6.03h2.74Z"
                />
                <path
                  className="st1"
                  d="M1340.37,392.42c.91,3.5,3.39,5.6,7.64,5.6,4.79,0,6.73-2.21,6.73-5.22s-1.29-4.57-7.32-6.03c-6.94-1.67-8.66-3.77-8.66-7.32s2.8-7.16,8.88-7.16,8.99,3.71,9.42,7.53h-2.69c-.48-2.26-2.26-5.06-6.83-5.06s-6.03,2.31-6.03,4.47c0,2.48,1.29,3.71,6.62,5,7.59,1.83,9.47,4.3,9.47,8.34,0,4.9-3.98,7.91-9.63,7.91-6.13,0-9.58-3.23-10.33-8.07h2.74Z"
                />
              </g>
              <g>
                <path
                  className="st1"
                  d="M951.92,335.49c-.04.13-.05.26-.1.39l-4.67,12.75c-1.01,2.75-3.89,4.06-6.41,2.92l-23.22-10.59c-2.52-1.15-3.75-4.34-2.74-7.09l4.67-12.75c.27-.75.69-1.37,1.2-1.89-4.44-.94-9.05-1.44-13.77-1.44-36.57,0-66.22,29.65-66.22,66.22s29.65,66.22,66.22,66.22,66.22-29.65,66.22-66.22c0-19.17-8.15-36.42-21.17-48.51Z"
                />
                <g>
                  <g id="_x3C_Mirror_Repeat_x3E_">
                    <g className="st5">
                      <path
                        className="st3"
                        d="M919.54,390.87c-2.01,4.26-6.99,6.66-11.89,5.53-7.58,16.42-15.16,32.85-22.75,49.27,6.68-7.33,16.21-16.31,28.87-24.38,10.7-6.82,20.68-11.09,28.73-13.84-1.96-6.7-3.84-15.2-4.64-25.14-.83-10.41-.24-19.46.72-26.6-3.91-1.69-7.82-3.38-11.73-5.06-4.02,8.87-8.04,17.74-12.07,26.6,5.03,2.71,7.01,8.82,4.75,13.61Z"
                      />
                    </g>
                  </g>
                  <g
                    id="_x3C_Mirror_Repeat_x3E_1"
                    data-name="_x3C_Mirror_Repeat_x3E_"
                  >
                    <g className="st4">
                      <path
                        className="st3"
                        d="M900.64,382.28c-1.89,4.32-.43,9.65,3.66,12.59-7.39,16.51-14.78,33.02-22.17,49.54,1.13-9.85,1.64-22.93-.61-37.79-1.9-12.54-5.24-22.87-8.47-30.75,6.34-2.93,13.98-7.1,21.99-13.03,8.39-6.22,14.82-12.61,19.57-18.03,3.84,1.84,7.69,3.67,11.53,5.51-4.04,8.86-8.07,17.72-12.11,26.58-5.35-2.01-11.25.51-13.38,5.37Z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <text className="st0" transform="translate(1050.71 449.09)">
              <tspan x="0" y="0">
                What we craft, Time remembers
              </tspan>
            </text>
          </svg>
        </div>
      </div>

      {/* Project Description Section */}
      <div className="relative pb-0" style={{ backgroundColor: "#1D1D1D" }}>
        {/* Mobile SVG Background */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 md:hidden pointer-events-none z-0">
          <svg
            viewBox="0 0 566 361"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[300px] h-auto"
            aria-hidden="true"
          >
            <path
              d="M533.054 42.0547C520.08 54.6068 507.145 67.0815 494.172 79.6335C492.707 80.449 488.312 82.7025 482.592 81.7936C474.631 80.5442 470.631 74.2238 470.049 73.2602C451.624 50.5347 433.238 27.7319 414.814 5.00641C413.92 3.31013 411.741 -1.43276 412.608 -7.65258C413.702 -15.1088 418.477 -19.4873 419.709 -20.611C433.225 -32.7014 446.663 -44.8301 460.178 -56.9205C448.173 -66.3437 375.758 -121.144 276.588 -105.079C160.625 -86.2573 109.132 13.1073 104.337 22.7762C98.4298 34.6883 62.267 110.527 91.1905 198.981C103.643 237.249 123.858 264.139 137.391 279.621C155.758 251.721 177.293 212.961 193.965 163.79C209.451 118.175 216.032 77.2992 218.858 45.5484C243.775 46.6288 275.559 45.7184 311.766 39.1948C347.587 32.6725 377.486 22.5389 400.28 12.9295C420.796 37.2703 441.273 61.6884 461.788 86.0292C447.529 106.617 431.169 133.97 417.343 168.072C403.094 203.025 395.633 234.79 391.547 259.942C363.493 256.052 328.724 253.844 289.029 257.096C229.178 261.918 180.642 277.361 146.817 291.33C156.894 301.725 222.043 366.511 323.958 362.407C421.046 358.512 479.306 295.078 491.04 281.718C537.516 228.631 545.968 170.179 547.878 152.719C553.46 102.192 541.118 62.1482 533.285 41.9767L533.054 42.0547Z"
              fill="white"
            />
            <path
              d="M306.497 169.771C323.036 177.972 343.089 171.219 351.288 154.686C359.487 138.154 352.726 118.102 336.187 109.901C319.648 101.699 299.595 108.453 291.396 124.985C283.197 141.518 289.958 161.569 306.497 169.771Z"
              fill="white"
            />
            <path
              d="M295.304 160.847L142.049 286.364"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12 px-4 md:px-6 relative z-10">
          {/* Text Content */}
          <div className="text-center md:text-left flex-1 px-4 md:px-0">
            <h3 className="py-5 text-xl font-bold tracking-widest text-white uppercase">
              VISUAL IMPACT PROJECT
            </h3>
            <p className="mt-4 text-gray-200 leading-relaxed max-w-2xl text-sm md:text-base mb-5">
              This project combined graphic design and video editing to create a
              strong visual identity for a modern brand. I designed a complete
              set of promotional materials, including social media graphics,
              posters, and branded content. Alongside that, I produced and
              edited short promotional videos and animated clips to help the
              brand communicate its message across digital platforms. The goal
              was to deliver clean, creative, and consistent visuals that
              captured attention and told a story.
            </p>
          </div>

          {/* SVG Foreground on Desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <svg
              viewBox="0 0 566 361"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[450px] h-auto"
              aria-hidden="true"
            >
              <path
                d="M533.054 42.0547C520.08 54.6068 507.145 67.0815 494.172 79.6335C492.707 80.449 488.312 82.7025 482.592 81.7936C474.631 80.5442 470.631 74.2238 470.049 73.2602C451.624 50.5347 433.238 27.7319 414.814 5.00641C413.92 3.31013 411.741 -1.43276 412.608 -7.65258C413.702 -15.1088 418.477 -19.4873 419.709 -20.611C433.225 -32.7014 446.663 -44.8301 460.178 -56.9205C448.173 -66.3437 375.758 -121.144 276.588 -105.079C160.625 -86.2573 109.132 13.1073 104.337 22.7762C98.4298 34.6883 62.267 110.527 91.1905 198.981C103.643 237.249 123.858 264.139 137.391 279.621C155.758 251.721 177.293 212.961 193.965 163.79C209.451 118.175 216.032 77.2992 218.858 45.5484C243.775 46.6288 275.559 45.7184 311.766 39.1948C347.587 32.6725 377.486 22.5389 400.28 12.9295C420.796 37.2703 441.273 61.6884 461.788 86.0292C447.529 106.617 431.169 133.97 417.343 168.072C403.094 203.025 395.633 234.79 391.547 259.942C363.493 256.052 328.724 253.844 289.029 257.096C229.178 261.918 180.642 277.361 146.817 291.33C156.894 301.725 222.043 366.511 323.958 362.407C421.046 358.512 479.306 295.078 491.04 281.718C537.516 228.631 545.968 170.179 547.878 152.719C553.46 102.192 541.118 62.1482 533.285 41.9767L533.054 42.0547Z"
                fill="black"
              />
              <path
                d="M306.497 169.771C323.036 177.972 343.089 171.219 351.288 154.686C359.487 138.154 352.726 118.102 336.187 109.901C319.648 101.699 299.595 108.453 291.396 124.985C283.197 141.518 289.958 161.569 306.497 169.771Z"
                fill="black"
              />
              <path
                d="M295.304 160.847L142.049 286.364"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
