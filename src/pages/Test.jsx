import { useParams } from "react-router-dom";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import Toolbar from "../components/typing/Toolbar";
import TextDisplay from "../components/typing/TextDisplay";
import KeyboardLayout from "../components/typing/KeyboardLayout";
import TestStats from "../components/test/TestStats";
import useLocalStorage from "../hooks/useLocalStorage";
import initialUserData from "../data/initialUserData";
import useTestLogic from "../hooks/useTestLogic";
import testText from "../data/testText";

const Test = () => {
  const params = useParams();
  const { difficulty } = params;
  const text = testText[difficulty];
  const [userData, setUserData] = useLocalStorage("userData", initialUserData);

  const {
    counter,
    currentLetter,
    correctLetter,
    accuracyCounter,
    capsLock,
    speed,
    testTime,
    timeRemaining,
    typedText,
  } = useTestLogic(text, userData.preferences.volume, userData, setUserData);

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col items-center flex-grow overflow-y-hidden w-full">
        <Toolbar
          capsLock={capsLock}
          keyboardDisplay={userData.preferences.keyboardDisplay}
          volume={userData.preferences.volume}
          setUserData={setUserData}
          testTime={testTime}
          timeRemaining={timeRemaining}
        />
        {timeRemaining > 0 ? (
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
          <TestStats
            difficulty={difficulty}
            accuracyCounter={accuracyCounter}
            speed={speed}
            userData={userData}
            setUserData={setUserData}
            typedText={typedText}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Test;
