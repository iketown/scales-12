import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import Layout from "../layout/Layout";
import DonateButton from "../components/uiElements/DonateButton";

const SocialDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
`;
const EmojiDiv = styled.span`
  font-size: 3rem;
  margin: 2rem;
  display: inline-block;
`;
export default class TheEnd extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path} hideNav>
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "2rem"
          }}
        >
          <h1>
            <EmojiDiv>
              <span role="img" aria-label="dancing person">
                💃🏽
              </span>
            </EmojiDiv>
            You DID it!
            <EmojiDiv role="img" aria-label="dancing person">
              <span role="img" aria-label="dancing person">
                🕺🏻
              </span>
            </EmojiDiv>
          </h1>
        </header>
        <p>Learning all TWELVE MAJOR SCALES wasn't so bad, was it?</p>
        <p>
          Now any time you see a piano, see if you can remember the four shapes
          and where they go. Sit down and try to play all 12 Major scales.
          <li>Amaze your friends!</li>
          <li>Confuse your enemies!</li>
        </p>
        <h3>Scales are just the beginning</h3>
        <p>
          Major Scales give you the pathway to play millions of melodies. Do you
          remember:
        </p>
        <ul>
          <li>Jingle Bells? (333, 333, 35123)</li>
          <li>Happy Birthday? (556587)</li>
        </ul>
        <p>
          Or find your own melody, and try to play it in all 12 keys! Its really
          not that hard, now that you know your Major scales.
        </p>
        <p>
          If this helped you, pass it on! Send your friends to{" "}
          <strong>12Scales.com</strong>
        </p>
        <hr />
        <br />
        <p>This project was designed and coded by Brian Eichenberger.</p>
        <p>
          I'd love to hear from you - Let me know what you liked / didn't like
          about the course, so I can continue to improve it.
        </p>
        <SocialDiv>
          <SocialIcon url="http://twitter.com/brianeichen" />
          <SocialIcon url="https://www.instagram.com/brianeichenberger/" />
          <SocialIcon url="https://www.facebook.com/brian.eichenberger" />
          <SocialIcon url="mailto:ike76@me.com" />
          <SocialIcon url="https://github.com/ike76/scales-12" />
        </SocialDiv>
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          If you'd like to support future learning projects of this type
          <div style={{ marginTop: "1rem" }}>
            <DonateButton />
          </div>
        </div>
      </Layout>
    );
  }
}
