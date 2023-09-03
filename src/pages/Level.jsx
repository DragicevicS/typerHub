import { useParams } from "react-router-dom";
import useTypingLogic from "../components/hooks/useTypingLogic";
import TextDisplay from "../components/level/TextDisplay";
import KeyboardLayout from "../components/level/KeyboardLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Toolbar from "../components/level/Toolbar";
import ScreenStats from "../components/level/ScreenStats";
import levelText from "../components/levelText";

const Level = () => {
  const params = useParams();
  const { difficulty, lesson, index } = params;
  const levelCounter = parseInt(index, 10);
  const text = levelText[difficulty][lesson][levelCounter];

  const {
    counter,
    currentLetter,
    correctLetter,
    accuracyCounter,
    capsLock,
    speed,
  } = useTypingLogic(text);

  return (
    <div key={index} className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col items-center flex-grow overflow-y-hidden w-full">
        <Toolbar capsLock={capsLock} />
        {counter < text.length ? (
          <div className="flex flex-col justify-evenly h-full sm:px-10 md:w-5/6 lg:max-w-[1000px]">
            <TextDisplay
              text={text}
              correctLetter={correctLetter}
              counter={counter}
            />
            <KeyboardLayout currentLetter={currentLetter} />
          </div>
        ) : (
          <ScreenStats
            levelCounter={levelCounter}
            difficulty={difficulty}
            lesson={lesson}
            accuracyCounter={accuracyCounter}
            text={text}
            speed={speed}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Level;
