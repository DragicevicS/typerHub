import PropTypes from "prop-types";
import TestDisplay from "./TestDisplay";

const TypingTests = ({ userData }) => {
  const testDifficulty = ["Beginner", "Intermediate", "Advanced"];

  return (
    <>
      <h2 className="font-cursive text-2xl mb-1">Typing Tests</h2>
      {testDifficulty.map((title, index) => (
        <TestDisplay
          key={index}
          title={title}
          difficulty={title.toLowerCase()}
          userData={userData}
        />
      ))}
    </>
  );
};

TypingTests.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default TypingTests;
