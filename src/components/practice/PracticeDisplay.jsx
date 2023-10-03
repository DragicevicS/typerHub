import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PracticeDisplay = ({ title, difficulty, userData }) => {
  const index = 1;

  const countProgress = (arr) => {
    let count = 0;
    for (const item of arr) {
      if (item === true) {
        count++;
      }
    }
    return count;
  };
  return (
    <div className="flex items-center justify-between gap-1 w-full px-3 py-2 border-2 border-blue-500">
      <div>
        <h3 className="text-xl font-extrabold">
          {title} | {countProgress(userData.completion.practice[difficulty])}/
          {userData.completion.practice[difficulty].length}
        </h3>
      </div>
      <Link to={`/practice/${difficulty}/${index}`}>
        <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500">
          Practice
        </button>
      </Link>
    </div>
  );
};

PracticeDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
};

export default PracticeDisplay;
