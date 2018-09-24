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
    const { closeModal, quizId } = this.props;
    return (
      <Modal dimmer="blurring" open closeIcon onClose={closeModal}>
        <Modal.Header>You did it!</Modal.Header>

        <Modal.Content>
          <Modal.Description>
            <Grid stackable columns={2}>
              <Grid.Column>
                <StyledBox>
                  <div>
                    <h3>Don't be a stranger</h3>
                    <p>
                      We want to add your name to the list of <em>awesome</em>{" "}
                      and
                      <em>victorious winners</em>, but we need more info.
                    </p>
                    <p>
                      Sign up here, and give us a name and a home city so we can
                      put you on the list. :)
                    </p>
                  </div>
                  <p>
                    Already have an account?{" "}
                    <Button onClick={this.handleSignIn}>Sign In</Button>
                  </p>
                </StyledBox>
              </Grid.Column>
              <Grid.Column>
                <RegisterForm quizId={quizId} />
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
