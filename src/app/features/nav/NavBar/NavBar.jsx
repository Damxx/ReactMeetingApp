import React, { Component } from "react";
import { Menu, Container, Button, GridColumn } from "semantic-ui-react";
import { NavLink,withRouter } from "react-router-dom";
import { SignedOutMenu } from "../Menu/SignedOutMenu";
import SignedInMenu from "../Menu/SignedInMenu";

class NavBar extends Component {
  state = {
    auth: false,
  };
  handleSignOut = () => {
    this.setState({
      auth: false,
    });
    this.props.history.push("/")
  };
  handleSignIn = () => {
    this.setState({
      auth: true,
    });
  };
  render() {
    const auth = this.state.auth;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item name="Events" as={NavLink} to="/events" />
          <Menu.Item name="People" as={NavLink} to="/people" />
          <Menu.Item name="Test" as={NavLink} to="/test" />
          <Menu.Item>
            <Button
              as={NavLink}
              to="createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {auth ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(NavBar)
