import { Link } from "react-router-dom";

const TypingLessons = () => {
  return (
    <>
      <h2 className="font-cursive text-2xl">Typing Lessons</h2>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Beginner</h3>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Middle Row</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/beginner/1/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Upper Row</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/beginner/2/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Lower Row</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/beginner/3/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg"> Beginner Recap</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/beginner/4/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Intermediate</h3>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Capitalization</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/intermediate/1/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Punctuation</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/intermediate/2/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Short Paragraphs</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/intermediate/3/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Intermediate Recap</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/intermediate/4/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full px-3 py-1">
        <h3 className="text-xl font-extrabold">Advanced</h3>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Numbers</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/advanced/1/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Symbols</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/advanced/2/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Accuracy Focus</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/advanced/3/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-1 border-2 border-blue-500 rounded-md">
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-extrabold text-lg">Advanced Recap</h3>
              <hr />
              <div className="text-blue-500">
                <span>Avg speed: 0 WPM | </span>
                <span>Avg acc: 0% | </span>
                <span>Time: 00:00</span>
              </div>
            </div>
            <Link to="/typing/advanced/4/1">
              <button className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500">
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypingLessons;
