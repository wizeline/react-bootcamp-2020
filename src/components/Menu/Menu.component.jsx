import React from 'react';
import { withRouter } from 'react-router';
import { Navbar, Nav, Button } from 'react-bootstrap';
import UserInfo from '../UserInfo';
import Searchbar from '../Searchbar/Searchbar.component';
import './MenuComponent.css';
// Redux
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";

class Menu extends React.Component {

  constructor(props){
    super(props)
  }

  deAuthenticate(event) {
    try {
      this.props.dispatchLogoutAction();      
      event.preventDefault();
      this.props.history.push('/');
    } catch (error) {
      console.log('ERROR LOGOUT', error)
    }
  }

  render(){
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">{!!this.props.authenticated && <UserInfo />}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Videos challenge</Nav.Link>
            {!!this.props.authenticated && <Nav.Link href="/favorites">Favorites</Nav.Link>}
          </Nav>
          {!!this.props.authenticated && <Searchbar />}
          <Nav>
            {!!this.props.authenticated && (
              <Button
                data-testid="logout-button"
                variant="outline-danger"
                onClick={(ev) => this.deAuthenticate(ev)}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    authenticated: !!state.auth?.id || false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutAction: () => dispatch(logoutAction()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Menu));
