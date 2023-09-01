import { useState } from "react";
import Header from "../components/Header";
import TypingLessons from "../components/TypingLessons";
import TypingPractice from "../components/TypingPractice";
import TypingTests from "../components/TypingTests";
import PersonalStats from "../components/PersonalStats";
import Footer from "../components/Footer";

const Home = () => {
  const [homeTab, setHomeTab] = useState(0);
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
          <div className="flex flex-col items-center w-2/4 h-full px-10 py-5 gap-2 bg-gray-900 overflow-y-auto border border-gray-900 rounded-tr-lg rounded-br-lg rounded-bl-lg min-w-[355px]">
            {homeTab === 0 ? (
              <TypingLessons />
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
