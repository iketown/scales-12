import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
export const ScaleCard = ({ src, title, height }) => (
  <Card>
    <Image
      src={src}
      alt={title}
      style={{ height: height || "10rem", padding: "1rem" }}
    />
    <Card.Content>
      <Card.Description>{title}</Card.Description>
    </Card.Content>
  </Card>
);

const Fader = posed.div({
  in: { opacity: 1 },
  out: { opacity: 0, delay: 400 }
});
export const FadeMe = ({ children, pose }) => (
  <Fader pose={pose}>{children}</Fader>
);

const AnimatedPage = posed.div({
  before: { opacity: 0, x: "40vw" },
  enter: { opacity: 1, x: "0vw", delay: 300 },
  exit: { opacity: 0, x: "-40vw" }
});
const Page = styled(AnimatedPage)`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
`;
export class PageTurner extends Component {
  render() {
    const { children, showIndex, advance } = this.props;
    return (
      <PoseGroup preEnterPose="before">
        {children.length &&
          children.map((child, i) => {
            if (i === showIndex)
              return (
                <Page key={`pose ${i}`}>
                  <div>
                    {child}
                    <Button onClick={advance}>
                      {child.props.endingText || "continue"}
                    </Button>
                  </div>
                </Page>
              );
          })}
      </PoseGroup>
    );
  }
}
