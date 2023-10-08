import { Link } from "react-router-dom";
import initialUserData from "../../data/initialUserData";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  handleUsernameEdit,
  calculateAvgSpeed,
  calculateAvgAccuracy,
  getTotalTextCount,
  getStarsEarned,
  handleDataReset,
} from "./InfoFunctions";
import lessonText from "../../data/lessonText";

const PersonalInfo = () => {
  const [userData, setUserData] = useLocalStorage("userData", initialUserData);

  return (
    <>
      <h2 className="font-cursive text-2xl">Personal Info</h2>
      <div className="flex flex-col justify-center gap-5 h-full w-1/3 text-blue-500 animate-fadeIn">
        <div className="flex gap-3 items-center">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="w-[218px] p-1 text-blue-50 text-lg border-b-2 border-transparent bg-transparent  outline-none ease-in-out duration-500 focus:border-blue-500 focus:placeholder-transparent"
            name="username"
            id="username"
            maxLength="25"
            placeholder="e.g. TyperMan"
            value={userData.personalInfo.username}
            onChange={(e) => handleUsernameEdit(userData, e, setUserData)}
          />
        </div>
        <hr />
        <div className="flex gap-3 items-center">
          <p>Speed: </p>
          <p className="text-xl text-blue-50 ml-auto">
            {calculateAvgSpeed(userData)}
            <span className="text-base"> WPM</span>
          </p>
        </div>
        <hr />
        <div className="flex gap-3 items-center">
          <p>Accuracy: </p>
          <p className="text-xl text-blue-50 ml-auto">
            {calculateAvgAccuracy(userData)}
            <span className="text-base"> %</span>
          </p>
        </div>
        <hr />
        <div className="flex gap-3 items-center">
          <p>Stars: </p>
          <p className="text-xl text-blue-50  ml-auto">
            {getStarsEarned(userData)} / {getTotalTextCount(lessonText) * 3}
          </p>
          <img src="../../images/star.png" alt="Star" className="w-6 h-6" />
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="h-min py-1 text-base font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500"
            onClick={() => handleDataReset(userData, setUserData)}
          >
            Reset progress
          </button>
          <hr />
          <Link to="/bug-report" className="m-auto">
            <img
              src="../../images/bug.svg"
              alt="Report bug or issue"
              title="Report bug or issue"
              className="w-10 h-10 bg-blue-100 rounded-lg hover:bg-blue-500 cursor-pointer ease-in-out duration-500"
              draggable="false"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
