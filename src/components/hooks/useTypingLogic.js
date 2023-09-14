import { useState, useEffect } from "react";

const useTypingLogic = (text, volume) => {
  const numOfWords = text.split(" ").length;

  const initialState = {
    counter: 0,
    currentLetter: text[0],
    correctLetter: Array(text.length).fill(null),
    accuracyCounter: 0,
    startTime: null,
    endTime: null,
    typo: false,
  };

  const [state, setState] = useState(initialState);
  const [capsLock, setCapsLock] = useState(null);

  useEffect(() => {
    const checkCapsLock = (e) => {
      setCapsLock(e.getModifierState("CapsLock"));
    };
    document.addEventListener("keydown", checkCapsLock);
    return () => document.removeEventListener("keydown", checkCapsLock);
  }, []);

  useEffect(() => {
    const keyboardSound = new Audio("/sounds/keyboard-sound.mp3");
    const errorSound = new Audio("/sounds/error-sound.mp3");

    const playSound = (sound) => volume && sound.play();

    const handleCorrectInput = () => {
      setState((prevState) => ({
        ...prevState,
        correctLetter: [
          ...prevState.correctLetter.slice(0, prevState.counter),
          true,
          ...prevState.correctLetter.slice(prevState.counter + 1),
        ],
        counter: prevState.counter + 1,
        currentLetter: text[prevState.counter + 1],
        accuracyCounter: prevState.accuracyCounter + 1,
        typo: false,
      }));
      playSound(keyboardSound);
    };

    const handleIncorrectInput = () => {
      setState((prevState) => ({
        ...prevState,
        correctLetter: [
          ...prevState.correctLetter.slice(0, prevState.counter),
          false,
          ...prevState.correctLetter.slice(prevState.counter + 1),
        ],
        counter: prevState.counter + 1,
        currentLetter: text[prevState.counter + 1],
        typo: true,
      }));
      playSound(errorSound);
    };

    const isSpecialKey = (key) =>
      key.includes("Arrow") ||
      key.includes("Page") ||
      (key.startsWith("F") && key.length >= 2) ||
      key === "Escape" ||
      key === "Shift" ||
      key === "CapsLock";

    const handleKeyInput = (e) => {
      if (isSpecialKey(e.key)) return;

      if (!state.startTime)
        setState((prev) => ({ ...prev, startTime: Date.now() }));

      if (e.key === state.currentLetter) {
        handleCorrectInput();
      } else if (!state.typo) {
        handleIncorrectInput();
      } else {
        playSound(errorSound);
      }
    };

    if (state.counter >= text.length && !state.endTime)
      setState((prev) => ({ ...prev, endTime: Date.now() }));

    if (state.counter < text.length)
      document.addEventListener("keydown", handleKeyInput);

    return () => document.removeEventListener("keydown", handleKeyInput);
  }, [state, text, volume]);

  useEffect(() => {
    setState({
      ...initialState,
      currentLetter: text[0],
      correctLetter: Array(text.length).fill(null),
    });
  }, [text]);

  const timeInMinutes =
    state.startTime && state.endTime
      ? (state.endTime - state.startTime) / (1000 * 60)
      : null;
  const speed = timeInMinutes ? Math.round(numOfWords / timeInMinutes) : null;

  return { ...state, capsLock, speed };
};

export default useTypingLogic;
