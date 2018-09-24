import React from "react";
import { Button } from "semantic-ui-react";
import { showCheaterButton } from "../../utils/generalConfig";

const CheaterButton = ({ onClick }) => {
  return showCheaterButton ? (
    <Button color="red" onClick={onClick}>
      Cheat!
    </Button>
  ) : null;
};

export default CheaterButton;
