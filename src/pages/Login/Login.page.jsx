import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { loginAction } from '../../redux/actions/authActions'
import './Login.styles.css';
import { withRouter } from 'react-router';
// Redux
import { connect } from "react-redux";

class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      error: null,
    }
  }

  authenticate(event) {
    this.setState({error: null})
    event.preventDefault();
    try {
      //login action
      this.props.login(this.state.username, this.state.password)
      this.props.history.push('/explore');
    } catch (error) {
      this.setState({ error: error})
    }
  }

  handleInputChange = (event) => {
    const data = event.target.value;
    if (event.target.id === 'username') {
      this.setState({username: data})
      return;
    }
    this.setState({password: data})
  };

  render(){
    return !!this.props.auth?.id ? (
      <Redirect to="/" />
    ) : (
      <section className="login">
        <h1>Welcome to Videos!</h1>
        <form onSubmit={this.authenticate = this.authenticate.bind(this)} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input
                onChange={this.handleInputChange}
                required
                type="text"
                id="username"
                data-testid="username-field"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input
                onChange={this.handleInputChange}
                required
                type="password"
                id="password"
                data-testid="password-field"
              />
            </label>
          </div>
          {this.state.error && <p>{this.state.error}</p>}
          <button data-testid="login-submit-button" type="submit">
            login
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, password) => dispatch(loginAction(user, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LoginPage));

