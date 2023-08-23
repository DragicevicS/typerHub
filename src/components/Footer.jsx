import { Link } from "react-router-dom";
import FloatingLettersAnimation from "./FloatingLettersAnimation";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center relative overflow-hidden w-full h-9 bg-gray-900 cursor-default">
      <p>
        <span>Copyright © 2023 </span>
        <Link
          to="https://github.com/DragicevicS"
          target="_blank"
          className="text-blue-500 italic cursor-pointer"
        >
          DragicevicS
        </Link>
      </p>
      <FloatingLettersAnimation />
    </footer>
  );
};

export default Footer;
