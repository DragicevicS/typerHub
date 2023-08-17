/* eslint-disable react/prop-types */
const keyRows = [
  [
    {
      displayValue: "` ~",
      normalPressValue: "`",
      shiftPressValue: "~",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "1 !",
      normalPressValue: "1",
      shiftPressValue: "!",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "2 @",
      normalPressValue: "2",
      shiftPressValue: "@",
      hand: "left",
      finger: "ring",
    },
    {
      displayValue: "3 #",
      normalPressValue: "3",
      shiftPressValue: "#",
      hand: "left",
      finger: "middle",
    },
    {
      displayValue: "4 $",
      normalPressValue: "4",
      shiftPressValue: "$",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "5 %",
      normalPressValue: "5",
      shiftPressValue: "%",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "6 ^",
      normalPressValue: "6",
      shiftPressValue: "^",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: "7 &",
      normalPressValue: "7",
      shiftPressValue: "&",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: "8 *",
      normalPressValue: "8",
      shiftPressValue: "*",
      hand: "right",
      finger: "middle",
    },
    {
      displayValue: "9 (",
      normalPressValue: "9",
      shiftPressValue: "(",
      hand: "right",
      finger: "ring",
    },
    {
      displayValue: "0 )",
      normalPressValue: "0",
      shiftPressValue: ")",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "- _",
      normalPressValue: "-",
      shiftPressValue: "_",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "= +",
      normalPressValue: "=",
      shiftPressValue: "+",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "Backspace",
      normalPressValue: "Backspace",
      shiftPressValue: "Backspace",
      hand: "right",
      finger: "pinkie",
    },
  ],
  [
    {
      displayValue: "Tab",
      normalPressValue: "Tab",
      shiftPressValue: "Tab",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "Q",
      normalPressValue: "q",
      shiftPressValue: "Q",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "W",
      normalPressValue: "w",
      shiftPressValue: "W",
      hand: "left",
      finger: "ring",
    },
    {
      displayValue: "E",
      normalPressValue: "e",
      shiftPressValue: "E",
      hand: "left",
      finger: "middle",
    },
    {
      displayValue: "R",
      normalPressValue: "r",
      shiftPressValue: "R",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "T",
      normalPressValue: "t",
      shiftPressValue: "T",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "Y",
      normalPressValue: "y",
      shiftPressValue: "Y",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: "U",
      normalPressValue: "u",
      shiftPressValue: "U",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: "I",
      normalPressValue: "i",
      shiftPressValue: "I",
      hand: "right",
      finger: "middle",
    },
    {
      displayValue: "O",
      normalPressValue: "o",
      shiftPressValue: "O",
      hand: "right",
      finger: "ring",
    },
    {
      displayValue: "P",
      normalPressValue: "p",
      shiftPressValue: "P",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "[ {",
      normalPressValue: "[",
      shiftPressValue: "{",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "] }",
      normalPressValue: "]",
      shiftPressValue: "}",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "\\ |",
      normalPressValue: "\\",
      shiftPressValue: "|",
      hand: "right",
      finger: "pinkie",
    },
  ],
  [
    {
      displayValue: "Caps",
      normalPressValue: "CapsLock",
      shiftPressValue: "CapsLock",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "A",
      normalPressValue: "a",
      shiftPressValue: "A",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "S",
      normalPressValue: "s",
      shiftPressValue: "S",
      hand: "left",
      finger: "ring",
    },
    {
      displayValue: "D",
      normalPressValue: "d",
      shiftPressValue: "D",
      hand: "left",
      finger: "middle",
    },
    {
      displayValue: "F",
      normalPressValue: "f",
      shiftPressValue: "F",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "G",
      normalPressValue: "g",
      shiftPressValue: "G",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "H",
      normalPressValue: "h",
      shiftPressValue: "H",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: "J",
      normalPressValue: "j",
      shiftPressValue: "J",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: "K",
      normalPressValue: "k",
      shiftPressValue: "K",
      hand: "right",
      finger: "middle",
    },
    {
      displayValue: "L",
      normalPressValue: "l",
      shiftPressValue: "L",
      hand: "right",
      finger: "ring",
    },
    {
      displayValue: "; :",
      normalPressValue: ";",
      shiftPressValue: ":",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: `' "`,
      normalPressValue: "'",
      shiftPressValue: '"',
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "Enter",
      normalPressValue: "Enter",
      shiftPressValue: "Enter",
      hand: "right",
      finger: "pinkie",
    },
  ],
  [
    {
      displayValue: "Shift",
      normalPressValue: "Shift",
      shiftPressValue: "Shift",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "Z",
      normalPressValue: "z",
      shiftPressValue: "Z",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "X",
      normalPressValue: "x",
      shiftPressValue: "X",
      hand: "left",
      finger: "ring",
    },
    {
      displayValue: "C",
      normalPressValue: "c",
      shiftPressValue: "C",
      hand: "left",
      finger: "middle",
    },
    {
      displayValue: "V",
      normalPressValue: "v",
      shiftPressValue: "V",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "B",
      normalPressValue: "b",
      shiftPressValue: "B",
      hand: "left",
      finger: "index",
    },
    {
      displayValue: "N",
      normalPressValue: "n",
      shiftPressValue: "N",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: "M",
      normalPressValue: "m",
      shiftPressValue: "M",
      hand: "right",
      finger: "index",
    },
    {
      displayValue: ", <",
      normalPressValue: ",",
      shiftPressValue: "<",
      hand: "right",
      finger: "middle",
    },
    {
      displayValue: ". >",
      normalPressValue: ".",
      shiftPressValue: ">",
      hand: "right",
      finger: "ring",
    },
    {
      displayValue: "/ ?",
      normalPressValue: "/",
      shiftPressValue: "?",
      hand: "right",
      finger: "pinkie",
    },
    {
      displayValue: "Shift",
      normalPressValue: "Shift",
      shiftPressValue: "Shift",
      hand: "right",
      finger: "pinkie",
    },
  ],
  [
    {
      displayValue: "Ctrl",
      normalPressValue: "Control",
      shiftPressValue: "Control",
      hand: "left",
      finger: "pinkie",
    },
    {
      displayValue: "Win",
      normalPressValue: "Win",
      shiftPressValue: "Win",
      hand: "left",
      finger: "thumb",
    },
    {
      displayValue: "Alt",
      normalPressValue: "Alt",
      shiftPressValue: "Alt",
      hand: "left",
      finger: "thumb",
    },
    {
      displayValue: " ",
      normalPressValue: "Space",
      shiftPressValue: "Space",
      hand: "left",
      finger: "thumb",
    },
    {
      displayValue: "Alt",
      normalPressValue: "Alt",
      shiftPressValue: "Alt",
      hand: "right",
      finger: "thumb",
    },
    {
      displayValue: "Win",
      normalPressValue: "Win",
      shiftPressValue: "Win",
      hand: "right",
      finger: "thumb",
    },
    {
      displayValue: "Ctrl",
      normalPressValue: "Control",
      shiftPressValue: "Control",
      hand: "right",
      finger: "pinkie",
    },
  ],
];

export default function KeyboardLayout({ currentLetter }) {
  return (
    <div className="flex flex-col gap-2 items-center p-2 mt-10 rounded-sm">
      {keyRows.map((row, rowIndex) => (
        <div className="flex gap-1 w-full justify-center" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div
              className={`${
                rowIndex !== 4 || key.displayValue === " "
                  ? "flex-grow"
                  : "sm:w-18 md:w-20 lg:w-28"
              } flex justify-center items-center rounded-md p-2 border-2 border-black bg-opacity-70 ${
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
}
