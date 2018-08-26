import React from "react";
import Layout from "../layout/Layout.jsx";
import { Header, Container } from "semantic-ui-react";
import Keyboard from "../components/keyboard/Keyboard.jsx";

export default () => {
  return (
    <Layout>
      <Header as="h1">Welcome!</Header>
      <Container>
        <p>
          This is a quick and simple way to learn all 12 major scales on the
          piano.
        </p>
        <p>
          First, click all the white keys from the lower C on the left to the
          high C on the right (turn computer speakers on for sound)
        </p>
        <Keyboard
          bottomKey="C1"
          topKey="C2"
          keysToLabel={["C1", "C2"]}
          correctAnswer={["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2"]}
          keyboardId="myId"
          showFirst={false}
          showAll={true}
          showShape={false}
          scale={0.5}
        />
      </Container>
    </Layout>
  );
};
