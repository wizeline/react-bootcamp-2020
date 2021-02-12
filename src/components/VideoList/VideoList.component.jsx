import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoItem from '../VideoItem';

class VideoList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return (
      <Col md={this.props.width}>
        <Row style={{ overflow: 'hidden' }} data-testid="row-videos-container">
          {this.props.videos && this.props.videos.length > 0 ? (
            this.props.videos.filter(e => e).map((video) => <VideoItem key={video.id.videoId} video={video} />)
          ) : (
            <div>
              <h4>No videos found</h4>
            </div>
          )}
        </Row>
      </Col>
    );
  }
};

export default VideoList;
