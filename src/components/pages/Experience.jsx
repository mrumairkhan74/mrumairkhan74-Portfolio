import React from 'react'
import { FaCheck } from "react-icons/fa";
const Experience = () => {
    const experiences = [
        {
            role: "Web Developer Intern (Remote)",
            company: "Developer's Hub Corporation",
            location: "Rawalpindi",
            duration: "Sep 2024 – Oct 2024",
            tasks: [
                "Built REST APIs for e-commerce features (cart, orders, authentication).",
                "Worked with React & Redux Toolkit for frontend state management.",
                "Integrated Cloudinary for image uploads."
            ]
        },
        {
            role: "Full Stack Developer (Freelance)",
            company: "Self-Employed",
            location: "Remote",
            duration: "2023 – Present",
            tasks: [
                "Created responsive websites using React, Tailwind, and Node.js.",
                "Developed reusable components and optimized UI performance.",
                "Worked closely with clients to gather requirements."
            ]
        }
    ]

    return (
        <div
            className='flex flex-col items-center justify-center py-16 px-6 bg-sky-100 rounded-md'
            id="experience"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <h2 className="text-3xl font-bold mb-10 text-sky-600 font-[Goldman] tracking-[2px]">Experience</h2>
            <div className="w-full max-w-4xl space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-lg shadow-indigo-500 transition"
                    >
                        <h3 className="text-xl font-semibold text-sky-600 font-[Poppins]">{exp.role}</h3>
                        <p className="text-gray-500">
                            {exp.company} – {exp.location}
                        </p>
                        <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {exp.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <FaCheck className="text-sky-500 mt-1" />
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
