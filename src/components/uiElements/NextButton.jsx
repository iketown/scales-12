import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default ({ active, to, text }) => {
  return (
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
  );
};
