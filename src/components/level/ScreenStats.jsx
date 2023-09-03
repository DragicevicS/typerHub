import { Link } from "react-router-dom";
import levelText from "../levelText";

/* eslint-disable react/prop-types */
const ScreenStats = ({
  levelCounter,
  difficulty,
  lesson,
  accuracyCounter,
  text,
  speed,
}) => {
  const nextLessonExists =
    levelText[difficulty][lesson][levelCounter] !== undefined;
  return (
    <div className="flex flex-col h-full justify-center items-center gap-2">
      <p>
        Accuracy: {Math.round((accuracyCounter * 100) / text.length)}% (
        {accuracyCounter}/{text.length} letters)
      </p>
      <p>Speed: {speed} WPM</p>
      {nextLessonExists ? (
        <Link to={`/level/${difficulty}/${lesson}`}>
          <button className="p-2 rounded-xl bg-slate-600 hover:bg-slate-50 hover:text-black cursor-pointer">
            Next
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button className="p-2 rounded-xl bg-slate-600 hover:bg-slate-50 hover:text-black cursor-pointer">
            Finish Lesson
          </button>
        </Link>
      )}
    </div>
  );
};

export default ScreenStats;
