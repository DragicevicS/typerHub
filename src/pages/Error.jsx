import { Link } from "react-router-dom";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

const Error = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col justify-center items-center flex-grow gap-5 w-full animate-fadeIn">
        <h1 className="text-3xl">Oops!</h1>
        <p>This page does not exist. Must be a typo somewhere...</p>
        <Link to="/">
          <button
            type="button"
            className="h-min px-5 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500"
          >
            Return Home
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
