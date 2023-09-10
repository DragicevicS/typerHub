import PropTypes from "prop-types";
import keyRows from "../keyRows";

const KeyboardLayout = ({ currentLetter }) => {
  return (
    <div className="flex flex-col gap-1 items-center rounded-sm cursor-default">
      {keyRows.map((row, rowIndex) => (
        <div className="flex gap-1 w-full justify-center" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div
              className={`flex justify-center items-center rounded-md p-2 border-2 border-black bg-opacity-70 ${
                rowIndex !== 4 || key.displayValue === " " ? "flex-grow" : ""
              } ${
                rowIndex === 4 && key.displayValue !== " "
                  ? "sm:px-3 lg:px-5"
                  : ""
              } ${
                key.displayValue === "F" || key.displayValue === "J"
                  ? "underline underline-offset-8"
                  : ""
              } ${
                key.normalPressValue === currentLetter ||
                key.shiftPressValue === currentLetter
                  ? "border-white"
                  : ""
              } ${key.finger === "pinkie" ? "bg-red-900" : ""} 
              ${key.finger === "ring" ? "bg-gray-600" : ""}
              ${key.finger === "middle" ? "bg-amber-800" : ""}
              ${
                key.finger === "index" && key.hand === "left"
                  ? "bg-indigo-800"
                  : ""
              }
              ${
                key.finger === "index" && key.hand === "right"
                  ? "bg-blue-800"
                  : ""
              }
              ${key.finger === "thumb" ? "bg-teal-800" : ""}`}
              key={keyIndex}
            >
              {key.displayValue}
            </div>
          ))}
        </div>
      ))}
      <div className="flex w-full gap-3 justify-center flex-wrap">
        <div className="flex items-center gap-2">
          <div className="bg-red-900 w-6 h-6 border-black border-2"></div>
          <p className="text-lg">Pinkie |</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-600 w-6 h-6 border-black border-2"></div>
          <p className="text-lg">Ring |</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-amber-800 w-6 h-6 border-black border-2"></div>
          <p className="text-lg">Middle |</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-indigo-800 w-6 h-6 border-black border-2"></div>
          <p className="text-lg">Index(left) |</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-blue-800 w-6 h-6 border-black border-2"></div>
          <p className="text-lg">Index(right) |</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-teal-800 w-6 h-6 border-black border-2"></div>
          <p className="text-lg">Thumb</p>
        </div>
      </div>
    </div>
  );
};

KeyboardLayout.propTypes = {
  currentLetter: PropTypes.string,
};

export default KeyboardLayout;
