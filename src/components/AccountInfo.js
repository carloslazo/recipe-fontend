import React, { Component, FormGroup } from "react";
import { getProfile } from "../api/index";
import ProfileImage from "../components/profileimage";

class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentWillMount() {
    getProfile().then(res => {
      this.setState({ user: res });
    });
  }

  render() {
    return (
      <div className="account-container">
        <div className="account-flex-items">
          <div className="account-block" />

          <p>
            {" "}
            <b>Name</b>: {this.state.user.first_name}{" "}
            {this.state.user.last_name}
          </p>

          <p>
            {" "}
            <b>Email</b>: {this.state.user.email}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
