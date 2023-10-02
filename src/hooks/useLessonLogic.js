import useTypingLogic from "./useTypingLogic";

const useLessonLogic = (text, volume) => {
  const typingLogic = useTypingLogic(text, volume);

  const numOfWords = text.split(" ").length;
  const timeInMinutes =
    typingLogic.startTime && typingLogic.endTime
      ? (typingLogic.endTime - typingLogic.startTime) / (1000 * 60)
      : null;
  const speed = timeInMinutes ? Math.round(numOfWords / timeInMinutes) : 0;

  return { ...typingLogic, speed };
};

export default useLessonLogic;
