/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

const Toolbar = ({ capsLock }) => {
  const params = useParams();
  const lesson = params.lesson.split("-");
  return (
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
          title="Volume On"
          className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
        />
        <img
          src="../../images/keyboard-on.svg"
          alt="Home"
          title="Keyboard Display On"
          className="w-8 h-auto rounded-lg hover:bg-blue-100 cursor-pointer ease-in-out duration-500"
        />
      </div>
    </div>
  );
};

export default Toolbar;
