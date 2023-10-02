import { useState, useEffect } from "react";
import useTypingLogic from "./useTypingLogic";

const useTestLogic = (text, volume) => {
  const typingLogic = useTypingLogic(text, volume);

  const testTime = 90;
  const [timeRemaining, setTimeRemaining] = useState(testTime);

  useEffect(() => {
    let timerId;

    if (typingLogic.startTime && timeRemaining > 0) {
      timerId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeRemaining <= 0) {
      clearInterval(timerId);

      if (!typingLogic.endTime) typingLogic.endTime = Date.now();

      const newCorrectLetter = typingLogic.correctLetter.slice(
        0,
        typingLogic.counter
      );
      typingLogic.setState((prevState) => ({
        ...prevState,
        correctLetter: newCorrectLetter,
      }));
    }

    return () => clearInterval(timerId);
  }, [typingLogic.startTime, timeRemaining]);

  const typedText = text.slice(0, typingLogic.counter);
  const numOfWordsTyped = typedText.split(" ").length;
  const speed = Math.round(numOfWordsTyped / (testTime / 60));

  return { ...typingLogic, speed, testTime, timeRemaining, typedText };
};

export default useTestLogic;
