import React from "react";
const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "REST APIs",
]
const About = () => {
  return (
    <section
      className="w-full bg-sky-100 py-16 px-4 sm:px-8 md:px-16 rounded-md"
      id="about"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="3000"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Goldman] tracking-[3px] uppercase font-bold mb-6 text-sky-700">
          About Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide">
          Hi! I'm{" "}
          <span className="text-sky-600 font-semibold">Umair Khan</span>, a
          dedicated <strong className="text-sky-600">MERN Stack Developer</strong> who loves crafting
          modern web applications with clean and scalable code.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          I specialize in building robust full-stack apps using
          <span className="font-[Goldman] tracking-[2px] text-sky-700"> MongoDB</span>,
          <span className="font-[Goldman] tracking-[2px] text-sky-700"> MySQL</span>,
          <span className="font-[Goldman] tracking-[2px] text-sky-700"> Postgre</span>,
          <span className="font-[Goldman] tracking-[2px] text-sky-700"> Express.js</span>,
          <span className="font-[Goldman] tracking-[2px] text-sky-700"> React</span>, and
          <span className="font-[Goldman] tracking-[2px] text-sky-700"> Node.js</span>. Whether it's developing
          efficient REST APIs, designing sleek UIs, or managing databases, I
          strive for both performance and user experience.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          With <span className="font-semibold text-sky-700">3 years of freelancing experience</span>,
          I've collaborated with clients worldwide, delivering web solutions that balance functionality and design.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          I'm always excited to learn and grow — constantly exploring new tech,
          contributing to team projects, and keeping up with the latest trends
          in JavaScript and web development.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-sky-200 font-[Goldman] tracking-[2px] text-sky-700 rounded-full shadow-sm text-sm sm:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
