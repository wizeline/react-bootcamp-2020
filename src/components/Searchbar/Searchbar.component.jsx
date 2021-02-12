import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Searchbar.css';
// State
import { connect } from "react-redux";
import { searchVideosAction } from "../../redux/actions/videosActions";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: this.props.videos.search };
  }

  setVideoQuery = (e) => {
    e.preventDefault();
    if (!this.state.search) return;
    this.props.dispatchSearchVideosAction(this.state.search)
    this.props.history.push(`/search?query=${this.state.search}`);
  };

  handleSearchChange = (event) => {
    const query = event.target.value;
    this.setState({ search: query });
  };

  render() {
    return (
      <Form onSubmit={this.setVideoQuery} style={{ width: '90%', display: 'inline' }}>
        <FormControl
          data-testid="searchbar"
          id="query-input"
          onChange={this.handleSearchChange}
          placeholder="Search"
        />
        <Button id="search-button" onClick={this.setVideoQuery} variant="outline-info">
          <SearchIcon />
        </Button>
      </Form>
    );
  }
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSearchVideosAction: (search) => dispatch(searchVideosAction(search))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Searchbar));
