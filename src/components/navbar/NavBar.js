import React, { Component } from "react";
import MenuButton from "./MenuButton";
import NavBarButton from "./NavBarButton";
import NavBarLink from "./NavBarLink";

export default class NavBar extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  renderButtons = () => {
    return (
      <>
        <NavBarButton to="/signin" name="Sign In" />
        <NavBarButton to="/signup" name="Sign Up" />
      </>
    );
  };
  renderSignOut = () => {
    return (
      <NavBarButton
        to="/"
        name="Sign Out"
        onClick={this.props.requestSignOut}
      />
    );
  };
  render() {
    // console.log(this.props);
    const { menuOpen } = this.state;
    const {
      authState: { isSignedIn },
      userTypeState: {
        data: { user_type },
      },
    } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Quizify</span>
          <MenuButton onClick={this.toggleMenu} />
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavBarLink user_type={user_type} />
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isSignedIn ? this.renderSignOut() : this.renderButtons()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
