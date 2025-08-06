import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "../Project/Projects";

import '../../index.css'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left" data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="3000">
          <h1 className="text-4xl md:text-5xl font-extrabold font-[Goldman] text-indigo-500 mb-4 leading-tight">
            Full-Stack Web Solutions<br />
            for Modern Businesses
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Specialized in building scalable, secure, and responsive web applications.
            From idea to deployment — optimized for performance and user experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="/projects"
              title="Explore My Work"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm hover:bg-indigo-700 transition"
            >
              Explore Work
            </Link>
            <Link
              to="/contact"
              title="Contact Me"
              className="border stylish-btn border-indigo-600 text-indigo-600 px-6 py-3 rounded-md text-sm hover:text-white transition"
            >
              Get in Touch
            </Link>
            <a
              href="https://drive.google.com/file/d/1-G0I-m4EhfM-fWBT8pK0MAm5dCgw2v6I/view"
              className="stylish-btn border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md text-sm transition-all duration-300 ease-in-out hover:text-white"
              target="_blank"
              title="Resume/CV"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex-1"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="3000">
          <img loading="lazy"
            src="https://cdni.iconscout.com/illustration/premium/thumb/professional-software-developer-5529997-4609273.png"
            alt="Professional Developer"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-12 bg-gray-50" data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="3500">
        <h2 className="text-4xl font-semibold font-[Goldman] tracking-[3px] uppercase text-indigo-500 mb-8 text-center">
          Core Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
          <div className="bg-white shadow-md p-6 rounded-lg" data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <h3 className="font-bold text-lg mb-2">Custom Web Development</h3>
            <p className="text-sm text-gray-600">
              Fully tailored applications using React, Node.js, MongoDB, and more.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg" data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="3000">
            <h3 className="font-bold text-lg mb-2">UI/UX Integration</h3>
            <p className="text-sm text-gray-600">
              Clean, responsive, and user-centric design systems powered by Tailwind CSS and Framer Motion.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg" data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="3000">
            <h3 className="font-bold text-lg mb-2">Deployment & Optimization</h3>
            <p className="text-sm text-gray-600">
              Fast, secure, and SEO-friendly deployments on Vercel, Render, DigitalOcean.
            </p>
          </div>
        </div>
      </section>

      {/* About Component Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000">
        <About />
      </section>
      <section className="max-w-7xl mx-auto items-center flex flex-col px-6 md:px-20 py-16" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000">
        <Projects />
        <Link
          to="/contact"
          className="stylish-btn border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md text-sm transition-all duration-300 ease-in-out hover:text-white"
        >
          View More
        </Link>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3000">
        <Skills />
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16" data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="3000">
        <Contact />
      </section>
 
    </div>
  );
};

export default Home;
