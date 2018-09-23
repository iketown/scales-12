import React, { Component } from "react";
import { Modal, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import styled from "styled-components";
import { closeModal, openModal } from "./modalActions.jsx";
import RegisterForm from "../../../pages/User/RegisterForm.jsx";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;

  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

class SignUpInterrupt extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };
  render() {
    const { closeModal } = this.props;
    return (
      <Modal dimmer="blurring" open closeIcon onClose={closeModal}>
        <Modal.Header>Let's do this!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid stackable columns={2}>
              <Grid.Column>
                <StyledBox>
                  <div>
                    <p>There is plenty of good stuff ahead in this course</p>
                    <p>Please, take a second and sign up.</p>
                    <ul>
                      <li>It's free.</li>
                      <li>It's awesome.</li>
                      <li>You can track your progress and take notes.</li>
                    </ul>
                  </div>
                  <p>
                    Already have an account?{" "}
                    <Button onClick={this.handleSignIn}>Sign In</Button>
                  </p>
                </StyledBox>
              </Grid.Column>
              <Grid.Column>
                <RegisterForm />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});
const actions = { closeModal, openModal };
export default connect(
  mapStateToProps,
  actions
)(SignUpInterrupt);
