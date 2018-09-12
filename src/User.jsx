import React, { Component } from "react";
import db from "./utils/firebase";
import { connect } from "react-redux";
import { firebaseThunk } from "./actions/userScoreActions";
import { Button } from "semantic-ui-react";
class User extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: ""
  };
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addUser = e => {
    e.preventDefault();

    const { email, firstName, lastName } = this.state;
    const userRef = db
      .collection("users")
      .add({
        email,
        firstName,
        lastName
      })
      .then(docRef => console.log("doc written with id:", docRef.id))
      .catch(error => console.error("error adding document:", error));
    this.setState({
      email: "",
      firstName: "",
      lastName: ""
    });
  };
  callFirebase = () => {
    this.props.dispatch(firebaseThunk("67THspUE2j5IfQQ8htVl"));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.updateInput}
            value={this.state.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.updateInput}
            value={this.state.lastName}
          />
          <input
            type="email"
            name="email"
            placeholder="email@example.org"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <button type="submit">Submit</button>
        </form>

        <Button onClick={this.callFirebase}>FB</Button>
      </div>
    );
  }
}

export default connect()(User);
