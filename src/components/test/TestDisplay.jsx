import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TestDisplay = ({ title, difficulty, userData }) => {
  const isCompleted = userData.completion.tests[difficulty];
  return (
    <div
      className={`flex items-center justify-between gap-1 w-full px-3 py-2 border-2 rounded-md ${
        isCompleted ? "border-green-200 opacity-[0.85]" : "border-blue-500"
      } animate-fadeIn`}
    >
      <div>
        <div className="flex gap-3 p-1">
          <h3 className="text-xl font-extrabold">{title}</h3>
          {!isCompleted ? null : (
            <img
              src="../../../images/check.png"
              alt="Checkmark"
              title="Completed"
              className="w-7 h-7"
            />
          )}
        </div>
        <hr />
        <div className="flex gap-3 w-full p-1 text-blue-500">
          <span>Best speed: {userData.speed.tests[difficulty]} WPM</span>
          <span>Best accuracy: {userData.accuracy.tests[difficulty]}%</span>
        </div>
      </div>
      <Link to={`/test/${difficulty}`}>
        <button
          type="button"
          className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500"
        >
          {!isCompleted ? <>Start</> : <>Redo</>}
        </button>
      </Link>
    </div>
  );
};

TestDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
};

export default TestDisplay;
