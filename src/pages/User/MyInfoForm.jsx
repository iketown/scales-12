import React, { Component } from "react";
import { changeUserInfo } from "../../actions/authActions.jsx";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "semantic-ui-react";
import TextInput from "../../components/uiElements/TextInput.jsx";
import { connect } from "react-redux";
import { renderComponent } from "recompose";

class MyInfoForm extends Component {
  submitForm = values => {
    const { changeUserInfo, closeForm } = this.props;
    changeUserInfo(values);
    closeForm();
  };
  render() {
    const { handleSubmit, changeUserInfo, closeForm } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.submitForm)}>
        <Form.Field>
          <label>Name</label>
          <Field name="displayName" component="input" />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <Field name="city" component="input" />
        </Form.Field>
        <Button.Group attached="bottom">
          <Button size="tiny" primary>
            save
          </Button>
          <Button size="tiny" onClick={closeForm}>
            cancel
          </Button>
        </Button.Group>
      </Form>
    );
  }
}
const mapState = state => ({
  profile: state.firebase.profile,
  initialValues: state.firebase.profile
});
const actions = { changeUserInfo };

export default connect(
  mapState,
  actions
)(reduxForm({ form: "userProfile" })(MyInfoForm));
