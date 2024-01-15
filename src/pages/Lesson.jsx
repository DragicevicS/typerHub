import { useParams } from "react-router-dom";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import Toolbar from "../components/typing/Toolbar";
import TextDisplay from "../components/typing/TextDisplay";
import KeyboardLayout from "../components/typing/KeyboardLayout";
import LessonStats from "../components/lesson/LessonStats";
import useLocalStorage from "../hooks/useLocalStorage";
import initialUserData from "../data/initialUserData";
import useLessonLogic from "../hooks/useLessonLogic";
import lessonText from "../data/lessonText";

const Lesson = () => {
  const params = useParams();
  const { difficulty, lesson, index } = params;
  const levelCounter = parseInt(index, 10);
  const text = lessonText[difficulty][lesson][levelCounter - 1];
  const [userData, setUserData] = useLocalStorage("userData", initialUserData);

  const {
    counter,
    currentLetter,
    correctLetter,
    accuracyCounter,
    capsLock,
    speed,
  } = useLessonLogic(text, userData.preferences.volume, userData, setUserData);

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
          <div className="flex flex-col justify-evenly gap-2 h-full w-screen p-1 lg:max-w-[1000px]">
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
          <LessonStats
            difficulty={difficulty}
            lesson={lesson}
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

export default Lesson;
