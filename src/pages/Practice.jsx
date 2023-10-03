import { useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import initialUserData from "../data/initialUserData";
import useLessonLogic from "../hooks/useLessonLogic";
import TextDisplay from "../components/typing/TextDisplay";
import KeyboardLayout from "../components/typing/KeyboardLayout";
import PracticeStats from "../components/practice/PracticeStats";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import Toolbar from "../components/typing/Toolbar";
import practiceText from "../data/practiceText";

const Practice = () => {
  const params = useParams();
  const { difficulty, index } = params;
  const levelCounter = parseInt(index, 10);
  const text = practiceText[difficulty][index - 1];
  const [userData, setUserData] = useLocalStorage("userData", initialUserData);

  const {
    counter,
    currentLetter,
    correctLetter,
    accuracyCounter,
    capsLock,
    speed,
  } = useLessonLogic(text, userData.preferences.volume);

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col items-center flex-grow overflow-y-hidden w-full">
        <Toolbar
          capsLock={capsLock}
          keyboardDisplay={userData.preferences.keyboardDisplay}
          volume={userData.preferences.volume}
          setUserData={setUserData}
        />
        {counter < text.length ? (
          <div className="flex flex-col justify-evenly h-full sm:px-1 lg:max-w-[1000px]">
            <TextDisplay
              text={text}
              correctLetter={correctLetter}
              counter={counter}
              keyboardDisplay={userData.preferences.keyboardDisplay}
            />
            <KeyboardLayout
              currentLetter={currentLetter}
              keyboardDisplay={userData.preferences.keyboardDisplay}
            />
          </div>
        ) : (
          <PracticeStats
            difficulty={difficulty}
            levelCounter={levelCounter}
            accuracyCounter={accuracyCounter}
            text={text}
            speed={speed}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Practice;
