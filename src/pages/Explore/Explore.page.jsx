import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import { fetchPopularVideosAction } from "../../redux/actions/videosActions";
// Redux
import { connect } from "react-redux";

class ExplorePage extends React.Component  {

  constructor (props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatchFetchPopularVideosAction(this.search);
  }

  render(){
    return (
      <Container fluid data-testid={'explore-page-container'}>
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
    dispatchFetchPopularVideosAction: () => dispatch(fetchPopularVideosAction()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExplorePage);
