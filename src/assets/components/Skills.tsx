import React from "react";
import { SiFlutter } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import ps from "../images/ps.png";
import ai from "../images/ai.png";
import id from "../images/id.png";
import xd from "../images/xd.png";
import pr from "../images/pr.png";
import ae from "../images/ae.png";
import ru from "../images/ru.png";
import figma from "../images/figma.png";

const Skills: React.FC = () => {
  return (
    <div className="bg-gray-200 text-black py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold border-4 border-black inline-block px-4 py-2 mb-8">
          SKILLS
        </h2>

        {/* USING NOW */}
        <h3 className="text-lg font-semibold mb-4">USING NOW:</h3>

        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          <div className="text-center">
            <img src={ps} alt="Photoshop" className="h-12 mx-auto" />
            <p className="text-sm mt-2">Photoshop</p>
          </div>
          <div className="text-center">
            <img src={ai} alt="Illustrator" className="h-12 mx-auto" />
            <p className="text-sm mt-2">Illustrator</p>
          </div>
          <div className="text-center">
            <img src={id} alt="InDesign" className="h-12 mx-auto" />
            <p className="text-sm mt-2">InDesign</p>
          </div>
          <div className="text-center">
            <img src={xd} alt="XD" className="h-12 mx-auto" />
            <p className="text-sm mt-2">XD</p>
          </div>
          <div className="text-center">
            <img src={pr} alt="Premiere Pro" className="h-12 mx-auto" />
            <p className="text-sm mt-2">Premiere Pro</p>
          </div>
          <div className="text-center">
            <img src={ae} alt="After Effects" className="h-12 mx-auto" />
            <p className="text-sm mt-2">After Effects</p>
          </div>
          <div className="text-center">
            <img src={ru} alt="Rush" className="h-12 mx-auto" />
            <p className="text-sm mt-2">Rush</p>
          </div>
          <div className="text-center">
            <img src={figma} alt="Figma" className="h-12 mx-auto" />
            <p className="text-sm mt-2">Figma</p>
          </div>
        </div>

        {/* LEARNING */}
        <h3 className="text-lg font-semibold mt-8 mb-4">LEARNING:</h3>
        <div className="flex justify-center gap-16">
          <div className="text-center">
            <FaCode className="text-5xl mx-auto text-gray-800" />
            <p className="text-sm mt-2">Code</p>
          </div>
          <div className="text-center">
            <SiFlutter className="text-5xl mx-auto text-blue-500" />
            <p className="text-sm mt-2">Flutter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
