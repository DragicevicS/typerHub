import { useEffect, useState } from "react";
import KeyboardLayout from "./components/KeyboardLayout";

const App = () => {
  const text =
    "Once upon a time in a quaint village, there lived a curious young boy named Max. Max loved exploring the nearby woods, where he discovered hidden treasures and secret pathways. One day, he stumbled upon a mysterious map with intriguing symbols and numbers. The map seemed to lead to a grand adventure. With a determined spirit, Max followed the map's directions...";
  const numOfWords = text.split(" ").length;
  const [counter, setCounter] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(text[0]);
  const [correctLetter, setCorrectLetter] = useState(
    Array(text.length).fill(null)
  );
  const [accuracyCounter, setAccuracyCounter] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [typo, setTypo] = useState(false);
  const [capsLock, setCapsLock] = useState(null);

  useEffect(() => {
    const checkCapsLock = (e) => {
      setCapsLock(e.getModifierState("CapsLock"));
    };

    document.addEventListener("keydown", checkCapsLock);

    return () => {
      document.removeEventListener("keydown", checkCapsLock);
    };
  }, []);

  useEffect(() => {
    const keyboardSound = new Audio("/sounds/keyboard-sound.mp3");
    const errorSound = new Audio("/sounds/error-sound.mp3");

    function handleKeyInput(e) {
      if (
        e.key.includes("Arrow") ||
        e.key.includes("Page") ||
        (e.key.startsWith("F") && e.key.length >= 2) ||
        e.key === "Escape"
      )
        return;

      if (e.key !== "Shift" && e.key !== "CapsLock" && !startTime)
        setStartTime(Date.now());

      if (
        e.key !== "Shift" &&
        e.key !== "CapsLock" &&
        e.key === currentLetter
      ) {
        keyboardSound.play();
        handleCorrectInput(e.key);
        setTypo(false);
      }
      if (
        e.key !== "Shift" &&
        e.key !== "CapsLock" &&
        e.key !== currentLetter &&
        typo === false
      ) {
        errorSound.play();
        handleIncorrectInput(e.key);
        setTypo(true);
      }
      if (
        e.key !== "Shift" &&
        e.key !== "CapsLock" &&
        e.key !== currentLetter &&
        typo === true
      )
        errorSound.play();
    }

    function handleCorrectInput() {
      const newCorrectLetter = [...correctLetter];
      newCorrectLetter[counter] = true;

      setCorrectLetter(newCorrectLetter);
      setCounter(counter + 1);
      setCurrentLetter(text[counter + 1]);
      setAccuracyCounter(accuracyCounter + 1);
    }

    function handleIncorrectInput() {
      const newCorrectLetter = [...correctLetter];
      newCorrectLetter[counter] = false;

      setCorrectLetter(newCorrectLetter);
      setCounter(counter + 1);
      setCurrentLetter(text[counter + 1]);
    }

    if (counter >= text.length) setEndTime(Date.now());

    document.addEventListener("keydown", handleKeyInput);

    return () => {
      document.removeEventListener("keydown", handleKeyInput);
    };
  }, [accuracyCounter, counter, correctLetter, currentLetter, startTime, typo]);

  let speed = null;
  if (startTime && endTime) {
    const timeInMinutes = (endTime - startTime) / (1000 * 60);
    speed = Math.round(numOfWords / timeInMinutes);
  }

  return (
    <div className="flex flex-col h-full gap-2">
      {capsLock && <h2 className="text-red-300">Warning: CapsLock is on!</h2>}
      <div className="leading-loose">
        {text.split("").map((letter, index) => (
          <span
            className={`text-3xl  ${
              correctLetter[index] === true
                ? "bg-green-50 text-black rounded-sm"
                : correctLetter[index] === false
                ? "bg-red-100 text-black rounded-sm"
                : ""
            } ${index === counter ? "bg-gray-600 rounded-sm animate-pulse" : ""}
            `}
            key={index}
          >
            {letter}
          </span>
        ))}
      </div>
      {counter >= text.length && (
        <div className="flex flex-col justify-center items-center mt-4 gap-2">
          <hr className="w-full mt-2" />
          <p>
            Accuracy: {Math.round((accuracyCounter * 100) / text.length)}% (
            {accuracyCounter}/{text.length} letters)
          </p>
          <p>Speed: {speed} WPM</p>
          <button
            onClick={() => location.reload()}
            className="p-2 rounded-xl bg-slate-600 hover:bg-slate-50 hover:text-black cursor-pointer"
          >
            Restart
          </button>
          <hr className="w-full mt-1" />
        </div>
      )}
      <KeyboardLayout currentLetter={currentLetter} />
    </div>
  );
};

export default App;
