import { Link } from "react-router-dom";
import FloatingLettersAnimation from "./FloatingLettersAnimation";

const Header = () => {
  return (
    <header className="flex-shrink-0 p-5 relative overflow-hidden bg-gray-900">
      <Link to="/">
        <h1 className="text-7xl px-2 inline ml-8 font-cursive italic underline">
          Typer
          <span className="ml-[-1px] text-blue-500">Hub</span>
        </h1>
      </Link>
      <FloatingLettersAnimation />
    </header>
  );
};

export default Header;
