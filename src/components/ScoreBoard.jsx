import React from "react";
import { List, Icon } from "semantic-ui-react";

export default ({ questionNumber, style, scoreCard, names, goToQuestion }) => {
  return (
    <div style={{ ...style }}>
      <List divided relaxed>
        {names.map((question, i) => {
          const isCurrent = i === questionNumber;
          const wasCorrect = scoreCard[i];
          const wasWrong = scoreCard[i] === false;
          return (
            <List.Item
              key={i}
              as="a"
              onClick={() => goToQuestion(i)}
              style={
                isCurrent
                  ? { color: "black" }
                  : wasCorrect
                    ? { color: "green", opacity: 0.3 }
                    : wasWrong
                      ? { color: "red", opacity: 0.3 }
                      : { color: "lightgrey" }
              }
            >
              <Icon name={wasCorrect ? "square check" : "square outline"} />
              {question}
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};
