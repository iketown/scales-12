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
    console.log("fsNotes", fsNotes);
    console.log("slug", slug);
    const myNotes = (fsNotes && fsNotes[slug]) || "";
    console.log("myNotes", myNotes);
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
