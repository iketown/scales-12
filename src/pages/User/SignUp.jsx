import React, { Component } from "react";
import Layout from "../../layout/Layout.jsx";
import { Form } from "semantic-ui-react";

export default class SignUp extends Component {
  render() {
    return (
      <Layout>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
            <Form.Input fluid label="email" placeholder="email" />
          </Form.Group>
        </Form>
      </Layout>
    );
  }
}
