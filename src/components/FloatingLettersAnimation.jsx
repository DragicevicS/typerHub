const FloatingLettersAnimation = () => {
  const getRandomLetter = () => {
    const randomCharCode =
      Math.random() < 0.5
        ? Math.floor(Math.random() * 26) + 65
        : Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(randomCharCode);
  };

  return (
    <>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "1.17s", top: "10%", left: "1%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.26s", top: "60%", left: "5%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "1s", top: "16%", left: "10%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.57s", top: "43%", left: "15%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "2s", top: "58%", left: "20%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.28s", top: "-2%", left: "25%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "1.11s", top: "25%", left: "30%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "3.62s", top: "33%", left: "35%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0s", top: "4%", left: "40%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "1.17s", top: "69%", left: "45%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.58s", top: "40%", left: "50%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.99s", top: "9%", left: "55%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.44s", top: "59%", left: "60%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.99s", top: "19%", left: "65%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.28s", top: "-5%", left: "70%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "2.8s", top: "50%", left: "75%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "1.51s", top: "29%", left: "80%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.75s", top: "22%", left: "85%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "0.69s", top: "68%", left: "90%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "3.1s", top: "12%", left: "95%" }}
      >
        {getRandomLetter()}
      </span>
      <span
        className="floating absolute opacity-50"
        style={{ animationDelay: "2.1s", top: "55%", left: "99%" }}
      >
        {getRandomLetter()}
      </span>
    </>
  );
};

export default FloatingLettersAnimation;
