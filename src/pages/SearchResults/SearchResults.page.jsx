import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLocation, withRouter } from 'react-router';
import VideoList from '../../components/VideoList';
// Redux
import { connect } from "react-redux";
import { fetchQueriedVideosAction } from "../../redux/actions/videosActions";

class SearchResultsPage extends React.Component {
  constructor (props) {
    super(props);
    this.location = this.props.location;
    this.search = this.location.search.split('?query=')[1];
  }

  componentDidMount(){
    this.props.dispatchFetchQueriedVideosAction(this.search);
  }

  render(){
    return (
      <Container fluid>
        <h2 data-testid="search-term-container">Search results for {this.search}</h2>
        <Row>
          <VideoList width={12} videos={this.props.videos.videos} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchQueriedVideosAction: (search) => dispatch(fetchQueriedVideosAction(search)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SearchResultsPage));
