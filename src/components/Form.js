import React, { Component } from 'react'
import App from '../App';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8080/api`
  })

class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: '',
             lastName: '',
             username: '',
             password: '',
             color: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    };

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    };

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    };

    handleColorChange = (event) => {
        this.setState({
            color: event.target.value
        })
    };

    handleSubmit = async () => {
        let res = await api.post('/addaccount',{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password,
            color: this.state.color
        });
    }
    
    render() {
        return (
            <form className="form ui" onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
                </div>
                <div>
                    <label>First Name</label>
                    <input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange} />
                </div>
                <div>
                    <label>Color</label>
                    <input type='text' value={this.state.color} onChange={this.handleColorChange} />
                </div>
                {<button type='submit'>submit</button>}
            </form>
        )
    }
}

export default Form;
