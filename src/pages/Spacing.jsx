import React, { Component } from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { Image, Header } from "semantic-ui-react";
import {
  keyboardSpacing,
  carSpacing,
  flipCarSpacing,
  carShapeAnimation
} from "../images";
// import { NextButton } from "../components/uiElements";
export default class Page6 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>Spacing</Header.Content>
        </Header>
        <p>Next we'll transfer these shapes onto the keyboard.</p>
        <p>
          ...but first, a quick note about spacing. This will save you from a
          few wrong notes in the future.
        </p>
        <p>
          There are a few scenarios where there will be more than one white key
          which would work to make a shape.
        </p>
        <p>
          Sometimes it helps to look up at the top of the keys, where all the
          black and white keys are present, and have the same width, so you can
          easily see which keys you're using / skipping. See the green box at
          the top of the keys?
        </p>

        <Image src={keyboardSpacing} alt="" width="300px" />
        <p>
          Even though the {dots[1]} {dots[2]} {dots[3]} {dots[4]} keys seem
          evenly spaced on the bottom, if you look at the top, you can see there
          is a black key separating {dots[1]} & {dots[2]}, and another key
          separating {dots[2]} & {dots[3]}, while keys {dots[3]} & {dots[4]}{" "}
          have nothing between them.
        </p>
        <p>
          <strong>Every</strong> shape has that same left-to-right spacing, when
          you look at the top:
          <BoxDiv>
            {dots[1]}
            {dots.red}
            {dots[2]}
            {dots.red}
            {dots[3]}
            {dots[4]}
          </BoxDiv>
        </p>
        <p>
          go ahead, say it out loud. "<strong>ONE</strong> skip{" "}
          <strong>TWO</strong> skip <strong>THREE</strong> <strong>FOUR</strong>
          "
        </p>
        <p>
          This becomes important in some cases where it may not be clear which
          white key to use.
        </p>
        <p>
          In this image, notice how there are two options for white keys where
          the {dots[4]} could go and it would still (sort of) look like a 'Car'
          shape.
        </p>
        <Image src={carSpacing} alt="" width="300px" />
        <p>
          using the
          <BoxDiv>
            {dots[1]}
            {dots.red}
            {dots[2]}
            {dots.red}
            {dots[3]}
            {dots[4]}
          </BoxDiv>
          spacing, you know that there is no space between the {dots[3]} and{" "}
          {dots[4]}.
        </p>
        <p>
          And again, in the next image, notice that there must be a space
          between {dots[1]} and {dots[2]}.
        </p>
        <Image src={flipCarSpacing} alt="" width="300px" />
        <p>
          This will become second nature to you in no time, but while you're
          getting started, if you find yourself wondering which white key you're
          supposed to use, remember:
        </p>
        <p>
          "<strong>ONE</strong> skip <strong>TWO</strong> skip{" "}
          <strong>THREE</strong> <strong>FOUR</strong>"
        </p>
        <p>
          Dont worry if this seems like its getting complicated. After a little
          practice, the pictures and dots and Xs go away, and you just see the
          right notes.
        </p>
        <Image src={carShapeAnimation} alt="" width="300px" />
        {/* <NextButton active to="/page7" center /> */}
      </Layout>
    );
  }
}

const BoxDiv = styled.div`
  border: 0.5px solid #7ed321;
  padding: 3px;
  display: inline-flex;
  margin: 0px 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #9c9c9c94;
  & span {
    margin: 3px;
  }
`;
const DotSpan = styled.span`
  font-size: 1.5rem;
  color: ${p => (p.red ? "red" : "darkslategrey")};
`;
const dots = {
  1: <DotSpan>❶</DotSpan>,
  2: <DotSpan>❷</DotSpan>,
  3: <DotSpan>❸</DotSpan>,
  4: <DotSpan>❹</DotSpan>,
  red: <DotSpan red>⊗</DotSpan>
};
