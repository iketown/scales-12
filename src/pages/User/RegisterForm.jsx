import React from "react";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../components/uiElements/TextInput.jsx";
import { registerUser } from "../../actions/authActions.jsx";
import SocialLogin from "./SocialLogin.jsx";
const validate = combineValidators({
  displayName: isRequired("display name"),
  email: isRequired("email"),
  password: isRequired("password")
});

const RegisterForm = ({
  handleSubmit,
  registerUser,
  error,
  invalid,
  submitting
}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Display Name"
          />

          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Button
            disabled={invalid || submitting}
            fluid
            size="large"
            color="teal"
          >
            Register
          </Button>
          <Divider horizontal>Or</Divider>
          <SocialLogin />
        </Segment>
      </Form>
    </div>
  );
};

const actions = {
  registerUser
};
export default connect(
  null,
  actions
)(reduxForm({ form: "registerForm", validate })(RegisterForm));
