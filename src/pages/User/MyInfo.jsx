import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Card, Image, Icon } from "semantic-ui-react";

class MyInfo extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <Card>
          {/* <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" /> */}
          <Card.Content>
            <Card.Header>{profile.displayName}</Card.Header>
            <Card.Meta>
              <span className="date">{profile.email}</span>
            </Card.Meta>
            <Card.Description>
              {profile.displayName} joined 12Scales{" "}
              <Moment unix fromNow>
                {profile && profile.createdAt && profile.createdAt.seconds}
              </Moment>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
const mapState = state => ({
  profile: state.firebase.profile
});
export default connect(mapState)(MyInfo);
