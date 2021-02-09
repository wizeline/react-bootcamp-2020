import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
// Redux
import { connect } from "react-redux";

const UserAvatar = styled.img`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  padding: 2px;
`;
const UserInfoContainer = styled.div`
  margin: 5px;
`;

class UserInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return this.props.auth?.id ? (
      <UserInfoContainer>
        <UserAvatar src={this.props.auth.avatarUrl} />
        <span>{this.props.auth.name}</span>
      </UserInfoContainer>
    ) : (
      <div data-testid="unauthenticated-user" />
    );
  }
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);
