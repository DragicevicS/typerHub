import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  const params = useParams();
  const lesson = params.lesson.split("-");

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

    if (counter < text.length)
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
        <Link to="/">
          <h1 className="text-7xl ml-8 font-cursive italic underline">
            Typer
            <span className="ml-[-1px] text-blue-500">Hub</span>
          </h1>
        </Link>
        <FloatingLettersAnimation />
      </header>
      <main className="flex flex-col h-full justify-center items-center">
        <div className="flex text-center items-center w-full px-6 py-1 bg-gray-700 ">
          <Link to="/">
            <img
              src="../../images/arrow-left.svg"
              alt="Home"
              title="Return Home"
              className="w-8 h-auto rounded-lg hover:bg-blue-100 ease-in-out duration-500"
            />
          </Link>
          {capsLock ? (
            <h2 className="w-full text-xl text-red-600 animate-bounce">
              Warning: CapsLock is on!
            </h2>
          ) : (
            <div className="w-full font-cursive text-xl text-blue-500">
              <span>{params.difficulty}</span> -{" "}
              <span>
                {lesson.length > 1
                  ? `${lesson[0]} ${lesson[1]}`
                  : `${params.lesson}`}
              </span>
            </div>
          )}
          <div className="flex justify-end gap-3">
            <img
              src="../../images/redo.svg"
              alt="Redo"
              title="Redo"
              className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
              onClick={() => location.reload()}
            />
            <img
              src="../../images/volume-on.svg"
              alt="Home"
              className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
            />
            <img
              src="../../images/keyboard-on.svg"
              alt="Home"
              className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
            />
          </div>
        </div>
        {counter < text.length ? (
          <div className="flex flex-col justify-evenly h-full w-3/5 gap-2 px-10">
            <div className="leading-loose font-mono text-center">
              {text.split("").map((letter, index) => (
                <span
                  className={`text-3xl px-[2px] ${
                    correctLetter[index] === true
                      ? "bg-green-100 text-black rounded-sm"
                      : correctLetter[index] === false
                      ? "bg-red-200 text-black rounded-sm"
                      : ""
                  } ${
                    index === counter
                      ? "bg-gray-600 rounded-sm animate-pulse"
                      : ""
                  }`}
                  key={index}
                >
                  {letter}
                </span>
              ))}
            </div>
            <KeyboardLayout currentLetter={currentLetter} />
          </div>
        ) : (
          <div className="flex flex-col h-full justify-center items-center gap-2">
            <p>
              Accuracy: {Math.round((accuracyCounter * 100) / text.length)}% (
              {accuracyCounter}/{text.length} letters)
            </p>
            <p>Speed: {speed} WPM</p>
            <button
              onClick={() => location.reload()}
              className="p-2 rounded-xl bg-slate-600 hover:bg-slate-50 hover:text-black cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Level;
