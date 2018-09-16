import React from "react";
import {
  Form,
  Segment,
  Button,
  Label,
  Divider,
  Input
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../components/uiElements/TextInput.jsx";
import { signInUser, socialLogin } from "../../actions/authActions.jsx";
import SocialLogin from "./SocialLogin.jsx";

const actions = {
  signInUser,
  socialLogin
};

const LoginForm = ({ signInUser, handleSubmit, error, socialLogin }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(signInUser)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label color="red" basic>
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
