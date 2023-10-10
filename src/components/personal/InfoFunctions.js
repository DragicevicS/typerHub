import initialUserData from "../../data/initialUserData";

export const handleUsernameEdit = (userData, e, setUserData) => {
  const newUserData = { ...userData };
  newUserData.personalInfo.username = e.target.value;
  setUserData(newUserData);
};

export const calculateAvgSpeed = (userData) => {
  let totalSpeed = 0;
  let completedCount = 0;

  for (let difficulty in userData.speed.lessons) {
    userData.speed.lessons[difficulty].forEach((speed) => {
      if (speed > 0) {
        totalSpeed += speed;
        completedCount++;
      }
    });
  }

  for (let difficulty in userData.speed.tests) {
    if (userData.speed.tests[difficulty] > 0) {
      totalSpeed += userData.speed.tests[difficulty];
      completedCount++;
    }
  }

  return completedCount === 0 ? 0 : Math.round(totalSpeed / completedCount);
};

export const calculateAvgAccuracy = (userData) => {
  let totalAccuracy = 0;
  let completedCount = 0;

  for (let difficulty in userData.accuracy.lessons) {
    userData.accuracy.lessons[difficulty].forEach((accuracy) => {
      if (accuracy > 0) {
        totalAccuracy += accuracy;
        completedCount++;
      }
    });
  }

  for (let difficulty in userData.accuracy.tests) {
    if (userData.speed.tests[difficulty] > 0) {
      totalAccuracy += userData.accuracy.tests[difficulty];
      completedCount++;
    }
  }

  return completedCount === 0 ? 0 : Math.round(totalAccuracy / completedCount);
};

export const getTotalTextCount = (obj) => {
  let count = 0;

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      count += obj[key].length;
    } else if (typeof obj[key] === "object") {
      count += getTotalTextCount(obj[key]);
    }
  }

  return count;
};

export const getStarsEarned = (userData) => {
  let totalStars = 0;

  for (let difficulty in userData.stars.lessons) {
    userData.stars.lessons[difficulty].forEach((stars) => {
      if (stars > 0) {
        totalStars += stars;
      }
    });
  }

  return totalStars;
};

export const showProblemKeys = (userData) => {
  const problemKeysArray = Object.entries(userData.problemKeys);

  problemKeysArray.sort((a, b) => b[1] - a[1]);

  const top3 = problemKeysArray.slice(0, 3).map((item) => item[0]);

  if (top3[0] === undefined) return;
  if (top3[1] === undefined) return `${top3[0]}`;
  if (top3[2] === undefined) return `${top3[0]}, ${top3[1]}`;
  return `${top3[0]}, ${top3[1]}, ${top3[2]}`;
};

export const handleDataReset = (userData, setUserData) => {
  const currentPreferences = userData.preferences;
  const currentPersonalInfo = userData.personalInfo;
  setUserData({
    ...initialUserData,
    preferences: currentPreferences,
    personalInfo: currentPersonalInfo,
  });
  setTimeout(() => location.reload(), 200);
};
