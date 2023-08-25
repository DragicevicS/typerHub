import { useState } from "react";
import FloatingLettersAnimation from "../components/FloatingLettersAnimation";
import Footer from "../components/Footer";
import TypingLessons from "../components/TypingLessons";
import TypingPractice from "../components/TypingPractice";
import TypingTests from "../components/TypingTests";
import ProblemKeys from "../components/ProblemKeys";
import useLocalStorage from "../components/useLocalStorage";

const Home = () => {
  const [homeTab, setHomeTab] = useState(0);
  return (
    <div className="flex flex-col w-full h-screen">
      <header className="flex-shrink-0 p-5 relative overflow-hidden bg-gray-900 cursor-default">
        <h1 className="text-7xl ml-8 font-cursive italic underline">
          Typer
          <span className="text-blue-500">Hub</span>
        </h1>
        <FloatingLettersAnimation />
      </header>
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
                Problem <span className="text-blue-500">Keys</span>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center w-2/4 px-10 py-5 gap-2 bg-gray-900 h-full overflow-y-scroll rounded-tr-lg rounded-br-lg rounded-bl-lg">
            {homeTab === 0 ? (
              <TypingLessons />
            ) : homeTab === 1 ? (
              <TypingPractice />
            ) : homeTab === 2 ? (
              <TypingTests />
            ) : homeTab === 3 ? (
              <ProblemKeys />
            ) : undefined}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
