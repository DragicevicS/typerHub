import { useState, useEffect } from "react";
import useLocalStorage from "../components/useLocalStorage";
import FloatingLettersAnimation from "../components/FloatingLettersAnimation";
import KeyboardLayout from "../components/KeyboardLayout";
import Footer from "../components/Footer";

const Level = () => {
  const text =
    "fff fff fff jjj jjj jjj ff jj fj fj jf jf ffj jjf fjf jfj ffj jjf jfj ffj";
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
    <div className="flex flex-col w-full h-screen">
      <header className="flex-shrink-0 p-5 relative overflow-hidden bg-gray-900 cursor-default">
        <h1 className="text-7xl ml-8 font-cursive italic underline">
          Typer
          <span className="text-blue-500">Hub</span>
        </h1>
        <FloatingLettersAnimation />
      </header>
      <main className="flex h-full p-10 justify-center items-center">
        <div className="flex flex-col h-full w-3/4 justify-evenly gap-2">
          {capsLock && (
            <h2 className="text-red-300">Warning: CapsLock is on!</h2>
          )}
          <div className="leading-loose text-center">
            {text.split("").map((letter, index) => (
              <span
                className={`text-3xl px-1 ${
                  correctLetter[index] === true
                    ? "bg-green-50 text-black rounded-sm"
                    : correctLetter[index] === false
                    ? "bg-red-100 text-black rounded-sm"
                    : ""
                } ${
                  index === counter
                    ? "bg-gray-600 rounded-sm animate-pulse"
                    : ""
                }
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
      </main>
      <Footer />
    </div>
  );
};

export default Level;
