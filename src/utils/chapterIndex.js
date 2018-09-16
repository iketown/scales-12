import slugify from "slugify";
import IntroPage from "../pages/IntroPage.jsx";
import WhatsAScale from "../pages/WhatsAScale.jsx";
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
    { title: "Intro", url: "/", component: IntroPage, slug: "intro_1" },
    {
      title: "What's a scale?",
      url: "/whats_a_scale",
      component: WhatsAScale,
      slug: "whats_a_scale"
    },
    {
      title: "A Better Way",
      url: "/a_better_way",
      component: ABetterWay,
      slug: "a_better_way"
    }
  ],
  Shapes: [
    {
      title: "The Shapes",
      url: "/the_shapes",
      component: TheShapes,
      slug: "the_shapes"
    },
    {
      title: "The Shapes 2",
      url: "/the_shapes_2",
      component: TheShapes2,
      slug: "the_shapes_2"
    },
    {
      title: "Shapes Quiz 1",
      url: "/shapes_quiz_1",
      component: ShapesQuiz1,
      slug: "shapes_quiz_1"
    },
    {
      title: "Flipped Shapes",
      url: "/flipped_shapes",
      component: FlippedShapes,
      slug: "flipped_shapes"
    },
    {
      title: "Shapes Quiz 2",
      url: "/shapes_quiz_2",
      component: ShapesQuiz2,
      slug: "shapes_quiz_2"
    },
    { title: "Spacing", url: "/spacing", component: Spacing, slug: "spacing" }
  ],
  Keyboard: [
    {
      title: "Keyboard 1",
      url: "/keys_line",
      component: KeysLine,
      slug: "keyboard_1"
    },
    {
      title: "Keyboard 2",
      url: "/keys_car",
      component: KeysCar,
      slug: "keyboard_2"
    },
    {
      title: "Keyboard 3",
      url: "/keys3",
      component: IntroPage,
      slug: "keyboard_3"
    },
    {
      title: "Keyboard 4",
      url: "/keys4",
      component: IntroPage,
      slug: "keyboard_4"
    }
  ],
  Scales: [
    { title: "Scales 1", url: "/", component: IntroPage, slug: "scales_1" }
  ]
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
  return returnMe;
};
