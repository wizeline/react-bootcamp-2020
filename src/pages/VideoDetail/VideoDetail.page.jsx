import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HeartItem from '../../components/Heart';
import VideoInformationFragment from '../../components/VideoItem/VideoInformationFragment.styled';
import VideoList from '../../components/VideoList/VideoList.component';
import VideoVisualizer from '../../components/VideoVisualizer';
import { fetchRelatedVideosAction } from '../../redux/actions/videosActions';
import { filterLastRelatedVideos, findVideo } from '../../utils/arrayUtils';
import { flattenVideoStructure } from '../../utils/videoUtils';
import { withRouter } from 'react-router';
// Redux
import { connect } from "react-redux";
import mockedVideos from '../../utils/videoDataExample'

class VideoDetailPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // relatedVideos: filterLastRelatedVideos(this.props.mockedVideos, this.props.location.pathname.split('/')[2]),
      // currentVideo: flattenVideoStructure(findVideo(this.props.mockedVideos, this.props.location.pathname.split('/')[2])),
      relatedVideos: filterLastRelatedVideos(this.props.videos.videos, this.props.location.pathname.split('/')[2]),
      currentVideo: flattenVideoStructure(findVideo(this.props.videos.videos, this.props.location.pathname.split('/')[2])),
      id: this.props.location.pathname.split('/')[2],
    }
  }

  componentDidMount(){
    // fetch related videos actions
    this.props.dispatchFetchRelatedVideos(this.id)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname){
      console.log('STATEE', this.props)
      const newVideoId = this.props.location.pathname.split('/')[2]
      this.setState({
        id: newVideoId,
        // relatedVideos: filterLastRelatedVideos(this.props.mockedVideos, this.state.id),
        // currentVideo: flattenVideoStructure(findVideo(this.props.mockedVideos, this.state.id)),
        relatedVideos: filterLastRelatedVideos(this.props.videos.videos, newVideoId),
        currentVideo: flattenVideoStructure(findVideo(this.props.videos.videos, newVideoId)),
      })
    }

    if (prevProps.videos.videos !== this.props.videos.videos){
      const videoId = this.state.id || this.props.location.pathname.split('/')[2]
      this.setState({
        // relatedVideos: filterLastRelatedVideos(this.props.mockedVideos, this.state.id),
        // currentVideo: flattenVideoStructure(findVideo(this.props.mockedVideos, this.state.id)),
        relatedVideos: filterLastRelatedVideos(this.props.videos.videos, videoId),
        currentVideo: flattenVideoStructure(findVideo(this.props.videos.videos, videoId)),
      })
    }
  }
  
  // const videos = useRelatedVideos(id);
  // const relatedVideos = filterLastRelatedVideos(videos, id);
  // const currentVideo = flattenVideoStructure(findVideo(videos, id));

  render(){
    return (
      <div>
        <Row>
          <Col md={8}>
            <VideoVisualizer id={this.state.id} />
            {this.state.currentVideo && (
              <VideoInformationFragment
                redirectToVideoDetailPage={() => {}}
                title={this.state.currentVideo.title}
                channelTitle={this.state.currentVideo.channelTitle}
                publishedAt={this.state.currentVideo.publishedAt}
                videoId={this.state.id}
                noPadding
              >
                <HeartItem id={this.state.id} />
              </VideoInformationFragment>
            )}
          </Col>
          <Col md={4}>
            <VideoList width={12} videos={this.state.relatedVideos} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    mockedVideos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchRelatedVideos: (videoId) => dispatch(fetchRelatedVideosAction(videoId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(VideoDetailPage));
