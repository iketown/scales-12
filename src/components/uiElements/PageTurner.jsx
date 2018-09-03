import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

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
export default class PageTurner extends Component {
  render() {
    const { children, showIndex, advance, goBack } = this.props;
    return (
      <PoseGroup preEnterPose="before">
        {children.length &&
          children.map((child, i) => {
            if (i === showIndex)
              return (
                <Page key={`pose ${i}`}>
                  <div>
                    {child}
                    <Button onClick={goBack}>
                      {child.props.goBack || "go back"}
                    </Button>
                    <Button onClick={advance}>
                      {child.props.continue || "continue"}
                    </Button>
                  </div>
                </Page>
              );
          })}
      </PoseGroup>
    );
  }
}
