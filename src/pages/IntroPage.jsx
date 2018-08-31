import React from "react";
import {
  Header,
  Container,
  Image,
  Card,
  Button,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ScaleCard } from "../components/uiElements/customDisplays";
import Layout from "../layout/Layout.jsx";
import wrongNotes from "../images/wrongNotes.svg";
import whiteNotes from "../images/whiteNotes.svg";
import CmajorScale from "../images/CmajorScale.svg";
import AmajorScale from "../images/AmajorScale.svg";
import DbMajorScale from "../images/DbMajorScale.svg";
import BbMajorScale from "../images/BbmajorScale.svg";

const ScaleImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  }
`;
export default () => {
  return (
    <Layout>
      <Header as="h1">Welcome!</Header>
      <Container>
        <p>So you wanna learn your scales? excellent.</p>{" "}
        <p>
          Learning major scales on the piano will exponentially boost your
          ability and understanding. You'll be surprised at how much easier and
          more fun the piano is once you <em>learn your scales</em>.
        </p>
        <p>
          If you’ve ever tried playing a song on a piano (hunt and peck method),
          sometimes it can feel like this:
        </p>
        <ScaleCard src={wrongNotes} title={""} height="12rem" />
        <p>Just a wide open field of nope.</p>
        <p>
          But then you see someone else play that same piano, and it sounds
          great! Even if they've never played this song before, they somehow{" "}
          <em>know</em> which keys to use. How do they do that?
        </p>
        <p>
          The secret is that they know the 'shape' of the right notes. The notes
          make a pattern. That pattern is called...
        </p>
        <h3>The Major Scale</h3>
        <p>Sometimes, the Major Scale pattern is simply all white keys.</p>
        <ScaleCard src={whiteNotes} title="all white keys" />
        <p>
          So lets picture that as a line of dots on the keyboard. This is the
          'shape' of the <strong>C Major Scale</strong>.
        </p>
        <ScaleCard src={CmajorScale} title={"C major"} />
        <p>Easy!</p>
        <p>
          ...but "C" is just one of the 12 keys, so what about the other 11
          Major Scales?
        </p>
        <p>
          Each (starting) key has its own Major Scale <em>shape</em>. Here are a
          few examples.
        </p>
        <Card.Group centered>
          <ScaleCard src={AmajorScale} title={"A Major"} />
          <ScaleCard src={DbMajorScale} title={"Db Major"} />
          <ScaleCard src={BbMajorScale} title={"Bb Major"} />
        </Card.Group>
        <p>
          With a few days of practice, its totally possible to memorize the
          shape of all 12 Major Scales... (this is what most pianists do at some
          point)
        </p>
        <p>But there's a BETTER WAY</p>
        <Button as={Link} to="/page2" primary icon labelPosition="right">
          Next <Icon name="arrow circle right" />
        </Button>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Layout>
  );
};
