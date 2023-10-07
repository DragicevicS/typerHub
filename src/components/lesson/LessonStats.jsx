import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import lessonText from "../../data/lessonText";

const LessonStats = ({
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

  const calculateStars = (accPercent) => {
    if (accPercent < 85) return 0;
    if (accPercent < 90) return 1;
    if (accPercent < 95) return 2;
    return 3;
  };

  const updateTempData = () => {
    const tempUserData = { ...userData };

    tempUserData.temp.speed[levelCounter - 1] = speed;
    tempUserData.temp.accuracy[levelCounter - 1] = accPercent;
    tempUserData.temp.stars[levelCounter - 1] = calculateStars(accPercent);

    setUserData(tempUserData);
    localStorage.setItem("userData", JSON.stringify(tempUserData));
  };

  const handleLessonCompletion = () => {
    let tempUserData = { ...userData };
    const avgSpeed = Math.floor(
      userData.temp.speed.reduce((a, b) => a + b, 0) /
        userData.temp.speed.length
    );
    const avgAccuracy = Math.floor(
      userData.temp.accuracy.reduce((a, b) => a + b, 0) /
        userData.temp.accuracy.length
    );
    const totalStars = userData.temp.stars.reduce((a, b) => a + b, 0);
    tempUserData.speed.lessons[difficulty][lesson - 1] = avgSpeed;
    tempUserData.accuracy.lessons[difficulty][lesson - 1] = avgAccuracy;
    tempUserData.stars.lessons[difficulty][lesson - 1] = totalStars;

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
    if (speed > 0) {
      updateTempData();
      if (!nextTextExists) handleLessonCompletion();
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
    <div className="flex flex-col gap-5 h-full justify-center items-center animate-fadeIn">
      <h3 className="text-3xl font-bold">{feedbackMessage()}</h3>
      <div className="flex flex-col gap-3 px-20 py-10 border-2 rounded-sm text-lg">
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
            src={
              accPercent >= 85
                ? "../../../images/star.png"
                : "../../../images/star-outline.svg"
            }
            alt="Star"
            className="w-10 h-10"
          />
          <img
            src={
              accPercent >= 90
                ? "../../../images/star.png"
                : "../../../images/star-outline.svg"
            }
            alt="Star"
            className="w-10 h-10"
          />
          <img
            src={
              accPercent >= 95
                ? "../../../images/star.png"
                : "../../../images/star-outline.svg"
            }
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
        {nextTextExists ? (
          <Link
            to={`/lesson/${difficulty}/${lesson}/${levelCounter + 1}`}
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

LessonStats.propTypes = {
  difficulty: PropTypes.string.isRequired,
  lesson: PropTypes.string.isRequired,
  levelCounter: PropTypes.number.isRequired,
  accuracyCounter: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default LessonStats;
