import React from "react";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    image: "./images/BugTrackerSystem.jpg",
    title: "Bug Tracker System",
    description: "A collaborative bug tracking platform...",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "Tailwind CSS", "Vite", "JWT", "bcrypt"],
    demoLink: "https://trackmantis.vercel.app/",
    codeLink: "https://github.com/mrumairkhan74/TrackMantis.git",
  },
  {
    image: "./images/We-Chat.jpg",
    title: "We Chat",
    description: "A real-time chat application...",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS", "Vite", "bcrypt"],
    demoLink: "https://we-chat-alpha-ten.vercel.app/",
    codeLink: "https://github.com/mrumairkhan74/We-ChaT.git",
  },
  {
    image: "./images/c-news.jpg",
    title: "C News",
    description: "A full-stack news publishing platform...",
    tech: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS", "Vite", "bcrypt"],
    demoLink: "https://c-news-frontend.vercel.app/",
    codeLink: "https://github.com/mrumairkhan74/c-news-frontend.git",
  },
  {
    image: "./images/GeariX.jpg",
    title: "GeariX",
    description: "An automotive product platform...",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "React.js", "Cloudinary", "bcrypt"],
    demoLink: "https://gearix.vercel.app/",
    codeLink: "https://github.com/mrumairkhan74/Gearix.git",
  },
  {
    image: "./images/NotePad.jpg",
    title: "NotePad",
    description: "A minimal task manager app...",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    demoLink: "https://notepad-l65z.onrender.com/",
    codeLink: "https://github.com/mrumairkhan74/NotePad.git",
  },
  {
    image: "./images/aplusmarketing.jpg",
    title: "Aplus Marketing",
    description: "A real estate platform...",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "bcrypt"],
    demoLink: "https://aplusmarketing.vercel.app/",
    codeLink: "https://github.com/mrumairkhan74/Aplusmarketing.git",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50" id="projects" data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="3000">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="3000">
          {projectList.map((project, index) => {
            let colSpanClass = "col-span-1";

            if (index === 0 || index === 3 || index === 4) {
              colSpanClass = "md:col-span-2";
            }

            return (
              <div key={index} className={colSpanClass} data-aos="flip-right"
              data-aos-easing="linear"
              data-aos-duration="3000">
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
