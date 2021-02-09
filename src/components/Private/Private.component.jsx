import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { storage } from '../../utils/storage';
import { withRouter } from 'react-router';
// Redux
import { connect } from "react-redux";

class Private extends React.Component {
  constructor(props){
    super(props)
  }
  isAuthenticated = () => {
    return this.props.authenticated || Boolean(JSON.parse(storage.get('user')));
  };

  render(){
    return (
      <Route
        {...this.props.rest}
        render={() => (this.isAuthenticated() ? this.props.children : <Redirect to="/" />)}
      />
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
)(withRouter(Private));
