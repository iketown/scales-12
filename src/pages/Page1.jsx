import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button, Icon } from "semantic-ui-react";
import Layout from "../layout/Layout.jsx";
import { fullScales } from "../components/keyboard/keyboardShapes";
import KeyboardDisplayOnly from "../components/keyboard/KeyboardDisplayOnly";

export default class Page1 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
        </Header>
        <p>
          There are <strong>twelve</strong> Major Scales, and each scale has{" "}
          <strong>eight</strong> notes.
        </p>
        <p>
          Traditionally, when a piano student wants to learn scales, we would
          start talking about note-names, sharps and flats.
        </p>
        <p>
          The B♭ (pronounced 'B Flat') Major scale would be described as{" "}
          <strong>B♭, C, D, E♭, F, G, A, B♭</strong>.
        </p>
        <p>
          We're going to take a totally different approach, and describe each
          scale as a simple series of
          <strong> UP </strong>
          notes and
          <strong> DOWN </strong>
          notes.
        </p>
        <p>Look at this one, called the B♭ Major Scale.</p>
        <div style={{ justifySelf: "center" }}>
          <KeyboardDisplayOnly
            bottomKey={"F1"}
            topKey={"B2"}
            keysToLabel={""}
            notesToShow={fullScales["Bb"]}
            keyboardScale={0.4}
            showCircles={true}
            displayText={"Bb major Scale"}
            colorAll={true}
          />
        </div>
        <p>
          For the moment, let's think of that as{" "}
          <strong>UP • down • down • UP • down • down • down • UP</strong>
        </p>
        <p>(you don't have to memorize that)</p>
        <Button
          primary
          as={Link}
          to="/a-better-way"
          icon
          labelPosition="right"
          onClick={this.increment}
        >
          <Icon name="arrow right" />
          Next
        </Button>
        <div style={{ height: "50px" }} />
      </Layout>
    );
  }
}
