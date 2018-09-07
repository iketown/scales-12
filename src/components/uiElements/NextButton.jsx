import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default ({ active, to, text, center }) => {
  return (
    <div
      style={
        center
          ? {
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "2rem"
            }
          : {}
      }
    >
      {to && (
        <Button
          as={Link}
          to={active ? to : "/"}
          icon
          labelPosition="right"
          primary={active}
          disabled={!active}
        >
          <Icon name="arrow right" />
          {text || "Next"}
        </Button>
      )}
    </div>
  );
};
