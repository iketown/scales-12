import React, { Component } from "react";
import { compose } from "redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import {
  Modal,
  Button,
  Grid,
  Segment,
  Form,
  Checkbox
} from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal, openModal } from "./modalActions";
import { Field, reduxForm } from "redux-form";
import { takeNotes } from "../../../actions/notesActions";
class Notes extends Component {
  componentDidMount() {
    const { fsNotes, slug, users } = this.props;
    console.log("fsNotes", fsNotes);
    console.log("slug", slug);
    const myNotes = (fsNotes && fsNotes[slug]) || "";
    console.log("myNotes", myNotes);
    this.props.initialize({
      notes: myNotes.text,
      sendToAdmin: myNotes.sendToAdmin
    });
  }
  appendAndSubmit = values => {
    const { takeNotes, slug } = this.props;
    const valuesWithSlug = { slug, ...values };
    takeNotes(valuesWithSlug);
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
          {/* <label style={{ margin: "10px" }}>
            <Field
              control={Checkbox}
              name="sendToAdmin"
              label="send note to admin"
              type="checkbox"
              component="input"
            />
            send to admin
          </label> */}
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
