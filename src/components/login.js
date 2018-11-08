import React, { Component } from 'react'
import AuthService from '../services/AuthService'
import { ControlLabel, Button, FormControl, FormGroup } from 'react-bootstrap'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.Auth = new AuthService()
        this.state = {
            form: {
                email: "",
                password: ""
            }
        }
    }

    handleChange(event){
       this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event){
        event.preventDefault()
        let ids = sessionStorage.setItem("ids", "placeholder")  //This is a session that is used for the grocery list
        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{this.props.history.replace('/pantry')})
                .catch(err =>{ alert(err) })
    }

    render() {
       return (
         <div className="login-form-container">
            <form className="login-form-form" onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="form-width-flex">
                    <FormControl
                        className="control"
                        type='text'
                        name='email'
                        value={this.state.value}
                        placeholder="Email"
                        onChange={this.handleChange.bind(this)}/><br/>

                    <FormControl
                      className="control" 
                        type='password'
                        name='password'
                        value={this.state.value}
                        placeholder="Password"
                        onChange={this.handleChange.bind(this)}/>
                        <Button className="login-form-button" bsStyle="danger" type='submit' value='submit'>Login</Button>
                      </div>
                </form>
                </div>

        )
    }
}

export default LoginForm
