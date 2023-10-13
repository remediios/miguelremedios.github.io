import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import heroimage from "../../images/remedios.png";
import HeroAnimation from "./HeroAnimation";

function Hero() {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-white via-white to-gray-800"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
          <div className="flex-1">
            <h4 className="text-4xl sm:text-4xl font-medium text-black">
              Hi there! I'm
            </h4>
            <h2 className="text-4xl sm:text-7xl font-bold text-black">
              Miguel Remédios
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I am a software engineer with expertise in machine learning. I
              thrive on solving complex problems and excel in collaborative
              environments. My passion for learning and problem-solving drives
              my commitment to delivering exceptional results.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Contact me
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={heroimage}
              alt="miguelremedios"
              className="rounded-full shadow mx-auto w-1/2 md:w-2/3 h-auto"
            />
          </div>
          <HeroAnimation />
        </div>
      </div>
    </>
  );
}

export default Hero;
