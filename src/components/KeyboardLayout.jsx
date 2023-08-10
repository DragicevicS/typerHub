/* eslint-disable react/prop-types */
export default function KeyboardLayout({ currentLetter, pressedKey }) {
  const rows = [
    [
      "` ~",
      "1 !",
      "2 @",
      "3 #",
      "4 $",
      "5 %",
      "6 ^",
      "7 &",
      "8 *",
      "9 (",
      "0 )",
      "- _",
      "= +",
      "Backspace",
    ],
    [
      "Tab",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "[ {",
      "] }",
      "\\ |",
    ],
    [
      "Caps",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "; :",
      `' "`,
      "Enter",
    ],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ", <", ". >", "/ ?", "Shift"],
    ["Control", "Win", "Alt", " ", "Alt", "Win", "Control"],
  ];

  return (
    <div className="flex flex-col gap-2 items-center p-2 border-2 mt-10 rounded-sm">
      {rows.map((row, rowIndex) => (
        <div className="flex gap-1 w-full justify-center" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div
              className={`${
                rowIndex !== 4 || key === " " ? "flex-grow" : "w-20"
              } flex justify-center items-center rounded-md p-2 border-2 ${
                key === currentLetter ? "border-green-500" : ""
              } ${
                pressedKey &&
                (key === pressedKey ||
                  key === pressedKey.toUpperCase() ||
                  (key.includes(pressedKey) && key.length == 1))
                  ? "bg-gray-500"
                  : ""
              }`}
              key={keyIndex}
            >
              {key === " " ? " " : key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
