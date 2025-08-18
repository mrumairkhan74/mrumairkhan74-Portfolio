import React from 'react'
import { FaCheck } from "react-icons/fa";
const Education = () => {
    const education = [
       {
      degree: "BS Software Engineering",
      institute: "Virtual University Of Pakistan (Jand Campus)",
      location: "Lahore (main campus)",
      duration: "2020 – 2025",
      highlights: [
        "Final Year Project: Short Course Online Learning Platform",
        "Relevant Courses: Database Systems, Web Development, Software Engineering",
        "Graduated with strong focus on full-stack development"
      ]
    },
    ]

    return (
        <div
            className='flex flex-col items-center justify-center py-16 px-6 bg-sky-100 rounded-md'
            id="experience"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <h2 className="text-3xl font-bold mb-10 text-sky-600 font-[Goldman] tracking-[2px]">Education</h2>
            <div className="w-full max-w-4xl space-y-8">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-sm shadow-indigo-500 rounded-2xl p-6 hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-sky-600 font-[Poppins]">{edu.degree}</h3>
                        <p className="text-gray-500">
                            {edu.institute} – {edu.location}
                        </p>
                        <p className="text-sm text-gray-500 mb-3">{edu.duration}</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {edu.highlights.map((task, i) => (
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

export default Education
