import type { FC } from "react";
import Navbar from "../assets/components/Navbar.tsx";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home: FC = () => {
  return (
    <section className="min-h-screen bg-black text-white font-sans">
      <style>
        {`
          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
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
            transform: scale(1.1);
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
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com/justdoit_5.a/"
              aria-label="Instagram"
              className="text-gray-500 hover:text-pink-500 transition-all hover-scale"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurehim-zakir-966529323/"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-blue-600 transition-all hover-scale"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Black section with SVG */}
        <div className="max-md:hidden md:flex flex-1 flex-col justify-center items-center bg-black space-y-6 relative">
          <svg
            viewBox="0 0 629 629"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[480px] h-auto hover-scale"
            aria-hidden="true"
          >
            <path
              d="M532.988 229.048C520.015 241.6 507.08 254.075 494.106 266.627C492.641 267.442 488.246 269.696 482.526 268.787C474.566 267.537 470.566 261.217 469.983 260.253C451.559 237.528 433.173 214.725 414.749 191.999C413.855 190.303 411.676 185.56 412.543 179.34C413.637 171.884 418.412 167.506 419.644 166.382C433.159 154.292 446.598 142.163 460.113 130.073C448.108 120.649 375.693 65.8488 276.523 81.914C160.561 100.735 109.067 200.099 104.272 209.768C98.3649 221.68 62.2018 297.518 91.1249 385.973C103.577 424.241 123.792 451.131 137.325 466.612C155.692 438.713 177.227 399.953 193.899 350.782C209.386 305.167 215.966 264.291 218.793 232.54C243.709 233.621 275.494 232.711 311.701 226.187C347.522 219.665 377.421 209.532 400.215 199.922C420.73 224.263 441.207 248.681 461.723 273.022C447.463 293.61 431.103 320.963 417.277 355.065C403.028 390.018 395.566 421.783 391.481 446.934C363.427 443.045 328.657 440.836 288.963 444.088C229.112 448.909 180.576 464.353 146.751 478.322C156.828 488.716 221.977 553.502 323.892 549.4C420.979 545.505 479.239 482.07 490.974 468.711C537.45 415.624 545.902 357.172 547.812 339.712C553.394 289.186 541.052 249.142 533.219 228.97L532.988 229.048Z"
              fill="white"
            />
            <path
              d="M306.432 356.763C322.97 364.965 343.024 358.211 351.222 341.679C359.421 325.146 352.66 305.095 336.122 296.894C319.583 288.692 299.529 295.445 291.331 311.978C283.132 328.51 289.893 348.561 306.432 356.763Z"
              fill="white"
            />
            <path
              d="M295.239 347.84L144.998 470"
              stroke="black"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2 className="text-3xl md:text-4xl font-bold text-white slide-up">
            Axciller Graphics
          </h2>
        </div>
      </div>

      {/* Project Description Section */}
      <div className="relative pb-0" style={{ backgroundColor: "#1D1D1D" }}>
        {/* Mobile SVG Background */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 md:hidden pointer-events-none z-0 ">
          <svg
            viewBox="0 0 566 361"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[300px] h-auto"
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
