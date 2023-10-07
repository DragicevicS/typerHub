import { Link } from "react-router-dom";
import lessonText from "../../data/lessonText";
import PropTypes from "prop-types";

const LessonDisplay = ({
  title,
  difficulty,
  index,
  userData,
  resetTempData,
}) => {
  const isCompleted = userData.completion.lessons[difficulty][index];

  return (
    <div
      className={`flex flex-col w-full p-1 border-2 ${
        isCompleted ? "border-green-200 opacity-[0.85]" : "border-blue-500"
      } rounded-md`}
    >
      <div className="flex justify-between items-center w-full p-3">
        <div className="flex flex-col gap-1">
          <h3
            className={`font-extrabold text-lg ${
              isCompleted ? "line-through" : ""
            }`}
          >
            {title}
          </h3>
          <hr />
          <div className="flex gap-1 text-blue-500">
            <span>
              Avg speed: {userData.speed.lessons[difficulty][index]} WPM |{" "}
            </span>
            <span>
              Avg acc: {userData.accuracy.lessons[difficulty][index]}% |{" "}
            </span>
            <span className="flex items-center gap-1">
              {userData.stars.lessons[difficulty][index]}/
              {lessonText[difficulty][index + 1].length * 3}
              <img
                src="../../../images/star.png"
                alt="Star"
                title="Accuracy star"
                className="w-6 h-6"
              />
            </span>
          </div>
        </div>
        <Link
          to={`/lesson/${difficulty}/${index + 1}/1`}
          onClick={resetTempData}
        >
          <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500">
            {!isCompleted ? <>Start</> : <>Redo</>}
          </button>
        </Link>
      </div>
    </div>
  );
};

LessonDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  userData: PropTypes.object.isRequired,
  resetTempData: PropTypes.func.isRequired,
};

export default LessonDisplay;
