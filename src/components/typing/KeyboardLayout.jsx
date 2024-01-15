import PropTypes from "prop-types";
import keyRows from "../../data/keyRows";

const KeyboardLayout = ({ currentLetter, keyboardDisplay }) => {
  if (!keyboardDisplay) return null;

  const getHandForCurrentLetter = () => {
    for (const row of keyRows) {
      for (const key of row) {
        if (key.shiftPressValue === currentLetter) {
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
      "min-w-max",
      "p-[1px]",
      "md:p-2",
      "border-2",
      "border-black",
      "rounded-md",
      "bg-opacity-70",
    ];

    if (key.displayValue === "F" || key.displayValue === "J") {
      classes.push("underline", "underline-offset-3", "md:underline-offset-8");
    }

    if (
      key.normalPressValue === currentLetter ||
      key.shiftPressValue === currentLetter ||
      (currentLetter === " " && key.normalPressValue === "Space")
    ) {
      classes.push("border-white");
    }

    if (key.displayValue === "Shift") {
      classes.push("px-3");
      if (isShiftActivated(key)) {
        classes.push("border-white");
      }
    }

    const fingerColors = {
      pinkie: "bg-red-900",
      ring: "bg-gray-600",
      middle: "bg-amber-800",
      index: key.hand === "left" ? "bg-indigo-900" : "bg-blue-600",
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
      classes.push("flex-grow tracking-tighter");
    }

    return classes.join(" ");
  };

  return (
    <div className="flex flex-col gap-0 md:gap-1 items-center rounded-sm cursor-default font-sans animate-fadeIn">
      {keyRows.map((row, rowIndex) => (
        <div
          className="flex justify-center gap-0 md:gap-1 w-full text-xs md:text-base"
          key={rowIndex}
        >
          {row.map((key, keyIndex) => (
            <div className={determineClasses(key)} key={keyIndex}>
              {key.displayValue}
            </div>
          ))}
        </div>
      ))}
      <div className="flex w-full gap-1 md:gap-3 justify-center flex-wrap text-xs md:text-lg">
        <div className="flex items-center gap-1 md:gap-2">
          <div className="bg-red-900 w-5 h-5 border-black border-2 rounded-md"></div>
          <p>Pinkie |</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <div className="bg-gray-600 w-5 h-5 border-black border-2 rounded-md"></div>
          <p>Ring |</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <div className="bg-amber-800 w-5 h-5 border-black border-2 rounded-md"></div>
          <p>Middle |</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <div className="bg-indigo-900 w-5 h-5 border-black border-2 rounded-md"></div>
          <p>Index(left) |</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <div className="bg-blue-600 w-5 h-5 border-black border-2 rounded-md"></div>
          <p>Index(right) |</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <div className="bg-teal-800 w-5 h-5 border-black border-2 rounded-md"></div>
          <p>Thumb</p>
        </div>
      </div>
    </div>
  );
};

KeyboardLayout.propTypes = {
  currentLetter: PropTypes.string.isRequired,
  keyboardDisplay: PropTypes.bool.isRequired,
};

export default KeyboardLayout;
