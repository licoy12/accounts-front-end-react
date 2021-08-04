import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import {Button, Icon} from 'semantic-ui-react';

const api = axios.create({
  baseURL: `http://localhost:8080/api`
})

class App extends Component {

  state = {
    accounts: [],
    firstName:'',
    lastName: '',
    username: '',
    password: '',
    color: ''
  }

  constructor() {
    super();
    this.getAccounts();
  }

  deleteAccount = async (id) => {
    let data = await api.delete(`/deleteaccount/${id}`)
    this.getAccounts();
  }

  getAccounts = async () => {
    let data = await api.get('/getaccounts').then(({ data }) => data);
    this.setState({ accounts: data });
  }

  renderAccounts = (account) => {
    return (
<tbody>
  <tr>
    <td data-label="firstName" bgcolor={`${account.color}`}>{account.firstName.toUpperCase()}</td>
    <td data-label="lastName" bgcolor={`${account.color}`}>{account.lastName.toUpperCase()}</td>
    <td data-label="username" bgcolor={`${account.color}`}>{account.username}</td>
    <td data-label="color" bgcolor={`${account.color}`}>{account.color}</td>
    <td
      data-label="delete" bgcolor={`${account.color}`}>

        <Button animated onClick={() => this.deleteAccount(account.id)}>
          <Button.Content visible>X</Button.Content>
          <Button.Content hidden>Delete?</Button.Content>
        </Button>
    </td>
  </tr>
</tbody>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form/><br />
          <div className="flex">
            <table class="ui celled table">
              <thead>
                <tr><th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Color</th>
                </tr>
              </thead>
              {this.state.accounts.map(this.renderAccounts)}
            </table>
          </div>
          
          {/* {this.state.accounts.map(account => <h2 key={account.id}>{account.firstName.toUpperCase()}, {account.username}<button color='red' onClick={() => this.deleteAccount(account.id)}>X</button></h2>)} */}
        </header>
      </div>



    );
  }

}

export default App;
