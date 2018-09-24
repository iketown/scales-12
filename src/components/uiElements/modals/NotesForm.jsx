import React, { Component } from "react";
import { compose } from "redux";
import { Button, Segment, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal, openModal } from "./modalActions";
import { Field, reduxForm } from "redux-form";
import { takeNotes } from "../../../actions/notesActions";
class Notes extends Component {
  componentDidMount() {
    const { fsNotes, slug } = this.props;
    const myNotes = (fsNotes && fsNotes[slug]) || "";
    this.props.initialize({
      notes: myNotes.text
    });
  }
  appendAndSubmit = values => {
    const { takeNotes, slug } = this.props;
    const valuesWithSlug = { slug, ...values };
    takeNotes(valuesWithSlug);
  };
  render() {
    const { handleSubmit, pristine } = this.props;
    return (
      <Form
        size="large"
        // onSubmit={handleSubmit(takeNotes)}
        onSubmit={handleSubmit(this.appendAndSubmit)}
      >
        <Segment>
          <Field name="notes" type="textarea" component="textarea" />
          <Button fluid size="large" color="teal" disabled={pristine}>
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
