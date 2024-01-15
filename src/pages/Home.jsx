import { useState } from "react";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import TypingLessons from "../components/lesson/TypingLessons";
import TypingPractice from "../components/practice/TypingPractice";
import TypingTests from "../components/test/TypingTests";
import PersonalInfo from "../components/personal/PersonalInfo";
import initialUserData from "../data/initialUserData";
import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const [userData, setUserData] = useLocalStorage("userData", initialUserData);
  const [homeTab, setHomeTab] = useState(0);

  const resetTempData = () => {
    let tempUserData = { ...userData };
    tempUserData.temp.speed = [];
    tempUserData.temp.accuracy = [];
    tempUserData.temp.stars = [];

    setUserData(tempUserData);
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
    <div className="flex flex-col w-full h-[100dvh]">
      <Header />
      <main className="flex-grow px-2 lg:px-9 py-2 lg:py-5 animate-fadeIn">
        <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-0 w-full h-full">
          <nav className="md:min-w-max">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col flex-wrap gap-2 md:gap-9 font-cursive cursor-pointer text-xl md:text-2xl">
              {["Lessons", "Practice", "Tests", "Info"].map((tab, index) => (
                <li
                  key={tab}
                  className={`py-1 px-2.5 md:p-3 border-l-2 border-blue-500 max-md:rounded-r-full rounded-l-full col-span-1 ${
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
          <div className="flex flex-col items-center h-full py-5 px-1 lg:px-10 gap-2 bg-black overflow-y-auto border border-black rounded-tr-lg rounded-br-lg rounded-bl-lg md:w-5/6 lg:max-w-[1000px] cursor-default">
            {renderContent()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
