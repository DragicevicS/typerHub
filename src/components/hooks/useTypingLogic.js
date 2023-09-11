import { useState, useEffect } from "react";

const useTypingLogic = (text) => {
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
    let isMounted = true;
    const keyboardSound = new Audio("/sounds/keyboard-sound.mp3");
    const errorSound = new Audio("/sounds/error-sound.mp3");

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

    function handleKeyInput(e) {
      if (!isMounted) return;
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

    if (counter >= text.length) setEndTime(Date.now());
    if (counter < text.length)
      document.addEventListener("keydown", handleKeyInput);

    return () => {
      document.removeEventListener("keydown", handleKeyInput);
      isMounted = false;
    };
  }, [
    accuracyCounter,
    counter,
    correctLetter,
    currentLetter,
    startTime,
    typo,
    text,
  ]);

  useEffect(() => {
    setCounter(0);
    setCurrentLetter(text[0]);
    setCorrectLetter(Array(text.length).fill(null));
    setAccuracyCounter(0);
    setStartTime(null);
    setEndTime(null);
    setTypo(false);
  }, [text]);

  let speed = null;
  if (startTime && endTime) {
    const timeInMinutes = (endTime - startTime) / (1000 * 60);
    speed = Math.round(numOfWords / timeInMinutes);
  }

  return {
    counter,
    currentLetter,
    correctLetter,
    accuracyCounter,
    capsLock,
    speed,
  };
};

export default useTypingLogic;
