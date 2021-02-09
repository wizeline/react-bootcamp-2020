import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Home.styles.css';
import { withRouter } from 'react-router';
// Redux
import { connect } from "react-redux";


class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef();
  }

  render(){
    return (
      <section className="homepage" ref={this.myRef}>
        <h1>Welcome to the challenge!</h1>
        {this.props.authenticated ? <Redirect to="/explore" /> : <Link data-testid={'login-link'} to="/login">let me in →</Link>}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: !!state.auth?.id || false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HomePage));
