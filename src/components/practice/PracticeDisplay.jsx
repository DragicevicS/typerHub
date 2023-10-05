import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import practiceText from "../../data/practiceText";

const PracticeDisplay = ({ title, difficulty, userData }) => {
  let index = 1;

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
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-extrabold">
          {title} |{" "}
          <span className="text-blue-500" title="Completed">
            {countProgress(userData.completion.practice[difficulty])}/
            {userData.completion.practice[difficulty].length}
          </span>
        </h3>
        <hr />
        <div className="flex gap-1">
          {practiceText[difficulty].map((_, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name={`${title}-text`}
                  id={`${title}-${index + 1}`}
                  value={`${index + 1}`}
                  className="opacity-0 w-0 fixed"
                />
                <label
                  htmlFor={`${title}-${index + 1}`}
                  className={`inline-block px-2 bg-gray-900 text-xl border-2 border-blue-500 rounded-sm hover:cursor-pointer hover:border-blue-50 ease-in-out duration-500`}
                >
                  {index + 1}
                </label>
              </div>
            );
          })}
        </div>
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
