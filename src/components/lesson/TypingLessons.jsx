import LessonDisplay from "./LessonDisplay";
import PropTypes from "prop-types";

const TypingLessons = ({ userData, resetTempData }) => {
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
        <div className="flex gap-3">
          <h3 className="text-xl font-extrabold">Beginner</h3>
          {userData.completion.lessons.beginner.includes(false) ? null : (
            <img
              src="../../../images/check.png"
              alt="Checkmark"
              title="Completed"
            />
          )}
        </div>
        {beginnerLessons.map((title, index) => (
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
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <div className="flex gap-3">
          <h3 className="text-xl font-extrabold">Intermediate</h3>
          {userData.completion.lessons.intermediate.includes(false) ? null : (
            <img
              src="../../../images/check.png"
              alt="Check mark"
              title="Completed"
            />
          )}
        </div>
        {intermediateLessons.map((title, index) => (
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
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <div className="flex gap-3">
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
              />
            </>
          )}
        </div>
        {advancedLessons.map((title, index) => (
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
    </>
  );
};

TypingLessons.propTypes = {
  userData: PropTypes.object.isRequired,
  resetTempData: PropTypes.func.isRequired,
};

export default TypingLessons;
