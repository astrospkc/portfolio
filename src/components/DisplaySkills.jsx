import React, { useEffect, useState } from "react";

const DisplaySkills = () => {
  const skills = [
    "FullStack Developer",
    "Blog Writer (Technical)",
    "Blog Writer (Non-Technical)",
    "Sketch Artist",
  ];

  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showAll) {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setCurrentSkill(skills[(index + 1) % skills.length]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [index, showAll, skills]);
  const handleShowAll = () => {
    setShowAll(true);
    setCurrentSkill(skills.join(","));
  };

  return (
    <div className="flex flex-col items-center mx-6">
      <h1 className="text-lg md:text-2xl font-bold text-white overflow-hidden whitespace-nowrap">
        <span className={`inline-block animate-slide`}>{currentSkill}</span>
      </h1>
      {/* {!showAll && (
        <button
          onClick={handleShowAll}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition"
        >
          Show All Skills
        </button>
      )} */}
    </div>
  );
};

export default DisplaySkills;
