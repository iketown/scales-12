import React, { Component } from "react";
import { Header, Container, Card, Item } from "semantic-ui-react";
import { ScaleCard } from "../components/uiElements/customDisplays";
import Layout from "../layout/Layout.jsx";

import KeyboardInline from "../components/keyboard/KeyboardInline.jsx";

import AmajorScale from "../images/AmajorScale.svg";
import DbMajorScale from "../images/DbMajorScale.svg";
import BbMajorScale from "../images/BbmajorScale.svg";
import { fullScales } from "../components/keyboard/keyboardShapes";
import { CMajorScale } from "../images";
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
                    sort of rite of passage for most musicians. The basics of
                    theory and harmony are all involved with the process, and
                    your music knowlege grows from there.
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
                  The <em>TWELVESCALES</em> system is different.
                </Header>
                <Item.Description>
                  <p>
                    We're going to skip over note names and key signatures and{" "}
                    <strong>start</strong> with the scales. There will be time
                    to dig into theory later, and by then you'll be attaching
                    names and concepts to things{" "}
                    <em>you already know how to play</em>. The early advantage
                    you get from knowing your scale-shapes will make those
                    lessons easier, and far more <em>meaningful</em>.
                  </p>
                  <p>
                    This isn't your usual beginner music lessons. It is a short
                    cut. It's a hack.{" "}
                    <strong>Your music teacher might not like it, </strong>
                    because they had to practice <em>for days</em> to learn
                    their scales. It's not fair. The TWELVESCALES system didn't
                    exist back then.
                  </p>
                  <p>Anyway, lets get to it.</p>
                  <p>
                    First, lets play a scale on the piano so we're all on the
                    same page.
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
            answers={[
              {
                bottomKey: "C1",
                topKey: "C2",
                correctAnswer: fullScales.C
              }
            ]}
          />

          <h3>Easy!</h3>
          <p>
            ...but "C" is just one of the 12 keys, so what about the other 11
            Major Scales?
          </p>
          <p>
            With a few days of practice, it's possible to memorize all 12 Major
            Scales. It's a lot of information, but no more difficult than, say,
            learning your multiplication tables.
          </p>
          <p>But we're going to do it the EASY way.</p>
        </Container>
      </Layout>
    );
  }
}
