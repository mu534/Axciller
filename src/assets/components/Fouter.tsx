import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 text-center space-y-4">
      {/* Back to Top */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer"
      >
        <p className="text-sm">↑</p>
        <p className="text-sm">BACK TO TOP</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 text-xl">
        <a
          href="https://web.facebook.com/justdoit5a"
          aria-label="Facebook"
          className="hover:text-gray-400"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/abdurehim-zakir-966529323/"
          aria-label="LinkedIn"
          className="hover:text-gray-400"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/justdoit_5.a?utm_source=ig_web_button_share_sheet&igsh=ZHdnOHo3M3lnMHBv"
          aria-label="Instagram"
          className="hover:text-gray-400"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:abdurehimzakir94@gmail.com"
          aria-label="Email"
          className="hover:text-gray-400"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs">
        ©2025 <span className="font-semibold">Abdurehim Zakir</span>. All Rights
        Reserved.
      </p>

      {/* Powered by mudasir najimudin */}
      <div className="flex items-center justify-center space-x-2">
        <p className="text-sm">Powered by</p>
        <a
          href="https://myportofolio-ten-eta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Logo" className="h-10 w-auto hover:opacity-80" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
