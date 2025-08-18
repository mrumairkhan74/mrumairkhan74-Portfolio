import React from "react";

const blogs = [
  {
    title: "HTML, CSS & JavaScript",
    desc: "Learn the building blocks of the web: structure with HTML, styling with CSS, and interactivity with JavaScript.",
  },
  {
    title: "Node.js",
    desc: "Understand server-side JavaScript with Node.js to build scalable backend applications.",
  },
  {
    title: "Databases (MongoDB, MySQL, PostgreSQL)",
    desc: "Explore different databases: NoSQL with MongoDB and relational databases like MySQL & PostgreSQL.",
  },
  {
    title: "React.js",
    desc: "Build dynamic, fast, and interactive user interfaces using React.js.",
  },
  {
    title: "Next.js",
    desc: "Learn Next.js for server-side rendering, API routes, and production-ready React apps.",
  },
];

const Blog = ({limit}) => {
     const displayedBlog = limit ? blogs.slice(0, limit) : blogs;
  return (
    <div
      id="blog"
      className="py-16 px-6 bg-gray-100 flex flex-col items-center"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-10">My Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {displayedBlog.map((blog, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-sm hover:shadow-indigo-500 transition duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-sky-600 mb-3">
              {blog.title}
            </h3>
            <p className="text-gray-600 flex-grow">{blog.desc}</p>
            <button title="read-more" className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-xl hover:bg-sky-600 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
