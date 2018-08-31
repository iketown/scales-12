export const COMPLETE_CHAPTER_QUIZ = "COMPLETE_CHAPTER_QUIZ";
export const completeChapterQuiz = chapterId => ({
  type: COMPLETE_CHAPTER_QUIZ,
  chapterId
});

export const START_CHAPTER_QUIZ = "START_CHAPTER_QUIZ";
export const startChapterQuiz = chapterId => ({
  type: START_CHAPTER_QUIZ,
  chapterId
});
