import { useParams } from "react-router-dom";
import useLocalStorage from "../components/hooks/useLocalStorage";
import useTypingLogic from "../components/hooks/useTypingLogic";
import TextDisplay from "../components/typing/TextDisplay";
import KeyboardLayout from "../components/typing/KeyboardLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Toolbar from "../components/typing/Toolbar";
import levelText from "../components/levelText";
import ScreenStats from "../components/typing/ScreenStats";

const Typing = () => {
  const params = useParams();
  const { difficulty, lesson, index } = params;
  const levelCounter = parseInt(index, 10);
  const text = levelText[difficulty][lesson][levelCounter - 1];
  const [keyboardDisplayOn, setKeyboardDisplayOn] = useLocalStorage(
    "keyboardDisplay",
    true
  );
  const [volumeOn, setVolumeOn] = useLocalStorage("volume", true);

  const {
    counter,
    currentLetter,
    correctLetter,
    accuracyCounter,
    capsLock,
    speed,
  } = useTypingLogic(text, volumeOn);

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col items-center flex-grow overflow-y-hidden w-full">
        <Toolbar
          capsLock={capsLock}
          keyboardDisplayOn={keyboardDisplayOn}
          setKeyboardDisplayOn={setKeyboardDisplayOn}
          volumeOn={volumeOn}
          setVolumeOn={setVolumeOn}
        />
        {counter < text.length ? (
          <div className="flex flex-col justify-evenly h-full sm:px-10 md:w-5/6 lg:max-w-[1000px]">
            <TextDisplay
              text={text}
              correctLetter={correctLetter}
              counter={counter}
              keyboardDisplayOn={keyboardDisplayOn}
            />
            <KeyboardLayout
              currentLetter={currentLetter}
              keyboardDisplayOn={keyboardDisplayOn}
            />
          </div>
        ) : (
          <ScreenStats
            difficulty={difficulty}
            lesson={lesson}
            levelCounter={levelCounter}
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

export default Typing;
