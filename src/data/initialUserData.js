const initialUserData = {
  preferences: {
    volume: true,
    keyboardDisplay: true,
  },
  completion: {
    lessons: {
      beginner: [false, false, false, false],
      intermediate: [false, false, false, false],
      advanced: [false, false, false, false],
    },
    tests: {
      beginner: [false],
      intermediate: [false],
      advanced: [false],
    },
  },
  speed: {
    lessons: {
      beginner: [0, 0, 0, 0],
      intermediate: [0, 0, 0, 0],
      advanced: [0, 0, 0, 0],
    },
    practice: {},
    tests: {
      beginner: [0],
      intermediate: [0],
      advanced: [0],
    },
  },
  accuracy: {
    lessons: {
      beginner: [0, 0, 0, 0],
      intermediate: [0, 0, 0, 0],
      advanced: [0, 0, 0, 0],
    },
    practice: {},
    tests: {
      beginner: [0],
      intermediate: [0],
      advanced: [0],
    },
  },
  stars: {
    lessons: {
      beginner: [0, 0, 0, 0],
      intermediate: [0, 0, 0, 0],
      advanced: [0, 0, 0, 0],
    },
    practice: {},
    tests: {
      beginner: [0],
      intermediate: [0],
      advanced: [0],
    },
  },
};

export default initialUserData;
