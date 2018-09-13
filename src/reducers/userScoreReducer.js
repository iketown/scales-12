import {
  COMPLETE_KEYBOARD_CHALLENGE,
  FINISH_PAGE
} from "../actions/userScoreActions";

const initialState = {
  userId: "12345",
  userEmail: "ike76@meeeeee.org",
  chapterScoreCard: {
    shapes1: { completed: false },
    shapes2: { completed: false }
  },
  keyboardChallenges: {
    kb001: { completed: false }
  },
  finishedPages: [{ url: "", timestamp: "" }]
};

export const userScoreReducer = (state = initialState, action) => {
  const { chapterId, keyboardId } = action;
  const { chapterScoreCard, keyboardChallenges } = state;
  const thisChapter = chapterScoreCard[chapterId];
  const thisKeyboardChallenge = keyboardChallenges[keyboardId];
  switch (action.type) {
    case COMPLETE_KEYBOARD_CHALLENGE:
      return {
        ...state,
        keyboardChallenges: {
          ...keyboardChallenges,
          [keyboardId]: { ...thisKeyboardChallenge, completed: true }
        }
      };
    case FINISH_PAGE:
      const { pageUrl, chapter, timestamp } = action;
      const oldFinishedPage = state.finishedPages.find(
        page => page.pageUrl === pageUrl
      );
      let newFinishedPage;
      if (oldFinishedPage) {
        // just add the new timestamp to 'timestamps' array
        newFinishedPage = {
          ...oldFinishedPage,
          timestamps: [...oldFinishedPage.timestamps, timestamp]
        };
      } else {
        // create a new finished page
        newFinishedPage = { pageUrl, timestamps: [timestamp], chapter };
      }
      const finishedPagesUpdate = [
        ...state.finishedPages.filter(p => p.pageUrl !== pageUrl),
        newFinishedPage
      ];
      return {
        ...state,
        finishedPages: finishedPagesUpdate
      };
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
