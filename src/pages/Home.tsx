import type { FC } from "react";
import Navbar from "../assets/components/Navbar.tsx";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home: FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <style>
        {`
          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
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
            animation: fadeIn 1.2s ease forwards;
          }

          .slide-up {
            transform: translateY(30px);
            opacity: 0;
            animation: slideUp 1.2s ease forwards;
          }

          .hover-scale {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .hover-scale:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .bg-overlay {
            background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7));
          }

          .social-icon {
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .social-icon:hover {
            transform: translateY(-4px);
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-64px)] flex flex-col md:flex-row overflow-hidden z-10">
        {/* Diagonal Section */}
        <div className="relative flex-1 flex flex-col justify-center items-center p-8 md:p-16 text-black bg-gradient-to-r from-white to-gray-100 md:z-50 z-10 clip-diagonal shadow-2xl">
          <h2 className="text-xl md:text-2xl font-semibold fade-in">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-3 fade-in tracking-tight">
            Abdurehim Zakir
          </h1>
          <p className="text-gray-600 mt-4 text-lg md:text-xl fade-in max-w-md text-center">
            Creative Graphic Designer & Video Editor
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-8 mt-8 text-3xl fade-in">
            <a
              href="https://t.me/justdoit_5"
              aria-label="Telegram"
              className="text-gray-600 hover:text-blue-500 social-icon"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com/justdoit_5.a/"
              aria-label="Instagram"
              className="text-gray-600 hover:text-pink-600 social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurehim-zakir-966529323/"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700 social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-md:hidden md:flex flex-1 flex-col justify-center items-center bg-black bg-overlay relative">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
            alt="Creative Design"
            className="w-full max-w-[500px] h-auto hover-scale rounded-lg shadow-lg"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white slide-up mt-8 tracking-wide">
            Axciller Graphics
          </h2>
        </div>
      </div>

      {/* Project Description Section */}
      <div className="relative py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Mobile Image Background */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 md:hidden pointer-events-none z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80"
            alt="Creative Design Mobile"
            className="w-full max-w-[300px] h-auto rounded-lg"
          />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12 px-6 md:px-8 relative z-10">
          {/* Text Content */}
          <div className="text-center md:text-left flex-1 px-4 md:px-0">
            <h3 className="py-6 text-2xl font-bold tracking-widest text-white uppercase slide-up">
              Visual Impact Project
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl text-base md:text-lg mb-8 slide-up">
              This project showcases a fusion of graphic design and video
              editing to craft a compelling visual identity for a modern brand.
              I created a cohesive set of promotional materials, including
              vibrant social media graphics, posters, and branded content.
              Additionally, I produced and edited engaging promotional videos
              and animated clips to amplify the brand's presence across digital
              platforms. The focus was on delivering bold, creative, and
              consistent visuals that captivate audiences and tell a powerful
              story.
            </p>
          </div>

          {/* Image Foreground on Desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=450&q=80"
              alt="Creative Design Desktop"
              className="w-full max-w-[450px] h-auto rounded-lg hover-scale shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
