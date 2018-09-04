import React, { Component } from "react";

import Layout from "../layout/Layout.jsx";
import { DotCardsGrid } from "./Page2.jsx";
import { scaleShapes2 } from "../components/keyboard/keyboardShapes";
import { Button } from "semantic-ui-react";
import { NextButton } from "../components/uiElements/index";
import Dotboard8 from "../components/dotboard/Dotboard8.jsx";
export default class Page3 extends Component {
  state = {
    hide2ndShape: false
  };
  render() {
    return (
      <Layout>
        <p>
          We've already cut the complexity down by a lot, by simply memorizing
          <strong> two shapes </strong>
          for each scale, instead of
          <strong> eight notes</strong>.
        </p>
        <p>
          <em>but it gets easier than that.</em>
        </p>
        <p>
          Look again at this chart. see how the{" "}
          <strong>2nd shape of the 'C' scale</strong> matches the
          <strong> first shape of the 'G' scale</strong>?
        </p>
        <p>
          ...and the 2nd shape of the 'G' scale matches the 1st shape of the 'D'
          scale?
        </p>
        <p>
          ...and the 2nd shape of the 'D' scale matches the 1st shape of the 'A'
          scale ? . . . and on and on and on.
        </p>

        <DotCardsGrid>
          {Object.entries(scaleShapes2).map(scaleShape => (
            <Dotboard8
              bottomShape={scaleShape[1].bottom}
              topShape={scaleShape[1].top}
              shapesSelected={["car", "truck", "wagon", "line"]}
              root={scaleShape[0]}
              split={true}
              colorAll={true}
              hide2ndShape={this.state.hide2ndShape}
            />
          ))}
        </DotCardsGrid>
        <p>
          we'll talk about how these scales connect later, but when we start
          playing them, you'll find you don't even have to learn the 2nd shape.
        </p>
        <p>
          you really only have to learn the{" "}
          <Button
            primary={!this.state.hide2ndShape}
            disabled={this.state.hide2ndShape}
            onClick={() => this.setState({ hide2ndShape: true })}
          >
            FIRST SHAPE
          </Button>
        </p>
        <p>
          ...and it gets even easier than that, but lets not get ahead of
          ourselves.
        </p>
        <p>let's introduce the shapes.</p>
        <NextButton active={this.state.hide2ndShape} to="/Page4" />
      </Layout>
    );
  }
}
