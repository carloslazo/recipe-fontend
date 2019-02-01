import React, { Component } from "react";
import { ControlLabel, Button, FormControl, FormGroup } from "react-bootstrap";
import { createUser } from "../api/index";
import AuthService from "../services/AuthService";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      form: {
        user: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: ""
        }
      }
    };
  }

  handleChange(event) {
    let { form } = this.state;
    form.user[event.target.name] = event.target.value;
    this.setState({ form: form });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { form } = this.state;

    form.user.password_confirmation = form.user.password;

    createUser(form).then(successUser => {
      this.props.history.replace("/");
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-container-group">
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              name="first_name"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />

            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              name="last_name"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />

            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              name="email"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />

            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              name="password"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />

            <Button
              style={{
                margin: "10px 0 5px 0",
                backgroundColor: "#B2DB66",
                color: "white"
              }}
              type="submit"
              value="submit"
            >
              Register
            </Button>
          </FormGroup>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
