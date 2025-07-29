import React from "react";
import "../styles/styles.css";

const Loading = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent flex items-center justify-center">
      <h1 className="text-blue-500 tracking-[2px] font-bold text-2xl">UK</h1>
      <span className="absolute spin2 rounded-full w-30 h-30 border-[6px] border-t-blue-500 border-r-blue-600  border-l-0 border-b-0"></span>
      <span className="absolute reserve rounded-full w-18 h-18 border-[6px] border-b-blue-500 border-l-blue-600 border-t-0 border-r-0"></span>
    </div>
  );
};

export default Loading;
