import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import Layout from "../layout/Layout";

const SocialDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
`;
const EmojiDiv = styled.div`
  font-size: 3rem;
  margin: 2rem;
  display: inline-block;
`;
export default class ThankYou extends Component {
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
            <EmojiDiv>💃🏽</EmojiDiv>
            Thank You!
            <EmojiDiv>🕺🏻</EmojiDiv>
          </h1>
        </header>

        <SocialDiv>
          <SocialIcon url="http://twitter.com/brianeichen" />
          <SocialIcon url="https://www.instagram.com/brianeichenberger/" />
          <SocialIcon url="https://www.facebook.com/brian.eichenberger" />
          <SocialIcon url="mailto:ike76@me.com" />
          <SocialIcon url="https://github.com/ike76/scales-12" />
        </SocialDiv>
      </Layout>
    );
  }
}
