import React from "react";

const NumberCircle = ({ number = 8, keyboardScale, numberOfScale }) => {
  return (
    <div style={{ transform: `scale(${keyboardScale * 5})` }}>
      {numberObj[numberOfScale]}
    </div>
  );
};

export default NumberCircle;

const numberObj = {
  1: "\u2776",
  2: "\u2777",
  3: "\u2778",
  4: "\u2779",
  5: "\u277A",
  6: "\u277B",
  7: "\u277C",
  8: "\u277D"
};

// ❶
// DINGBAT NEGATIVE CIRCLED DIGIT ONE
// Unicode: U+2776, UTF-8: E2 9D B6

// ❷
// DINGBAT NEGATIVE CIRCLED DIGIT TWO
// Unicode: U+2777, UTF-8: E2 9D B7

// ❸
// DINGBAT NEGATIVE CIRCLED DIGIT THREE
// Unicode: U+2778, UTF-8: E2 9D B8
// ❹
// DINGBAT NEGATIVE CIRCLED DIGIT FOUR
// Unicode: U+2779, UTF-8: E2 9D B9
// ❺
// DINGBAT NEGATIVE CIRCLED DIGIT FIVE
// Unicode: U+277A, UTF-8: E2 9D BA
// ❻
// DINGBAT NEGATIVE CIRCLED DIGIT SIX
// Unicode: U+277B, UTF-8: E2 9D BB
