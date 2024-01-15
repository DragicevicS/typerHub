import PropTypes from "prop-types";
import PracticeDisplay from "./PracticeDisplay";

const TypingPractice = ({ userData }) => {
  const practiceDifficulty = ["Beginner", "Intermediate", "Advanced"];

  return (
    <>
      <h2 className="font-cursive text-xl md:text-2xl mb-1">Typing Practice</h2>
      {practiceDifficulty.map((title, index) => (
        <PracticeDisplay
          key={index}
          title={title}
          difficulty={title.toLowerCase()}
          userData={userData}
        />
      ))}
    </>
  );
};

TypingPractice.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default TypingPractice;
