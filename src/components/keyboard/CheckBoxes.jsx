import React from "react";
import { Icon } from "semantic-ui-react";

const CheckBoxes = ({ totalAnswersCount, currentIndex }) => {
  const array = Array(totalAnswersCount).fill("");
  return (
    <div style={{ marginBottom: "1rem" }}>
      {array.map((a, i) => {
        const props =
          i < currentIndex
            ? { name: " check square", color: "green" }
            : i === currentIndex
              ? {
                  name: " outline square",
                  color: "black",
                  loading: true
                }
              : { name: "outline square", color: "grey" };
        return <Icon {...props} size="small" />;
      })}
    </div>
  );
};

export default CheckBoxes;
