import { useState, useEffect } from "react";
import TextDisplay from "../components/TextDisplay";
import KeyboardLayout from "../components/KeyboardLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import ScreenStats from "../components/ScreenStats";

const Level = () => {
  const text = "fff fff fff jjj jjj jjj.";
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

  console.log(currentLetter);

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col items-center flex-grow overflow-y-hidden w-full">
        <Toolbar capsLock={capsLock} />
        {counter < text.length ? (
          <div className="flex flex-col justify-evenly h-full sm:px-10 md:w-5/6 lg:max-w-[1000px]">
            <TextDisplay
              text={text}
              correctLetter={correctLetter}
              counter={counter}
            />
            <KeyboardLayout currentLetter={currentLetter} />
          </div>
        ) : (
          <ScreenStats
            accuracyCounter={accuracyCounter}
            text={text}
            speed={speed}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Level;
