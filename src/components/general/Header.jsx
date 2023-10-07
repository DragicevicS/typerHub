import { Link } from "react-router-dom";
import FloatingLettersAnimation from "./FloatingLettersAnimation";

const Header = () => {
  return (
    <header className="flex items-center flex-shrink-0 p-5 relative overflow-hidden bg-black">
      <Link to="/">
        <h1 className="text-7xl px-2 inline ml-8 font-cursive italic underline animate-fadeIn">
          Typer
          <span className="ml-[-1px] text-blue-500">Hub</span>
        </h1>
      </Link>
      <Link to="/bug-report" className="ml-auto">
        <img
          src="../../../images/bug.svg"
          alt="Report bug or issue"
          title="Report bug or issue"
          className="w-10 h-10 bg-blue-100 rounded-lg hover:bg-blue-500 cursor-pointer ease-in-out duration-500"
          draggable="false"
        />
      </Link>
      <FloatingLettersAnimation />
    </header>
  );
};

export default Header;
