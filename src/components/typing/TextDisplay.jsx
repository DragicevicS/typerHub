import PropTypes from "prop-types";

const TextDisplay = ({ text, correctLetter, counter }) => {
  return (
    <div className="max-h-[35%] overflow-y-auto overflow-x-hidden leading-loose font-mono">
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
};

export default TextDisplay;
