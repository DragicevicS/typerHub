import { useState } from "react";
import { Link } from "react-router-dom";
import FloatingLettersAnimation from "../components/FloatingLettersAnimation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex w-full h-36 items-center relative overflow-hidden bg-gray-900 cursor-default">
        <h1 className="text-7xl p-4 ml-8 font-cursive italic underline">
          Typer
          <span className="text-blue-500">Hub</span>
        </h1>
        <FloatingLettersAnimation />
      </header>
      <main className="flex flex-1 p-10 justify-center items-center">
        <div className="flex justify-center items-center w-full h-full">
          <nav className="min-w-max">
            <ul className="flex flex-col gap-10 font-cursive cursor-pointer text-2xl">
              <li className="hover-effect p-3 border-l-2 border-blue-500 rounded-l-full">
                Typing <span className="text-blue-500">Lessons</span>
              </li>
              <li className="hover-effect p-3 border-l-2 border-blue-500 rounded-l-full">
                Typing <span className="text-blue-500">Practice</span>
              </li>
              <li className="hover-effect p-3 border-l-2 border-blue-500 rounded-l-full">
                Typing <span className="text-blue-500">Tests</span>
              </li>
              <li className="hover-effect p-3 border-l-2 border-blue-500 rounded-l-full">
                Problem <span className="text-blue-500">Keys</span>
              </li>
            </ul>
          </nav>
          <div className="w-2/4 h-full">
            <div className="w-full h-full bg-gray-900"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
