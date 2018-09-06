import React from "react";
import posed from "react-pose";
import styled from "styled-components";
import { HoverFloat, CardOverlay } from "./index";
import { Card } from "semantic-ui-react";

const CardFader = posed.div({
  correct: { opacity: 1, transform: "scale(1.1)" },
  regular: { opacity: 0.8, transform: "scale(1)" },
  wrong: { opacity: 0.5, transform: "scale(0.8)" }
});

const ImageDiv = styled.div`
  background-image: url(${p => (p.showImage ? p.fullPic : p.hintPic)});
  height: 10rem;
  background-size: contain;
  background-repeat: no-repeat;
`;

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
            <ImageDiv
              fullPic={fullPic}
              hintPic={hintPic}
              showImage={showImage}
              onClick={onClick}
            />
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
