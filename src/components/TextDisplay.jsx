/* eslint-disable react/prop-types */
const TextDisplay = ({ text, correctLetter, counter }) => {
  return (
    <div
      id="text-box"
      className="max-h-[35%] w-[55%] overflow-y-auto leading-loose font-mono text-center min-w-[575px]"
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

export default TextDisplay;
