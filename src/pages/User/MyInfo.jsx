import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Card, Button, Form, Icon } from "semantic-ui-react";
import MyInfoForm from "./MyInfoForm.jsx";

class MyInfo extends Component {
  state = {
    showForm: false
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  closeForm = () => {
    this.setState({ showForm: false });
  };
  render() {
    const { profile, handleSubmit } = this.props;
    const nameBool =
      profile.displayName && profile.displayName.trim().length > 0;
    const cityBool = profile.city && profile.city.trim().length > 0;
    return (
      <div>
        <Card>
          {/* <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" /> */}
          <Card.Content>
            <Card.Header>
              {profile &&
                !this.state.showForm && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      {(nameBool && profile.displayName) || (
                        <Icon
                          name="question circle"
                          onClick={this.toggleForm}
                        />
                      )}{" "}
                      <span
                        style={{
                          fontWeight: 200,
                          fontSize: "initial",
                          color: "grey"
                        }}
                      >
                        from
                      </span>{" "}
                      {(cityBool && profile.city) || (
                        <Icon
                          name="question circle"
                          onClick={this.toggleForm}
                        />
                      )}
                    </span>
                    <Button size="tiny" onClick={this.toggleForm}>
                      edit
                    </Button>
                  </div>
                )}
            </Card.Header>
            <Card.Meta>
              <span className="date">{profile.email}</span>
            </Card.Meta>
            <div
              style={{
                fontSize: "small",
                color: "lightgray",
                marginBottom: "-1rem"
              }}
            >
              {profile.displayName} joined 12Scales{" "}
              <Moment unix fromNow>
                {profile && profile.createdAt && profile.createdAt.seconds}
              </Moment>
            </div>
          </Card.Content>
        </Card>
        {this.state.showForm && (
          <Card>
            <Card.Content>
              <MyInfoForm closeForm={this.closeForm} />
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}
const mapState = state => ({
  profile: state.firebase.profile
});
const actions = {};
export default connect(
  mapState,
  actions
)(MyInfo);
