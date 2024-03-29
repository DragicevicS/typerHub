import { Link } from "react-router-dom";
import FloatingLettersAnimation from "./FloatingLettersAnimation";

const Header = () => {
  return (
    <header className="flex items-center flex-shrink-0 p-3 md:p-5 relative overflow-hidden bg-black">
      <Link to="/">
        <h1 className="text-5xl md:text-7xl px-2 inline ml-3 md:ml-8 font-cursive italic underline animate-fadeIn">
          Typer
          <span className="ml-[-1px] text-blue-500">Hub</span>
        </h1>
      </Link>
      <FloatingLettersAnimation />
    </header>
  );
};

export default Header;
