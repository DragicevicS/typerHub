import { useState } from "react";

const FloatingLettersAnimation = () => {
  const getRandomLetter = () => {
    const randomCharCode =
      Math.random() < 0.5
        ? Math.floor(Math.random() * 26) + 65
        : Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(randomCharCode);
  };

  const [letters] = useState(
    Array(21)
      .fill(null)
      .map(() => getRandomLetter())
  );

  const positions = [
    { delay: "1.17s", top: "-10%", left: "0" },
    { delay: "0.26s", top: "60%", left: "5%" },
    { delay: "1s", top: "16%", left: "10%" },
    { delay: "0.57s", top: "43%", left: "15%" },
    { delay: "2s", top: "58%", left: "20%" },
    { delay: "0.28s", top: "-2%", left: "25%" },
    { delay: "1.11s", top: "25%", left: "30%" },
    { delay: "2.12s", top: "33%", left: "35%" },
    { delay: "0s", top: "4%", left: "40%" },
    { delay: "1.17s", top: "69%", left: "45%" },
    { delay: "0.58s", top: "40%", left: "50%" },
    { delay: "0.99s", top: "9%", left: "55%" },
    { delay: "0.44s", top: "59%", left: "60%" },
    { delay: "0.99s", top: "19%", left: "65%" },
    { delay: "0.28s", top: "-5%", left: "70%" },
    { delay: "2.3s", top: "50%", left: "75%" },
    { delay: "1.51s", top: "29%", left: "80%" },
    { delay: "0.75s", top: "22%", left: "85%" },
    { delay: "0.69s", top: "68%", left: "90%" },
    { delay: "1.1s", top: "-12%", left: "95%" },
    { delay: "2s", top: "45%", left: "99%" },
  ];

  return (
    <>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="floating absolute opacity-50 cursor-default text-md"
          style={{
            animationDelay: positions[index].delay,
            top: positions[index].top,
            left: positions[index].left,
          }}
        >
          {letter}
        </span>
      ))}
    </>
  );
};

export default FloatingLettersAnimation;
