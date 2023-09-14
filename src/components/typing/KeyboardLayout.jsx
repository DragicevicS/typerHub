import PropTypes from "prop-types";
import keyRows from "../keyRows";

const KeyboardLayout = ({ currentLetter, keyboardDisplay }) => {
  if (!keyboardDisplay) return null;

  const getHandForCurrentLetter = () => {
    for (const row of keyRows) {
      for (const key of row) {
        if (
          key.normalPressValue === currentLetter ||
          key.shiftPressValue === currentLetter
        ) {
          return key.hand;
        }
      }
    }
    return null;
  };

  const isShiftActivated = (key) => {
    if (!currentLetter) return false;
    const handForCurrentLetter = getHandForCurrentLetter();
    return (
      currentLetter.toUpperCase() === currentLetter &&
      currentLetter !== " " &&
      ((handForCurrentLetter === "left" && key.hand === "right") ||
        (handForCurrentLetter === "right" && key.hand === "left"))
    );
  };

  const determineClasses = (key) => {
    const classes = [
      "flex",
      "justify-center",
      "items-center",
      "rounded-md",
      "p-2",
      "border-2",
      "border-black",
      "bg-opacity-70",
    ];

    if (key.displayValue === "F" || key.displayValue === "J") {
      classes.push("underline", "underline-offset-8");
    }

    if (
      key.normalPressValue === currentLetter ||
      key.shiftPressValue === currentLetter ||
      (currentLetter === " " && key.normalPressValue === "Space")
    ) {
      classes.push("border-white");
    }

    if (key.displayValue === "Shift" && isShiftActivated(key)) {
      classes.push("border-white");
    }

    const fingerColors = {
      pinkie: "bg-red-900",
      ring: "bg-gray-600",
      middle: "bg-amber-800",
      index: key.hand === "left" ? "bg-indigo-800" : "bg-blue-800",
      thumb: "bg-teal-800",
    };

    classes.push(fingerColors[key.finger]);

    if (
      (key.displayValue === "Ctrl" ||
        key.displayValue === "Win" ||
        key.displayValue === "Alt") &&
      key.displayValue !== "__"
    ) {
      classes.push("sm:px-3", "lg:px-5");
    } else {
      classes.push("flex-grow");
    }

    return classes.join(" ");
  };

  return (
    <div className="flex flex-col gap-1 items-center rounded-sm cursor-default">
      {keyRows.map((row, rowIndex) => (
        <div className="flex gap-1 w-full justify-center" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div className={determineClasses(key)} key={keyIndex}>
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
  keyboardDisplay: PropTypes.bool,
};

export default KeyboardLayout;
