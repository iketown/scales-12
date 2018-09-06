import { COMPLETE_KEYBOARD_CHALLENGE } from "../actions/userScoreActions";

const initialState = {
  userId: "12345",
  userEmail: "ike76@meeeeee.org",
  chapterScoreCard: {
    shapes1: { completed: false },
    shapes2: { completed: false }
  },
  keyboardChallenges: {
    kb001: { completed: false }
  }
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
