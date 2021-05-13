import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBarButton extends Component {
  render() {
    const { to, name, type, onClick } = this.props;
    return (
      <li className="nav-item ms-lg-2">
        <Link
          to={to}
          className={`btn btn-${type || "danger"}`}
          onClick={onClick}
        >
          {name}
        </Link>
      </li>
    );
  }
}
