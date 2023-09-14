import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Toolbar = ({ capsLock, keyboardDisplay, volume, setUserData }) => {
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

  return (
    <div className="flex text-center items-center w-full px-6 py-1 bg-gray-700 ">
      <Link to="/">
        <img
          src="../../../images/arrow-left.svg"
          alt="Home"
          title="Return Home"
          className="w-8 h-auto rounded-lg hover:bg-blue-100 ease-in-out duration-500"
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
          className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
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
          className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
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
          className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
          onClick={toggleKeyboardDisplay}
        />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  capsLock: PropTypes.oneOf([null, true, false]),
  keyboardDisplay: PropTypes.bool,
  volume: PropTypes.bool,
  setUserData: PropTypes.func,
};

export default Toolbar;
