import React, { Component } from "react";
import { Modal, Button, Message, Form, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { compose } from "redux";
import { closeModal, openModal } from "./modalActions.jsx";
import TextInput from "../TextInput";
import { completeChapterQuiz } from "../../../actions/userScoreActions";
import { changeUserInfo } from "../../../actions/authActions.jsx";

class NameCityModal extends Component {
  componentDidMount() {
    const { initialize, profile } = this.props;
    initialize(profile);
  }
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };
  handleSave = async values => {
    const { quizId, completeChapterQuiz, changeUserInfo } = this.props;
    const valuesWithQID = { ...values, quizId };
    await changeUserInfo(values);
    completeChapterQuiz(valuesWithQID);
  };
  render() {
    const trimMe = str => (str && str.trim().length ? str.trim() : null);
    const { closeModal, handleSubmit, profile, formFromRedux } = this.props;
    const { displayName, city } = profile;
    const newFields = formFromRedux.NameCity && formFromRedux.NameCity.values;
    const newDisplayName = newFields && newFields.displayName;
    const newCity = newFields && newFields.city;
    const questionMark = (
      <span>
        <Icon name="question circle" color="blue" />
        <Icon name="question circle" color="yellow" />
        <Icon name="question circle" color="red" />
      </span>
    );
    return (
      <Modal size="small" dimmer="blurring" open closeIcon onClose={closeModal}>
        <Modal.Header>One More Thing</Modal.Header>

        <Modal.Content>
          <Modal.Description>
            <p>What shall we call you?</p>
            <Form onSubmit={handleSubmit(this.handleSave)}>
              <Form.Group widths="equal">
                <Field
                  name="displayName"
                  component={TextInput}
                  type="text"
                  placeholder="Your Name"
                  label="Name"
                />
                <p style={{ margin: "auto 1rem" }}> from </p>
                <Field
                  name="city"
                  component={TextInput}
                  type="text"
                  placeholder="Your City"
                  label="City"
                />
              </Form.Group>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Message>
                  <Message.Header>
                    {trimMe(newDisplayName) ||
                      trimMe(displayName) ||
                      questionMark}{" "}
                    from {trimMe(newCity) || trimMe(city) || questionMark}
                  </Message.Header>
                </Message>
              </div>
              <Button>Save</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  formFromRedux: state.form
});
const actions = { closeModal, openModal, completeChapterQuiz, changeUserInfo };

export default compose(
  //   firestoreConnect(["users"]),
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "NameCity" })
)(NameCityModal);
