import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import initialUserData from "../data/initialUserData";
import Header from "../components/Header";
import TypingLessons from "../components/home/TypingLessons";
import TypingPractice from "../components/home/TypingPractice";
import TypingTests from "../components/home/TypingTests";
import PersonalStats from "../components/home/PersonalStats";
import Footer from "../components/Footer";

const Home = () => {
  const [userData, setUserData] = useLocalStorage("userData", initialUserData);
  const [homeTab, setHomeTab] = useState(0);

  const resetTempData = () => {
    let tempUserData = { ...userData };
    tempUserData.temp.speed = [];
    tempUserData.temp.accuracy = [];
    tempUserData.temp.stars = [];

    setUserData(tempUserData);
    localStorage.setItem("userData", JSON.stringify(tempUserData));
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex-grow p-10 overflow-y-auto">
        <div className="flex justify-center w-full h-full">
          <nav className="min-w-max">
            <ul className="flex flex-col gap-10 font-cursive cursor-pointer text-2xl">
              <li
                className={`p-3 border-l-2 border-blue-500 rounded-l-full ${
                  homeTab === 0 ? "bg-gray-900" : "bg-gray-800 hover-effect"
                }`}
                onClick={() => setHomeTab(0)}
              >
                Typing <span className="text-blue-500">Lessons</span>
              </li>
              <li
                className={`p-3 border-l-2 border-blue-500 rounded-l-full ${
                  homeTab === 1 ? "bg-gray-900" : "bg-gray-800 hover-effect"
                }`}
                onClick={() => setHomeTab(1)}
              >
                Typing <span className="text-blue-500">Practice</span>
              </li>
              <li
                className={`p-3 border-l-2 border-blue-500 rounded-l-full ${
                  homeTab === 2 ? "bg-gray-900" : "bg-gray-800 hover-effect"
                }`}
                onClick={() => setHomeTab(2)}
              >
                Typing <span className="text-blue-500">Tests</span>
              </li>
              <li
                className={`p-3 border-l-2 border-blue-500 rounded-l-full ${
                  homeTab === 3 ? "bg-gray-900" : "bg-gray-800 hover-effect"
                }`}
                onClick={() => setHomeTab(3)}
              >
                Personal <span className="text-blue-500">Stats</span>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center h-full py-5 gap-2 bg-gray-900 overflow-y-auto border border-gray-900 rounded-tr-lg rounded-br-lg rounded-bl-lg min-w-[355px] sm:px-10 md:w-5/6 lg:max-w-[1000px]">
            {homeTab === 0 ? (
              <TypingLessons
                userData={userData}
                resetTempData={resetTempData}
              />
            ) : homeTab === 1 ? (
              <TypingPractice />
            ) : homeTab === 2 ? (
              <TypingTests />
            ) : homeTab === 3 ? (
              <PersonalStats />
            ) : undefined}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
