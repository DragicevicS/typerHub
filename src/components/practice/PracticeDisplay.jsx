import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import practiceText from "../../data/practiceText";

const PracticeDisplay = ({ title, difficulty, userData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      <div className="flex flex-col gap-1 w-5/6">
        <h3 className="text-xl font-extrabold">
          {title} |{" "}
          <span className="text-blue-500" title="Completed">
            {countProgress(userData.completion.practice[difficulty])}/
            {userData.completion.practice[difficulty].length}
          </span>
        </h3>
        <hr className="w-2/3" />
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
                  onChange={() => setSelectedIndex(index + 1)}
                />
                <label
                  htmlFor={`${title}-${index + 1}`}
                  className={`inline-block px-2 mt-1 bg-gray-900 text-xl border-2 border-blue-500 rounded-sm hover:cursor-pointer hover:border-blue-50 ease-in-out duration-500 ${
                    userData.completion.practice[difficulty][index] &&
                    "border-green-200 hover:border-green-200 opacity-70"
                  }`}
                >
                  {index + 1}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {selectedIndex > 0 ? (
        <Link to={`/practice/${difficulty}/${selectedIndex}`}>
          <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500">
            Practice
          </button>
        </Link>
      ) : (
        <button
          className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 opacity-50 cursor-default"
          title="Please select text for practice"
        >
          Practice
        </button>
      )}
    </div>
  );
};

PracticeDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
};

export default PracticeDisplay;
