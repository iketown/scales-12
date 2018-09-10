import IntroPage from "../pages/IntroPage.jsx";
import ABetterWay from "../pages/ABetterWay.jsx";
import TheShapes from "../pages/TheShapes";
import TheShapes2 from "../pages/TheShapes2";
import FlippedShapes from "../pages/FlippedShapes";
import ShapesQuiz1 from "../pages/ShapesQuiz1";
import ShapesQuiz2 from "../pages/ShapesQuiz2.jsx";
import Spacing from "../pages/Spacing";
import KeysLine from "../pages/KeysLine";
import KeysCar from "../pages/KeysCar";

export const chapters = {
  Introduction: [
    { title: "Intro 1", url: "/", component: IntroPage },
    { title: "A Better Way", url: "/a-better-way", component: ABetterWay }
  ],
  Shapes: [
    { title: "The Shapes", url: "/the-shapes", component: TheShapes },
    { title: "The Shapes 2", url: "/the-shapes-2", component: TheShapes2 },
    { title: "Shapes Quiz 1", url: "/shapes-quiz-1", component: ShapesQuiz1 },
    {
      title: "Flipped Shapes",
      url: "/flipped-shapes",
      component: FlippedShapes
    },
    { title: "Shapes Quiz 2", url: "/shapes-quiz-2", component: ShapesQuiz2 },
    { title: "Spacing", url: "/spacing", component: Spacing }
  ],
  Keyboard: [
    { title: "Keyboard 1", url: "/keys-line", component: KeysLine },
    { title: "Keyboard 2", url: "/keys-car", component: KeysCar },
    { title: "Keyboard 3", url: "/keys3", component: IntroPage },
    { title: "Keyboard 4", url: "/keys4", component: IntroPage }
  ],
  Scales: [{ title: "Scales 1", url: "/", component: IntroPage }]
};

// TODO
// find the 'prev' and 'next' pages with a given url
// list out lessons, divided into chapters
//   i.e. Shapes, lesson 2.  title: etc

export const lessonsArr = Object.keys(chapters).reduce((arr, key) => {
  const thisArr = chapters[key];
  const newArr = thisArr.map(lesson => {
    lesson.chapter = key;
    return lesson;
  });
  return [...arr, ...newArr];
}, []);

export const getPreviousAndNextLessons = url => {
  const myIndex = lessonsArr.findIndex(lesson => lesson.url === url);
  const thisLesson = lessonsArr[myIndex];
  const nextLesson = lessonsArr[myIndex + 1];
  const prevLesson = lessonsArr[myIndex - 1];
  const returnMe = { myIndex, thisLesson, nextLesson, prevLesson };
  console.log("return me", returnMe);
  return returnMe;
};
