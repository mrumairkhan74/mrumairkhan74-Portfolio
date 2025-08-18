import React from 'react'
import { FaCheck } from "react-icons/fa";

const Certificate = () => {
  const certificates = [
    {
      title: "MERN Stack Web Development",
      institute: "MindLuster",
      location: "Online",
      duration: "2025",
      image: "./images/Mindluster.jpg", // put your certificate image here
      highlights: [
        "Built full-stack projects with React, Node.js, Express, and MongoDB",
        "Learned authentication, REST APIs, and deployment best practices",
        "Hands-on training with real-world projects"
      ]
    },
    {
      title: "Full Stack Development",
      institute: "Developer's Hub Corporation",
      location: "Online",
      duration: "2024",
      image: "./images/intership.jpg",
      highlights: [
        "Mastered HTML, CSS, and JavaScript fundamentals",
        "Built responsive web designs with Flexbox and Grid",
        "Completed certification projects for real practice"
      ]
    }
  ]

  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-6 bg-sky-100 rounded-md"
      id="certificates"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h2 className="text-3xl font-bold mb-10 text-sky-600 font-[Goldman] tracking-[2px]">
        Certificates
      </h2>

      <div className="w-full max-w-5xl space-y-8">
        {certificates.map((ctf, index) => (
          <div
            key={index}
            className="bg-white shadow-sm shadow-indigo-500 rounded-2xl p-6 hover:shadow-lg transition flex flex-col md:flex-row gap-6"
          >
            {/* Certificate Image */}
            <div className="md:w-1/3 flex items-center justify-center">
              <img
                src={ctf.image}
                alt={`${ctf.title} Certificate`}
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>

            {/* Certificate Details */}
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-sky-600 font-[Poppins]">
                {ctf.title}
              </h3>
              <p className="text-gray-500">
                {ctf.institute} – {ctf.location}
              </p>
              <p className="text-sm text-gray-500 mb-3">{ctf.duration}</p>

              <ul className="space-y-2">
                {ctf.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <FaCheck className="text-sky-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate
