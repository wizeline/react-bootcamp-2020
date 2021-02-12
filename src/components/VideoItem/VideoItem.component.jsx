import React from 'react';
import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import HeartItem from '../Heart';
import VideoInformationFragment from './VideoInformationFragment.styled';
import { VideoCard, CardImage } from './VideoAtoms.styled';
import { flattenVideoStructure } from '../../utils/videoUtils';
// Redux
import { connect } from "react-redux";

class VideoItem extends React.Component {

  constructor(props){
    super(props)
    this.video = this.props.video
    this.videoInfo = flattenVideoStructure(this.video)
  }

  redirectToVideoDetailPage = (videoId) => {
    this.props.history.push(`/video/${videoId}`);
  };

  isOnFavoritesPage = () => {
    return this.props.location.pathname === '/favorites';
  };

  render() {
    return (
      <Col data-testid="video-item">
        <VideoCard>
          <CardImage
            data-testid="video-card-image"
            onClick={() => this.redirectToVideoDetailPage(this.videoInfo.videoId)}
            variant="top"
            src={this.videoInfo.thumbnails?.high?.url}
          />
          <VideoInformationFragment
            redirectToVideoDetailPage={this.redirectToVideoDetailPage = this.redirectToVideoDetailPage.bind(this)}
            title={this.videoInfo.title}
            channelTitle={this.videoInfo.channelTitle}
            publishedAt={this.videoInfo.publishedAt}
            videoId={this.videoInfo.videoId}
          >
            {this.isOnFavoritesPage() && <HeartItem id={this.videoInfo.videoId} />}
          </VideoInformationFragment>
        </VideoCard>
      </Col>
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
)(withRouter(VideoItem));

