import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TestStats = ({
  difficulty,
  accuracyCounter,
  text,
  speed,
  userData,
  setUserData,
}) => {
  const accPercent = Math.round((accuracyCounter * 100) / text.length);

  const handleTestCompletion = () => {
    let newUserData = { ...userData };

    if (speed > newUserData.speed.tests[difficulty]) {
      newUserData.speed.tests[difficulty] = speed;
    }

    if (accPercent > newUserData.accuracy.tests[difficulty]) {
      newUserData.accuracy.tests[difficulty] = accPercent;
    }

    newUserData.completion.tests[difficulty] = true;
    setUserData(newUserData);

    localStorage.setItem("userData", JSON.stringify(newUserData));
  };

  useEffect(() => {
    if (speed > 0) {
      handleTestCompletion();
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
    <div className="flex flex-col gap-5 h-full justify-center items-center">
      <h3 className="text-3xl font-bold">{feedbackMessage()}</h3>
      <div className="flex flex-col gap-3 px-20 py-10 border-2 rounded-sm text-lg">
        <div className="flex gap-1">
          <img
            src="../../../images/bullseye.svg"
            alt="Bullseye arrow"
            className="w-6"
          />
          Accuracy : {accPercent}% ({accuracyCounter}/{text.length} characters)
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
        <div className="flex gap-3 justify-center mt-2">
          <button
            className="h-min min-w-[136px] px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500"
            onClick={() => location.reload()}
          >
            Redo Test
          </button>
          <Link to="/">
            <button className="h-min min-w-[136px] px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500">
              Finish Test
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TestStats.propTypes = {
  difficulty: PropTypes.string.isRequired,
  accuracyCounter: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default TestStats;
