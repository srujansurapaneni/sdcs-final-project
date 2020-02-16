import React from "react";
import UserDetails from "../userDetails/userDetails";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="main-head">
        Admin Dashboard
        <UserDetails />
      </header>
    );
  }
}
