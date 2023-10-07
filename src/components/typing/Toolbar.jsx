import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Toolbar = ({
  capsLock,
  keyboardDisplay,
  volume,
  setUserData,
  testTime,
  timeRemaining,
}) => {
  const toggleVolume = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      preferences: {
        ...prevUserData.preferences,
        volume: !prevUserData.preferences.volume,
      },
    }));
  };

  const toggleKeyboardDisplay = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      preferences: {
        ...prevUserData.preferences,
        keyboardDisplay: !prevUserData.preferences.keyboardDisplay,
      },
    }));
  };

  const setTimerDivs = (testTime, timeRemaining) => {
    const passedTime = testTime - timeRemaining;

    return Array.from({ length: testTime }).map((_, index) => (
      <div
        key={index}
        className={`flex-grow ${
          index < passedTime ? "bg-green-500" : "bg-blue-100"
        }`}
      />
    ));
  };

  return (
    <div className="w-full">
      <div className="flex text-center items-center w-full px-6 py-1 bg-blue-500">
        <Link
          to="/"
          className="px-5 bg-blue-100 hover:bg-blue-500 rounded-lg ease-in-out duration-500 animate-fadeIn"
        >
          <img
            src="../../../images/arrow-left.svg"
            alt="Home"
            title="Return Home"
            className="w-8 h-8"
            draggable="false"
          />
        </Link>
        {capsLock ? (
          <h2 className="w-full text-xl text-red-600 animate-bounce">
            Warning: CapsLock is on!
          </h2>
        ) : (
          <div className="w-full"></div>
        )}
        <div className="flex justify-end gap-3">
          <img
            src="../../../images/redo.svg"
            alt="Redo"
            title="Redo"
            className="w-8 h-8 bg-blue-100 rounded-lg hover:bg-blue-500 cursor-pointer ease-in-out duration-500 animate-fadeIn"
            draggable="false"
            onClick={() => location.reload()}
          />
          <img
            src={
              volume
                ? "../../../images/volume-on.svg"
                : "../../../images/volume-off.svg"
            }
            alt="Home"
            title={volume ? "Volume On" : "Volume Off"}
            className="w-8 h-8 bg-blue-100 rounded-lg hover:bg-blue-500 cursor-pointer ease-in-out duration-500 animate-fadeIn"
            draggable="false"
            onClick={toggleVolume}
          />
          <img
            src={
              keyboardDisplay
                ? "../../../images/keyboard-on.svg"
                : "../../../images/keyboard-off.svg"
            }
            alt="Home"
            title={
              keyboardDisplay ? "Keyboard Display On" : "Keyboard Display Off"
            }
            className="w-8 h-8 bg-blue-100 rounded-lg hover:bg-blue-500 cursor-pointer ease-in-out duration-500 animate-fadeIn"
            draggable="false"
            onClick={toggleKeyboardDisplay}
          />
        </div>
      </div>
      {testTime === undefined ? null : (
        <div className="flex w-full h-2" title="Timer">
          {setTimerDivs(testTime, timeRemaining)}
        </div>
      )}
    </div>
  );
};

Toolbar.propTypes = {
  capsLock: PropTypes.oneOf([null, true, false]),
  keyboardDisplay: PropTypes.bool,
  volume: PropTypes.bool,
  setUserData: PropTypes.func,
  testTime: PropTypes.number,
  timeRemaining: PropTypes.number,
};

export default Toolbar;
