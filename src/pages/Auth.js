import React, { Component } from 'react';

import './Auth.css';
import AuthContext from '../context/auth-context';

class AuthPage extends Component {
  state = {
    isLogin: true
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: email,
        password: password
      }
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation CreateUser($email: String!, $password: String!) {
            createUser(userInput: {email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
        variables: {
          email: email,
          password: password
        }
      };
    }

    fetch('https://hiro-eventful.herokuapp.com/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
    render() {
        return (
        <div className="center">
            {this.state.isLogin ? <h1>Login</h1> : <h1>Signup</h1>}
            <form className='auth-form' onSubmit={this.submitHandler}>
                <div className="txt_field">
                    <input type="email" path="email" required="required" ref={this.emailEl}/>
                    <span></span>
                    <label path="email">Email</label>
                </div>
               
                <div className="txt_field">
                    <input type="password" path="password" required="required" ref={this.passwordEl}/>
                    <span></span>
                    <label path="password">Password</label>
                </div>
             
                <div className='login-button-group'>
                <button type="submit" value="Login">Submit</button>
                <button type="button" onClick={this.switchModeHandler}>

                    Switch to {this.state.isLogin ? 'Signup' : 'Login'}

                </button>
                </div>
                  
                    </form>
                    </div>
        )       
    }
}

export default AuthPage;