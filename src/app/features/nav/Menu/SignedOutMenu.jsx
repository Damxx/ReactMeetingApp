import React from "react";
import { Menu,Button } from "semantic-ui-react";

export const SignedOutMenu = ({signIn}) => {
  return (
    <div>
      <Menu.Item position="right">
        <Button basic inverted content="Login" onClick={signIn}/>
        <Button
          basic
          inverted
          content="register"
          style={{ marginLeft: "0.5em" }}
        />
      </Menu.Item>
    </div>
  );
};
