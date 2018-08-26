import React from "react";
import { List } from "semantic-ui-react";

const fakeQuestions = [
  { content: "first one" },
  { content: "second one" },
  { content: "third one" },
  { content: "fourth one" },
  { content: "fifth one" },
  { content: "sixth one" }
];
export default ({ increment, questionNumber }) => {
  return (
    <div>
      <List divided relaxed>
        {fakeQuestions.map((question, i) => (
          <List.Item
            icon={i === questionNumber ? "check square" : "square outline"}
            content={question.content}
          />
        ))}
      </List>
      <button onClick={increment}>inc</button>
    </div>
  );
};
