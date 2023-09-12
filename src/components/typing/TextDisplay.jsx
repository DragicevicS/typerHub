import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TextDisplay = ({ text, correctLetter, counter, keyboardDisplayOn }) => {
  const containerRef = useRef(null);
  const spanWidth = 22;
  const rowHeight = 36;
  const [lettersInRow, setLettersInRow] = useState(0);
  const [scrollIncrement, setScrollIncrement] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const newLettersInRow = Math.floor(containerWidth / spanWidth);
      setLettersInRow(newLettersInRow);
      setScrollIncrement(newLettersInRow);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && counter > lettersInRow) {
      containerRef.current.scrollTop += rowHeight;
      setLettersInRow((prevState) => prevState + scrollIncrement);
    }
  }, [counter, lettersInRow, scrollIncrement]);

  return (
    <div
      ref={containerRef}
      className={`${
        keyboardDisplayOn ? "max-h-[35%]" : "h-[90%]"
      } overflow-y-auto overflow-x-hidden leading-loose font-mono scroll-smooth`}
    >
      {text.split("").map((letter, index) => (
        <span
          className={`text-3xl px-[2px] ${
            correctLetter[index] === true
              ? "bg-green-100 text-black rounded-sm"
              : correctLetter[index] === false
              ? "bg-red-200 text-black rounded-sm"
              : ""
          } ${index === counter ? "bg-gray-600 rounded-sm animate-pulse" : ""}`}
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
  keyboardDisplayOn: PropTypes.bool,
};

export default TextDisplay;
