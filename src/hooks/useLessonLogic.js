import useTypingLogic from "./useTypingLogic";

const useLessonLogic = (text, volume, userData, setUserData) => {
  const typingLogic = useTypingLogic(text, volume, userData, setUserData);

  const numOfWords = text.split(" ").length;
  const timeInMinutes =
    typingLogic.startTime && typingLogic.endTime
      ? (typingLogic.endTime - typingLogic.startTime) / (1000 * 60)
      : null;
  const speed = timeInMinutes ? Math.round(numOfWords / timeInMinutes) : 0;

  return { ...typingLogic, speed };
};

export default useLessonLogic;
