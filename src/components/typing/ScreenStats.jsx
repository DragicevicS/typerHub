import { useEffect } from "react";
import { Link } from "react-router-dom";
import lessonText from "../../data/lessonText";
import PropTypes from "prop-types";

const ScreenStats = ({
  difficulty,
  lesson,
  levelCounter,
  accuracyCounter,
  text,
  speed,
  userData,
  setUserData,
}) => {
  const nextTextExists =
    lessonText[difficulty][lesson][levelCounter] !== undefined;
  const accPercent = Math.round((accuracyCounter * 100) / text.length);

  const handleLessonCompletion = () => {
    if (userData.completion.lessons[difficulty][lesson - 1]) return;
    const updatedCompletion = { ...userData.completion };
    const currentDifficulty = [...updatedCompletion.lessons[difficulty]];
    currentDifficulty[lesson - 1] = true;
    updatedCompletion.lessons[difficulty] = currentDifficulty;
    const updatedUserData = {
      ...userData,
      completion: updatedCompletion,
    };
    setUserData(updatedUserData);

    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  useEffect(() => {
    if (!nextTextExists && speed === null) {
      handleLessonCompletion();
    }
  }, [nextTextExists, speed]);

  return (
    <div className="flex flex-col gap-5 h-full justify-center items-center">
      <h3 className="text-3xl font-bold">
        {accPercent < 85 && (
          <>
            Good<span className="text-blue-500">!</span>
          </>
        )}
        {accPercent >= 85 && accPercent < 90 && (
          <>
            Nice <span className="text-blue-500">work</span>!
          </>
        )}
        {accPercent >= 90 && accPercent < 95 && (
          <>
            Great <span className="text-blue-500">job</span>!
          </>
        )}
        {accPercent >= 95 && (
          <>
            Excellent<span className="text-blue-500">!</span>
          </>
        )}
      </h3>

      <div className="flex flex-col gap-3 px-20 py-10 border-2 rounded-sm text-lg">
        <div className="flex gap-1">
          <img
            src="../../../images/bullseye.svg"
            alt="Bullseye arrow"
            className="w-6"
          />
          Accuracy : {accPercent}% ({accuracyCounter}/{text.length} letters)
        </div>
        <div className="flex justify-center">
          <img
            src={
              accPercent >= 85
                ? "../../../images/star.png"
                : "../../../images/star-outline.svg"
            }
            alt="Star"
            className="w-10"
          />
          <img
            src={
              accPercent >= 90
                ? "../../../images/star.png"
                : "../../../images/star-outline.svg"
            }
            alt="Star"
            className="w-10"
          />
          <img
            src={
              accPercent >= 95
                ? "../../../images/star.png"
                : "../../../images/star-outline.svg"
            }
            alt="Star"
            className="w-10"
          />
        </div>
        <hr />
        <div className="flex gap-1">
          <img
            src="../../../images/lightning-bolt.svg"
            alt="Lightning bolt"
            className="w-6"
          />
          Speed : {speed} WPM
        </div>
        {nextTextExists ? (
          <Link
            to={`/typing/${difficulty}/${lesson}/${levelCounter + 1}`}
            className="text-center mt-2"
          >
            <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500">
              Next
            </button>
          </Link>
        ) : (
          <Link to="/" className="text-center mt-2">
            <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500">
              Finish Lesson
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

ScreenStats.propTypes = {
  difficulty: PropTypes.string.isRequired,
  lesson: PropTypes.string.isRequired,
  levelCounter: PropTypes.number.isRequired,
  accuracyCounter: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default ScreenStats;
