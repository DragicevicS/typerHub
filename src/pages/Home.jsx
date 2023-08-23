import FloatingLettersAnimation from "../components/FloatingLettersAnimation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex w-full h-40 border relative overflow-hidden">
        <FloatingLettersAnimation />
      </header>
      <main className="flex flex-1">
        <nav>
          <ul>
            <li>Typing Lessons</li>
            <li>Typing Practice</li>
            <li>Typing Tests</li>
            <li>Problem Keys</li>
          </ul>
        </nav>
        <div></div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
