import React, { Component } from "react";
import { Header, Container, Image, Item, Popup } from "semantic-ui-react";
import { ScaleCard } from "../components/uiElements/customDisplays";
import Layout from "../layout/Layout.jsx";

import KeyboardInline from "../components/keyboard/KeyboardInline.jsx";

import AmajorScale from "../images/AmajorScale.svg";
import DbMajorScale from "../images/DbMajorScale.svg";
import BbMajorScale from "../images/BbmajorScale.svg";
import { fullScales } from "../components/keyboard/keyboardShapes";
import { CMajorScale, ScalesChart } from "../images";
import { StarterIcon } from "../components/uiElements/index";

export default class IntroPage extends Component {
  state = {
    CScaleDone: false
  };
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h1">
          <Header.Content>Major Scales</Header.Content>
        </Header>
        <Container>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Image size="medium" src={CMajorScale} />
                <Item.Header as="h4">This is where it all starts.</Item.Header>
                <Item.Description>
                  <p>
                    Major Scales are essential to learn and understand. They are
                    the <em>building blocks</em> upon which <em>most music</em>{" "}
                    is based.
                  </p>
                  <p>
                    The process of learning major scales in all 12 keys is a
                    rite of passage for most musicians.
                  </p>
                  <p>
                    However, as a beginning student, Major Scales can seem
                    daunting. It's a lot of information to memorize. The
                    keyboard is a well designed system, but the{" "}
                    <em>learning curve</em> of understanding{" "}
                    <em>why things are the way they are</em> can be steep enough
                    to discourage many would-be players from continuing.
                  </p>
                  <br />
                </Item.Description>
                <Header as="h3">
                  The <em>12Scales</em> system is different.
                </Header>
                <Item.Description>
                  <p>
                    We're going to skip over note names and key signatures and{" "}
                    <em>start</em> with. . . you guessed it,{" "}
                    <strong>The Scales</strong>. Later, if/when you want to
                    learn more about theory and harmony, by that point you'll
                    simply be attaching names and concepts to things{" "}
                    <em>you already know how to play</em>. The early advantage
                    you'll get from knowing these 12 scales will make those
                    later lessons easier, and far more <em>meaningful</em>.
                  </p>
                  <p>
                    Remember learning how to tie your shoes? Did you learn about
                    the <em>doubly slipped reef knot</em>, followed by basic{" "}
                    <em>half hitch</em> theory and use cases? Nope. It was all
                    <em>bunny ears</em>, or the{" "}
                    <em>bunny goes around the tree and back in the hole</em>.
                    Whatever it takes to make the knot happen.
                  </p>
                  <p>
                    These lesson are more of the{" "}
                    <em>bunny goes around the tree</em>
                    variety. They're not your usual beginner music lessons.
                    They're a short cut. A hack.
                  </p>
                  <p>Anyway, let's get to it.</p>
                  <p>
                    First, let's play a scale on the piano so we can see what
                    we're aiming at.
                  </p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>

          <KeyboardInline
            keyboardId="kb000Cmajor"
            bottomKey="C1"
            topKey="C2"
            showAllCircles={true}
            keyboardScale={0.54}
            callbackWhenFinished={() => this.setState({ CScaleDone: true })}
            messageInstructions={{
              icon: "question circle",
              header: "C Major Scale",
              content: (
                <p>
                  Click all the circles from left to right, starting at the{" "}
                  <StarterIcon />
                </p>
              )
            }}
            instructions="Turn on your speakers and click on the dots in order,
            1 thru 8."
            continueText="Brilliant!"
            answers={[
              {
                bottomKey: "C1",
                topKey: "C2",
                correctAnswer: fullScales.C
              }
            ]}
          />

          <h3>Easy! right?</h3>
          <p>
            ...but "C" is just one of the 12 keys, so what about the other 11
            Major Scales?
          </p>
          <p>
            Well, you could get one of{" "}
            <Popup
              size="huge"
              trigger={<strong>those graphs</strong>}
              header="Scales Chart"
              content={<Image size="huge" src={ScalesChart} />}
            />
            , and with a few days of practice, you could memorize all 12 Major
            Scales. It's a lot of information, but no more difficult than, say,
            learning your multiplication tables.
          </p>
          <p>But we're going to do it the EASY way.</p>
        </Container>
      </Layout>
    );
  }
}
