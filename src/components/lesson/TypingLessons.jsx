import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LessonDisplay from "./LessonDisplay";

const TypingLessons = ({ userData, resetTempData }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleAccordion = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  useEffect(() => {
    if (userData.completion.lessons.advanced.includes(false)) {
      setExpandedSection("advanced");
    }
    if (userData.completion.lessons.intermediate.includes(false)) {
      setExpandedSection("intermediate");
    }
    if (userData.completion.lessons.beginner.includes(false)) {
      setExpandedSection("beginner");
    }
  }, [userData]);

  const beginnerLessons = [
    "Middle Row",
    "Upper Row",
    "Lower Row",
    "Beginner Recap",
  ];
  const intermediateLessons = [
    "Capitalization",
    "Punctuation",
    "Short Paragraphs",
    "Intermediate Recap",
  ];

  const advancedLessons = [
    "Numbers",
    "Symbols",
    "Accuracy Focus",
    "Advanced Recap",
  ];

  return (
    <>
      <h2 className="font-cursive text-2xl">Typing Lessons</h2>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <div className="flex items-center gap-3">
          {userData.completion.lessons.beginner.includes(false) ? (
            <h3 className="text-xl font-extrabold">Beginner</h3>
          ) : (
            <>
              <h3 className="text-xl font-extrabold text-green-200">
                Beginner
              </h3>
              <img
                src="../../../images/check.png"
                alt="Checkmark"
                title="Completed"
                className="w-7 h-7"
              />
            </>
          )}
          <img
            src="../../../images/drop-arrow.png"
            alt="Dropdown arrow"
            className={`w-5 h-3 ml-auto cursor-pointer rotate-180 duration-500 ${
              expandedSection === "beginner" && "rotate-0"
            }`}
            onClick={() => toggleAccordion("beginner")}
          />
        </div>
        <div
          className={`flex flex-col gap-3 overflow-hidden ease-out duration-700 ${
            expandedSection === "beginner" ? "max-h-full" : "max-h-0"
          }`}
        >
          {expandedSection === "beginner" &&
            beginnerLessons.map((title, index) => (
              <LessonDisplay
                key={index}
                title={title}
                difficulty="beginner"
                index={index}
                userData={userData}
                resetTempData={resetTempData}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <div className="flex items-center gap-3">
          {userData.completion.lessons.intermediate.includes(false) ? (
            <h3 className="text-xl font-extrabold">Intermediate</h3>
          ) : (
            <>
              <h3 className="text-xl font-extrabold text-green-200">
                Intermediate
              </h3>
              <img
                src="../../../images/check.png"
                alt="Checkmark"
                title="Completed"
                className="w-7 h-7"
              />
            </>
          )}
          <img
            src="../../../images/drop-arrow.png"
            alt="Dropdown arrow"
            className={`w-5 h-3 ml-auto cursor-pointer rotate-180 duration-500 ${
              expandedSection === "intermediate" && "rotate-0"
            }`}
            onClick={() => toggleAccordion("intermediate")}
          />
        </div>
        <div
          className={`flex flex-col gap-3 overflow-hidden ease-out duration-700 ${
            expandedSection === "intermediate" ? "max-h-full" : "max-h-0"
          }`}
        >
          {expandedSection === "intermediate" &&
            intermediateLessons.map((title, index) => (
              <LessonDisplay
                key={index}
                title={title}
                difficulty="intermediate"
                index={index}
                userData={userData}
                resetTempData={resetTempData}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <div className="flex items-center gap-3">
          {userData.completion.lessons.advanced.includes(false) ? (
            <h3 className="text-xl font-extrabold">Advanced</h3>
          ) : (
            <>
              <h3 className="text-xl font-extrabold text-green-200">
                Advanced
              </h3>
              <img
                src="../../../images/check.png"
                alt="Checkmark"
                title="Completed"
                className="w-7 h-7"
              />
            </>
          )}
          <img
            src="../../../images/drop-arrow.png"
            alt="Dropdown arrow"
            className={`w-5 h-3 ml-auto cursor-pointer rotate-180 duration-500 ${
              expandedSection === "advanced" && "rotate-0"
            }`}
            onClick={() => toggleAccordion("advanced")}
          />
        </div>
        <div
          className={`flex flex-col gap-3 overflow-hidden ease-out duration-700 ${
            expandedSection === "advanced" ? "max-h-full" : "max-h-0"
          }`}
        >
          {expandedSection === "advanced" &&
            advancedLessons.map((title, index) => (
              <LessonDisplay
                key={index}
                title={title}
                difficulty="advanced"
                index={index}
                userData={userData}
                resetTempData={resetTempData}
              />
            ))}
        </div>
      </div>
    </>
  );
};

TypingLessons.propTypes = {
  userData: PropTypes.object.isRequired,
  resetTempData: PropTypes.func.isRequired,
};

export default TypingLessons;
