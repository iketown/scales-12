import slugify from "slugify";
import IntroPage from "../pages/IntroPage.jsx";
import WhatsAScale from "../pages/WhatsAScale.jsx";
import ABetterWay from "../pages/ABetterWay.jsx";
import TheShapes from "../pages/TheShapes";
import TheShapes2 from "../pages/TheShapes2";
import FlippedShapes from "../pages/FlippedShapes";
import ShapesQuiz1 from "../pages/ShapesQuiz1";
import ShapesQuiz2 from "../pages/ShapesQuiz2.jsx";
// import Spacing from "../pages/Spacing";
import KeysLine from "../pages/KeysLine";
import KeysCar from "../pages/KeysCar";
import KeysTrucks from "../pages/KeysTrucks.jsx";
import KeysWagons from "../pages/KeysWagons.jsx";
import KeysAll from "../pages/KeysAll.jsx";
import Places1 from "../pages/Places1";
import PlacesTest1 from "../pages/PlacesTest1";
import PlacesTest2 from "../pages/PlacesTest2";
import Scales1 from "../pages/Scales1.jsx";
import Scales2 from "../pages/Scales2.jsx";
import Scales3 from "../pages/Scales3.jsx";
import Final from "../pages/Final.jsx";
export const chapters = {
  Introduction: [
    { title: "Intro", component: IntroPage, slug: "intro_1" },
    {
      title: "What's a scale?",
      component: WhatsAScale,
      slug: "whats_a_scale"
    },
    {
      title: "A Better Way",
      component: ABetterWay,
      slug: "a_better_way"
    }
  ],
  Shapes: [
    {
      title: "The Shapes",
      component: TheShapes,
      slug: "the_shapes"
    },
    {
      title: "The Shapes 2",
      component: TheShapes2,
      slug: "the_shapes_2"
    },
    {
      title: "Shapes Quiz 1",
      component: ShapesQuiz1,
      slug: "shapes_quiz_1"
    },
    {
      title: "Flipped Shapes",
      component: FlippedShapes,
      slug: "flipped_shapes"
    },
    {
      title: "Shapes Quiz 2",
      component: ShapesQuiz2,
      slug: "shapes_quiz_2"
    }
    // { title: "Spacing", component: Spacing, slug: "spacing" }
  ],
  Keyboard: [
    {
      title: "The Lines",
      component: KeysLine,
      slug: "keys_line"
    },
    {
      title: "The Cars",
      component: KeysCar,
      slug: "keys_cars"
    },
    {
      title: "The Trucks",
      component: KeysTrucks,
      slug: "keys_trucks"
    },
    {
      title: "The Wagons",
      component: KeysWagons,
      slug: "keys_wagons"
    },
    {
      title: "All Shapes",
      component: KeysAll,
      slug: "all_shapes"
    }
  ],
  Places: [
    { title: "Places 1", component: Places1, slug: "places_1" },
    { title: "Places Test 1", component: PlacesTest1, slug: "places_test_1" },
    { title: "Places Test 2", component: PlacesTest2, slug: "places_test_2" }
  ],
  Scales: [
    { title: "Scales 1", component: Scales1, slug: "scales_1" },
    { title: "Scales 2", component: Scales2, slug: "scales_2" },
    { title: "Scales 3", component: Scales3, slug: "scales_3" },
    { title: "The End", component: Final, slug: "the_end" }
  ]
};

export const lessonsArr = Object.keys(chapters).reduce((arr, key) => {
  const thisArr = chapters[key];
  const newArr = thisArr.map(lesson => {
    lesson.chapter = key;
    lesson.url = `/${lesson.slug}`;
    return lesson;
  });
  return [...arr, ...newArr];
}, []);

const dashboard = { title: "Dashboard", slug: "dashboard" };
export const allPagesArr = [...lessonsArr, dashboard];

export const getPreviousAndNextLessons = url => {
  const myIndex = lessonsArr.findIndex(lesson => lesson.url === url);
  const thisLesson = lessonsArr[myIndex];
  const nextLesson = lessonsArr[myIndex + 1];
  const prevLesson = lessonsArr[myIndex - 1];
  const returnMe = { myIndex, thisLesson, nextLesson, prevLesson };
  return returnMe;
};
