import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PracticeStats = ({
  difficulty,
  levelCounter,
  accuracyCounter,
  text,
  speed,
  userData,
  setUserData,
}) => {
  const accPercent = Math.round((accuracyCounter * 100) / text.length);

  const getStarImage = (acc) => {
    return acc
      ? "../../../images/star.png"
      : "../../../images/star-outline.svg";
  };

  const handlePracticeCompletion = () => {
    let newUserData = { ...userData };
    newUserData.completion.practice[difficulty][levelCounter - 1] = true;
    setUserData(newUserData);
  };

  useEffect(() => {
    if (speed > 0) {
      handlePracticeCompletion();
    }
  }, [speed]);

  const feedbackMessage = () => {
    if (accPercent < 85)
      return (
        <>
          Good<span className="text-blue-500">!</span>
        </>
      );
    if (accPercent < 90)
      return (
        <>
          Nice <span className="text-blue-500">work</span>!
        </>
      );
    if (accPercent < 95)
      return (
        <>
          Great <span className="text-blue-500">job</span>!
        </>
      );
    return (
      <>
        Excellent<span className="text-blue-500">!</span>
      </>
    );
  };

  return (
    <div className="flex flex-col gap-5 h-full justify-center items-center cursor-default animate-fadeIn">
      <h3 className="text-3xl font-bold">{feedbackMessage()}</h3>
      <div className="flex flex-col gap-3 px-10 px-20 py-10 border-2 rounded-sm text-lg">
        <div className="flex gap-1">
          <img
            src="../../../images/bullseye.svg"
            alt="Bullseye arrow"
            className="w-6 h-7"
          />
          Accuracy : {accPercent}% ({accuracyCounter}/{text.length} characters)
        </div>
        <div className="flex justify-center">
          <img
            src={getStarImage(accPercent >= 85)}
            alt="Star"
            className="w-10 h-10"
          />
          <img
            src={getStarImage(accPercent >= 90)}
            alt="Star"
            className="w-10 h-10"
          />
          <img
            src={getStarImage(accPercent >= 95)}
            alt="Star"
            className="w-10 h-10"
          />
        </div>
        <hr />
        <div className="flex gap-1">
          <img
            src="../../../images/lightning-bolt.svg"
            alt="Lightning bolt"
            className="w-6 h-7"
          />
          Speed : {speed} WPM
        </div>
        <div className="flex gap-3 justify-center mt-2">
          <button
            type="button"
            className="h-min min-w-[170px] px-5 py-1 font-cursive text-blue-100 bg-transparent border-2 border-transparent hover:border-blue-100 ease-in-out duration-500"
            onClick={() => location.reload()}
          >
            Redo
          </button>
          <Link to="/">
            <button
              type="button"
              className="h-min min-w-[170px] px-5 py-1 font-cursive text-blue-100 bg-gray-600 border-2 border-transparent hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500"
            >
              Finish Practice
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PracticeStats.propTypes = {
  difficulty: PropTypes.string.isRequired,
  levelCounter: PropTypes.number.isRequired,
  accuracyCounter: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default PracticeStats;
