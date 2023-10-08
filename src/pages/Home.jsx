import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import initialUserData from "../data/initialUserData";
import Header from "../components/general/Header";
import TypingLessons from "../components/lesson/TypingLessons";
import TypingPractice from "../components/practice/TypingPractice";
import TypingTests from "../components/test/TypingTests";
import PersonalInfo from "../components/personal/PersonalInfo";
import Footer from "../components/general/Footer";

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

  const renderContent = () => {
    switch (homeTab) {
      case 0:
        return (
          <TypingLessons userData={userData} resetTempData={resetTempData} />
        );
      case 1:
        return <TypingPractice userData={userData} />;
      case 2:
        return <TypingTests userData={userData} />;
      case 3:
        return <PersonalInfo userData={userData} />;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex-grow p-9 overflow-y-auto animate-fadeIn">
        <div className="flex justify-center w-full h-full">
          <nav className="min-w-max">
            <ul className="flex flex-col gap-10 font-cursive cursor-pointer text-2xl">
              {["Lessons", "Practice", "Tests", "Info"].map((tab, index) => (
                <li
                  key={tab}
                  className={`p-3 border-l-2 border-blue-500 rounded-l-full ${
                    homeTab === index
                      ? "bg-black"
                      : "bg-gray-900 tab-name ease-in-out duration-500"
                  }`}
                  onClick={() => setHomeTab(index)}
                >
                  {index === 3 ? "Personal " : "Typing "}
                  <span className="text-blue-500">{tab}</span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center h-full py-5 gap-2 bg-black overflow-y-auto border border-black rounded-tr-lg rounded-br-lg rounded-bl-lg min-w-[355px] sm:px-10 md:w-5/6 lg:max-w-[1000px] cursor-default">
            {renderContent()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
