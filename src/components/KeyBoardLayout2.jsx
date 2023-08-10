/* eslint-disable react/prop-types */
export default function KeyboardLayout2({ currentLetter, pressedKey }) {
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
        finger: "index",
      },
      {
        displayValue: "5 %",
        normalPressValue: "5",
        shiftPressValue: "%",
        finger: "index",
      },
      {
        displayValue: "6 ^",
        normalPressValue: "6",
        shiftPressValue: "^",
        finger: "index",
      },
      {
        displayValue: "7 &",
        normalPressValue: "7",
        shiftPressValue: "&",
        finger: "index",
      },
      {
        displayValue: "8 *",
        normalPressValue: "8",
        shiftPressValue: "*",
        finger: "index",
      },
      {
        displayValue: "9 (",
        normalPressValue: "9",
        shiftPressValue: "(",
        finger: "index",
      },
      {
        displayValue: "0 )",
        normalPressValue: "0",
        shiftPressValue: ")",
        finger: "index",
      },
      {
        displayValue: "- _",
        normalPressValue: "-",
        shiftPressValue: "_",
        finger: "index",
      },
      {
        displayValue: "= +",
        normalPressValue: "=",
        shiftPressValue: "+",
        finger: "index",
      },
      {
        displayValue: "Backspace",
        normalPressValue: "Backspace",
        shiftPressValue: "Backspace",
        finger: "index",
      },
    ],
    [
      {
        displayValue: "Tab",
        normalPressValue: "Tab",
        shiftPressValue: "Tab",
        finger: "pinkie",
      },
      {
        displayValue: "Q",
        normalPressValue: "q",
        shiftPressValue: "Q",
        finger: "pinkie",
      },
      {
        displayValue: "W",
        normalPressValue: "w",
        shiftPressValue: "W",
        finger: "ring",
      },
      {
        displayValue: "E",
        normalPressValue: "e",
        shiftPressValue: "E",
        finger: "middle",
      },
      {
        displayValue: "R",
        normalPressValue: "r",
        shiftPressValue: "R",
        finger: "index",
      },
      {
        displayValue: "T",
        normalPressValue: "t",
        shiftPressValue: "T",
        finger: "index",
      },
      {
        displayValue: "Y",
        normalPressValue: "y",
        shiftPressValue: "Y",
        finger: "index",
      },
      {
        displayValue: "U",
        normalPressValue: "u",
        shiftPressValue: "U",
        finger: "index",
      },
      {
        displayValue: "I",
        normalPressValue: "i",
        shiftPressValue: "I",
        finger: "index",
      },
      {
        displayValue: "O",
        normalPressValue: "o",
        shiftPressValue: "O",
        finger: "index",
      },
      {
        displayValue: "P",
        normalPressValue: "p",
        shiftPressValue: "P",
        finger: "index",
      },
      {
        displayValue: "[ {",
        normalPressValue: "[",
        shiftPressValue: "{",
        finger: "index",
      },
      {
        displayValue: "] }",
        normalPressValue: "]",
        shiftPressValue: "}",
        finger: "index",
      },
      {
        displayValue: "\\ |",
        normalPressValue: "\\",
        shiftPressValue: "|",
        finger: "index",
      },
    ],
    [
      {
        displayValue: "Caps",
        normalPressValue: "CapsLock",
        shiftPressValue: "CapsLock",
        finger: "pinkie",
      },
      {
        displayValue: "A",
        normalPressValue: "a",
        shiftPressValue: "A",
        finger: "pinkie",
      },
      {
        displayValue: "S",
        normalPressValue: "s",
        shiftPressValue: "S",
        finger: "ring",
      },
      {
        displayValue: "D",
        normalPressValue: "d",
        shiftPressValue: "D",
        finger: "middle",
      },
      {
        displayValue: "F",
        normalPressValue: "f",
        shiftPressValue: "F",
        finger: "index",
      },
      {
        displayValue: "G",
        normalPressValue: "g",
        shiftPressValue: "G",
        finger: "index",
      },
      {
        displayValue: "H",
        normalPressValue: "h",
        shiftPressValue: "H",
        finger: "index",
      },
      {
        displayValue: "J",
        normalPressValue: "j",
        shiftPressValue: "J",
        finger: "index",
      },
      {
        displayValue: "K",
        normalPressValue: "k",
        shiftPressValue: "K",
        finger: "index",
      },
      {
        displayValue: "L",
        normalPressValue: "l",
        shiftPressValue: "L",
        finger: "index",
      },
      {
        displayValue: "; :",
        normalPressValue: ";",
        shiftPressValue: ":",
        finger: "index",
      },
      {
        displayValue: `' "`,
        normalPressValue: "'",
        shiftPressValue: '"',
        finger: "index",
      },
      {
        displayValue: "Enter",
        normalPressValue: "Enter",
        shiftPressValue: "Enter",
        finger: "index",
      },
    ],
    [
      {
        displayValue: "Shift",
        normalPressValue: "Shift",
        shiftPressValue: "Shift",
        finger: "pinkie",
      },
      {
        displayValue: "Z",
        normalPressValue: "z",
        shiftPressValue: "Z",
        finger: "pinkie",
      },
      {
        displayValue: "X",
        normalPressValue: "x",
        shiftPressValue: "X",
        finger: "ring",
      },
      {
        displayValue: "C",
        normalPressValue: "c",
        shiftPressValue: "C",
        finger: "middle",
      },
      {
        displayValue: "V",
        normalPressValue: "v",
        shiftPressValue: "V",
        finger: "index",
      },
      {
        displayValue: "B",
        normalPressValue: "b",
        shiftPressValue: "B",
        finger: "index",
      },
      {
        displayValue: "N",
        normalPressValue: "n",
        shiftPressValue: "N",
        finger: "index",
      },
      {
        displayValue: "M",
        normalPressValue: "m",
        shiftPressValue: "M",
        finger: "index",
      },
      {
        displayValue: ", <",
        normalPressValue: ",",
        shiftPressValue: "<",
        finger: "index",
      },
      {
        displayValue: ". >",
        normalPressValue: ".",
        shiftPressValue: ">",
        finger: "index",
      },
      {
        displayValue: "/ ?",
        normalPressValue: "/",
        shiftPressValue: "?",
        finger: "index",
      },
      {
        displayValue: "Shift",
        normalPressValue: "Shift",
        shiftPressValue: "Shift",
        finger: "pinkie",
      },
    ],
    [
      {
        displayValue: "Ctrl",
        normalPressValue: "Control",
        shiftPressValue: "Control",
        finger: "pinkie",
      },
      {
        displayValue: "Win",
        normalPressValue: "Win",
        shiftPressValue: "Win",
        finger: "thumb",
      },
      {
        displayValue: "Alt",
        normalPressValue: "Alt",
        shiftPressValue: "Alt",
        finger: "thumb",
      },
      {
        displayValue: " ",
        normalPressValue: "Space",
        shiftPressValue: "Space",
        finger: "thumb",
      },
      {
        displayValue: "Alt",
        normalPressValue: "Alt",
        shiftPressValue: "Alt",
        finger: "thumb",
      },
      {
        displayValue: "Win",
        normalPressValue: "Win",
        shiftPressValue: "Win",
        finger: "thumb",
      },
      {
        displayValue: "Ctrl",
        normalPressValue: "Control",
        shiftPressValue: "Control",
        finger: "pinkie",
      },
    ],
  ];

  return (
    <div className="flex flex-col gap-2 items-center p-2 border-2 mt-10 rounded-sm">
      {keyRows.map((row, rowIndex) => (
        <div className="flex gap-1 w-full justify-center" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div
              className={`${
                rowIndex !== 4 || key.displayValue === " "
                  ? "flex-grow"
                  : "w-20"
              } flex justify-center items-center rounded-md p-2 border-2 ${
                key.displayValue === currentLetter ? "border-green-500" : ""
              } ${
                key.displayValue === pressedKey ||
                key.shiftPressValue === pressedKey ||
                key.normalPressValue === pressedKey
                  ? "bg-gray-500"
                  : ""
              }`}
              key={keyIndex}
            >
              {key.displayValue === " " ? " " : key.displayValue}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
