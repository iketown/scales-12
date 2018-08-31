const initialState = {
  userId: "12345",
  userEmail: "ike76@meeeeee.org",
  chapterScoreCard: {
    shapes1: { completed: false },
    shapes2: { completed: false }
  }
};

export const userScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE_CHAPTER":
      const { chapterId } = action;
      const { chapterScoreCard } = state;
      const thisChapter = chapterScoreCard[chapterId];

      return {
        ...state,
        chapterScoreCard: {
          ...chapterScoreCard,
          [chapterId]: { ...thisChapter, completed: true }
        }
      };
    default:
      return state;
  }
};
