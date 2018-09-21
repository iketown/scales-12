import React, { Component } from "react";
import { Button, Header, Image, Step, Icon } from "semantic-ui-react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import Layout from "../layout/Layout";

const SocialDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
`;
export default class TheEnd extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The End</Header.Content>
        </Header>

        <p>You did it!</p>
        <p>Learning all TWELVE MAJOR SCALES wasn't so bad, was it?</p>
        <p>
          Now any time you see a piano, think about those shapes, where they go,
          and how they fit together. Its easy!
        </p>
        <p>
          If this helped you, pass it on. Anyone can learn their major scales -
          just send them to <strong>12Scales.com</strong>
        </p>
        <p>This project was created by Brian Eichenberger.</p>
        <p>
          I'd love to hear from you - Let me know what you liked / didn't like
          about the course, so I can continue to improve it.
        </p>
        <SocialDiv>
          <SocialIcon url="http://twitter.com/ike_burger" />
          <SocialIcon url="https://www.instagram.com/brianeichenberger/" />
          <SocialIcon url="https://www.facebook.com/brian.eichenberger" />
          <SocialIcon url="mailto:ike76@me.com" />
          <SocialIcon url="https://github.com/ike76/scales-12" />
        </SocialDiv>
      </Layout>
    );
  }
}
