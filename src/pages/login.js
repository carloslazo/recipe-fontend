import React, { Component } from "react";
import LoginForm from "../components/login";
import Page from "../components/page.js";

class Login extends Component {
  render() {
    return (
      <Page>
        <div>
        <h5 style={{textAlign:"center"}}>Using Heroku free trial so it may take 2 tries to register since the hosting server needs to wake up.</h5>
        <LoginForm history={this.props.history} />
        </div>
      </Page>
    );
  }
}

export default Login;
