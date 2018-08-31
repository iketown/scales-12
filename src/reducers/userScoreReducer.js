const initialState = {
  userId: "12345",
  userEmail: "ike76@meeeeee.org",
  chapterScoreCard: {
    shapes1: { completed: false },
    shapes2: { completed: false }
  }
};

export const userScoreReducer = (state = initialState, action) => {
  const { chapterId } = action;
  const { chapterScoreCard } = state;
  const thisChapter = chapterScoreCard[chapterId];
  switch (action.type) {
    case "COMPLETE_CHAPTER_QUIZ":
      return {
        ...state,
        chapterScoreCard: {
          ...chapterScoreCard,
          [chapterId]: { ...thisChapter, completed: true }
        }
      };
    case "START_CHAPTER_QUIZ":
      return {
        ...state,
        chapterScoreCard: {
          ...chapterScoreCard,
          [chapterId]: { ...thisChapter, started: true }
        }
      };
    default:
      return state;
  }
};
