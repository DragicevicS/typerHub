import LessonDisplay from "./LessonDisplay";
import PropTypes from "prop-types";

const TypingLessons = ({ userData }) => {
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
        <h3 className="text-xl font-extrabold">Beginner</h3>
        {beginnerLessons.map((title, index) => (
          <LessonDisplay
            key={index}
            title={title}
            difficulty="beginner"
            index={index}
            userData={userData}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Intermediate</h3>
        {intermediateLessons.map((title, index) => (
          <LessonDisplay
            key={index}
            title={title}
            difficulty="intermediate"
            index={index}
            userData={userData}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Advanced</h3>
        {advancedLessons.map((title, index) => (
          <LessonDisplay
            key={index}
            title={title}
            difficulty="advanced"
            index={index}
            userData={userData}
          />
        ))}
      </div>
    </>
  );
};

TypingLessons.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default TypingLessons;
