import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TextDisplay = ({ text, correctLetter, counter, keyboardDisplay }) => {
  const containerRef = useRef(null);
  const spanWidth = 22;
  const rowHeight = 39;
  const [lettersInRow, setLettersInRow] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const newLettersInRow = Math.floor(containerWidth / spanWidth);
      setLettersInRow(newLettersInRow);
    }
  }, [text]);

  useEffect(() => {
    if (containerRef.current && counter % lettersInRow === 0 && counter !== 0) {
      containerRef.current.scrollTop += rowHeight;
    }
  }, [counter, lettersInRow]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={`${
        keyboardDisplay ? "max-h-[35%]" : "h-[80%]"
      } overflow-y-auto overflow-x-hidden leading-loose font-mono scroll-smooth animate-fadeIn`}
    >
      {text.split("").map((letter, index) => (
        <span
          className={`text-xl md:text-2xl lg:text-3xl px-[2px] ${
            correctLetter[index] === true &&
            "bg-green-100 text-black rounded-sm"
          } ${
            correctLetter[index] === false && "bg-red-200 text-black rounded-sm"
          } ${index === counter && "bg-gray-600 rounded-sm animate-pulse"}`}
          key={index}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

TextDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  correctLetter: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  keyboardDisplay: PropTypes.bool.isRequired,
};

export default TextDisplay;
