import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col justify-center items-center flex-grow gap-5 w-full">
        <h1 className="text-3xl">Oops!</h1>
        <p>This page does not exist. Must be a typo somewhere...</p>
        <Link to="/">
          <button className="p-2 rounded-xl bg-slate-600 hover:bg-slate-50 hover:text-black cursor-pointer">
            Return Home
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
