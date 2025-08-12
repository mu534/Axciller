import type { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 shadow-lg transition-all duration-300"
      style={{
        background:
          "linear-gradient(to right, #DC2626, #00E0FF, #9B5CF6, black)",
      }}
    >
      {/* Top bar with logo and hamburger */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 629 629"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <path
                d="M532.988 229.048C520.015 241.6 507.08 254.075 494.106 266.627C492.641 267.442 488.246 269.696 482.526 268.787C474.566 267.537 470.566 261.217 469.983 260.253C451.559 237.528 433.173 214.725 414.749 191.999C413.855 190.303 411.676 185.56 412.543 179.34C413.637 171.884 418.412 167.506 419.644 166.382C433.159 154.292 446.598 142.163 460.113 130.073C448.108 120.649 375.693 65.8488 276.523 81.914C160.561 100.735 109.067 200.099 104.272 209.768C98.3649 221.68 62.2018 297.518 91.1249 385.973C103.577 424.241 123.792 451.131 137.325 466.612C155.692 438.713 177.227 399.953 193.899 350.782C209.386 305.167 215.966 264.291 218.793 232.54C243.709 233.621 275.494 232.711 311.701 226.187C347.522 219.665 377.421 209.532 400.215 199.922C420.73 224.263 441.207 248.681 461.723 273.022C447.463 293.61 431.103 320.963 417.277 355.065C403.028 390.018 395.566 421.783 391.481 446.934C363.427 443.045 328.657 440.836 288.963 444.088C229.112 448.909 180.576 464.353 146.751 478.322C156.828 488.716 221.977 553.502 323.892 549.4C420.979 545.505 479.239 482.07 490.974 468.711C537.45 415.624 545.902 357.172 547.812 339.712C553.394 289.186 541.052 249.142 533.219 228.97L532.988 229.048Z"
                fill="black"
              />
              <path
                d="M306.432 356.763C322.97 364.965 343.024 358.211 351.222 341.679C359.421 325.146 352.66 305.095 336.122 296.894C319.583 288.692 299.529 295.445 291.331 311.978C283.132 328.510 289.893 348.561 306.432 356.763Z"
                fill="black"
              />
              <path
                d="M295.239 347.84L144.998 470"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M295.239 347.84L144.998 470"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm sm:text-base md:text-lg font-semibold text-white">
            Axciller Graphics
          </span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-5 xl:space-x-8 text-sm md:text-base font-medium">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200"
          >
            About me
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-gray-200 cursor-pointer transition-colors duration-200"
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-200 text-sm font-semibold cursor-pointer transition-colors duration-200"
          >
            Contact me
          </ScrollLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center space-y-4 mt-4 pb-4 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white hover:text-gray-200 cursor-pointer text-sm sm:text-base transition-colors duration-200"
          onClick={toggleMenu}
        >
          About me
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white hover:text-gray-200 cursor-pointer text-sm sm:text-base transition-colors duration-200"
          onClick={toggleMenu}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white hover:text-gray-200 cursor-pointer text-sm sm:text-base transition-colors duration-200"
          onClick={toggleMenu}
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-200 text-sm font-semibold cursor-pointer transition-colors duration-200"
          onClick={toggleMenu}
        >
          Contact me
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
