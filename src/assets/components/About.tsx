import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-200 text-black py-16">
      <div className="max-w-3xl mx-auto pr-2.5 text-center">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold border-2 border-black px-6 py-1 inline-block mb-6  tracking-wider bg-white">
          ABOUT ME
        </h2>

        {/* Paragraph */}
        <p className="text-sm leading-relaxed mb-8  max-w-lg mx-auto">
          Hi, I’m Abdurehim Zakir. I’m a graphic designer and video editor.{" "}
          <br />
          I create logos, motion graphics, videos, and designs that help brands
          <br />
          stand out. I focus on details and current trends to make your ideas
          look great. Let’s work together to bring your vision to life!
        </p>

        {/* Divider */}
        <div className="flex justify-center my-6">
          <div className="border-t border-black w-12 mx-2" />
          <span className="text-xs font-bold  tracking-widest uppercase">
            | EXPLORE |
          </span>
          <div className="border-t border-black w-12 mx-2" />
        </div>

        {/* Sections */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-12 space-y-8 md:space-y-0 md:space-x-16">
          <div className="max-w-xs text-left">
            <h3 className="text-base font-bold tracking-wide mb-2 uppercase">
              DESIGN
            </h3>
            <p className="text-xs text-gray-700">Branding & Motion Graphics</p>
            <p className="text-xs text-gray-700">
              I create bold, clean, and trendy designs
            </p>
          </div>

          <div className="max-w-xs text-left">
            <h3 className="text-base font-bold tracking-wide mb-2 uppercase">
              VIDEO EDITING
            </h3>
            <p className=" text-xs text-gray-700">Branding & Motion Graphics</p>
            <p className="text-xs text-gray-700">
              I create engaging motion graphics videos
            </p>
          </div>

          <div className="max-w-xs text-left">
            <h3 className="text-base font-bold tracking-wide mb-2 uppercase">
              BRANDING & MOTION GRAPHICS
            </h3>
            <p className="text-xs text-gray-700">
              Clean, creative, and consistent visuals that capture attention and
              tell a story.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="flex justify-center mt-12">
          <div className="border-t border-black w-12 mx-2" />
          <span className="text-xs  font-semibold tracking-widest uppercase ">
            ▼▼▼
          </span>
          <div className="border-t border-black w-12 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default About;
