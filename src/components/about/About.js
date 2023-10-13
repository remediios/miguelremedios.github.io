import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a highly skilled Software Engineer with an in-depth understanding
          of Artificial Intelligence (AI) and Machine Learning (ML). My career
          has been defined by a strong commitment to innovation and a proven
          ability to deliver exceptional results. With a keen eye for detail and
          a creative problem-solving mindset, I excel in collaborative
          environments, making me an invaluable asset to any team. I'm adept at
          harnessing the power of AI and ML to address complex, real-world
          challenges, and my relentless pursuit of knowledge and
          self-improvement drives me to stay at the forefront of technological
          advancements.
        </p>

        <br />

        <p className="text-xl">
          My adaptability, excellent communication skills, and a strong sense of
          responsibility enable me to lead and contribute effectively in
          projects. As a forward-thinking and results-oriented professional, I'm
          ready to make a significant impact in any endeavor I undertake.
        </p>
      </div>
    </div>
  );
}

export default About;
