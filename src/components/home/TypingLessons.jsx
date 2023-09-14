import { Link } from "react-router-dom";
import levelText from "../levelText";
import PropTypes from "prop-types";

const TypingLessons = ({ userData }) => {
  return (
    <>
      <h2 className="font-cursive text-2xl">Typing Lessons</h2>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Beginner</h3>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.beginner[0]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.beginner[0] ? "line-through" : ""
                }`}
              >
                Middle Row
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.beginner[1].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/beginner/1/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.beginner[0] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.beginner[1]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className={`flex flex-col gap-1 `}>
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.beginner[1] ? "line-through" : ""
                }`}
              >
                Upper Row
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.beginner[2].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/beginner/2/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.beginner[1] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.beginner[2]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.beginner[2] ? "line-through" : ""
                }`}
              >
                Lower Row
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.beginner[3].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/beginner/3/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.beginner[2] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.beginner[3]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.beginner[3] ? "line-through" : ""
                }`}
              >
                {" "}
                Beginner Recap
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.beginner[4].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/beginner/4/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.beginner[3] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Intermediate</h3>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.intermediate[0]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.intermediate[0]
                    ? "line-through"
                    : ""
                }`}
              >
                Capitalization
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.intermediate[1].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/intermediate/1/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.intermediate[0] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.intermediate[1]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.intermediate[1]
                    ? "line-through"
                    : ""
                }`}
              >
                Punctuation
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.intermediate[2].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/intermediate/2/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.intermediate[1] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.intermediate[2]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.intermediate[2]
                    ? "line-through"
                    : ""
                }`}
              >
                Short Paragraphs
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.intermediate[3].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/intermediate/3/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.intermediate[2] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.intermediate[3]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.intermediate[3]
                    ? "line-through"
                    : ""
                }`}
              >
                Intermediate Recap
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.intermediate[4].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/intermediate/4/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.intermediate[3] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Advanced</h3>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.advanced[0]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.advanced[0] ? "line-through" : ""
                }`}
              >
                Numbers
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.advanced[1].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/advanced/1/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.advanced[0] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.advanced[1]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.advanced[1] ? "line-through" : ""
                }`}
              >
                Symbols
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.advanced[2].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/advanced/2/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.advanced[1] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.advanced[2]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.advanced[2] ? "line-through" : ""
                }`}
              >
                Accuracy Focus
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.advanced[3].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/advanced/3/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.advanced[2] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col w-full p-1 border-2 ${
            userData.completion.lessons.advanced[3]
              ? "border-green-200 opacity-[0.85]"
              : "border-blue-500"
          } rounded-md`}
        >
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3
                className={`font-extrabold text-lg ${
                  userData.completion.lessons.advanced[3] ? "line-through" : ""
                }`}
              >
                Advanced Recap
              </h3>
              <hr />
              <div className="flex gap-1 text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span className="flex items-center gap-1">
                  0/{levelText.advanced[4].length * 3}
                  <img
                    src="../../../images/star.png"
                    alt="Star"
                    title="Accuracy star"
                    className="w-6"
                  />
                </span>
              </div>
            </div>
            <Link to="/typing/advanced/4/1">
              <button className="h-min min-w-[84px] py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 ease-in-out duration-500">
                {userData.completion.lessons.advanced[3] ? (
                  <>Redo</>
                ) : (
                  <>Start</>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

TypingLessons.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default TypingLessons;
