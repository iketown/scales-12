import React, { Component } from "react";
import { compose } from "redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import { Modal, Button, Grid, Segment, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal, openModal } from "./modalActions";
import { Field, reduxForm } from "redux-form";
import { takeNotes } from "../../../actions/notesActions";
class Notes extends Component {
  componentDidMount() {
    const { fsNotes, slug, users } = this.props;
    console.log("fsNotes", fsNotes);
    console.log("slug", slug);
    const myNotes = fsNotes[slug] || "";
    console.log("myNotes", myNotes);
    this.props.initialize({ notes: myNotes });
  }
  appendAndSubmit = values => {
    const { takeNotes, slug } = this.props;
    const decoratedValues = { slug, ...values };
    takeNotes(decoratedValues);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form
        size="large"
        // onSubmit={handleSubmit(takeNotes)}
        onSubmit={handleSubmit(this.appendAndSubmit)}
      >
        <Segment>
          <Field name="notes" type="textarea" component="textarea" />
          <Button fluid size="large" color="teal">
            Save
          </Button>
        </Segment>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  fsNotes: state.firebase.profile.notes
});
const actions = { closeModal, openModal, takeNotes };

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "notes" })
)(Notes);
