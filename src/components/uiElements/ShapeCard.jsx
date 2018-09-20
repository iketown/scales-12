import React from "react";
import posed from "react-pose";
import { HoverFloat, CardOverlay } from "./index";
import { Card, Image } from "semantic-ui-react";

const CardFader = posed.div({
  correct: { opacity: 1, transform: "scale(1.1)" },
  regular: { opacity: 0.8, transform: "scale(1)" },
  wrong: { opacity: 0.5, transform: "scale(0.8)" }
});

const ShapeCard = props => {
  const {
    fullPic,
    hintPic,
    header,
    showImage,
    correct,
    onClick,
    wrong
  } = props;
  return (
    <HoverFloat>
      <CardFader
        pose={correct ? "correct" : wrong ? "wrong" : "regular"}
        style={{ position: "relative" }}
      >
        <Card>
          <Card.Content>
            <Image src={correct ? fullPic : hintPic} onClick={onClick} fluid />
            {/* <ImageDiv
              fullPic={fullPic}
              hintPic={hintPic}
              showImage={showImage}
              onClick={onClick}
            /> */}
            <Card.Header>{showImage ? <span>{header}</span> : " "}</Card.Header>
            {wrong && <CardOverlay shape="x" />}
            {correct && <CardOverlay shape="check" />}
          </Card.Content>
        </Card>
      </CardFader>
    </HoverFloat>
  );
};

export default ShapeCard;
