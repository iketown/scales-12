import React from "react";
import { Button, Icon } from "semantic-ui-react";
const SocialLogin = ({ socialLogin }) => {
  return (
    <div>
      <div>
        <Button
          type="button"
          style={{ marginBottom: "10px" }}
          fluid
          color="facebook"
          onClick={() => socialLogin("facebook")}
        >
          <Icon name="facebook" /> Login with Facebook
        </Button>

        <Button
          type="button"
          fluid
          color="google plus"
          onClick={() => socialLogin("google")}
        >
          <Icon name="google plus" />
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
