import React from 'react';
import {
  TitleContainer,
  ChannelContainer,
  VideoInformationContainer,
} from './VideoAtoms.styled';
import { formatDate } from '../../utils/dateUtils';

class VideoInformationFragment extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <VideoInformationContainer
        data-testid="video-information-container"
        style={{ padding: this.props.noPadding ? '0' : '' }}
      >
        <TitleContainer
          data-testid="video-item-title"
          onClick={() => this.props.redirectToVideoDetailPage(this.props.videoId)}
        >
          {this.props.title}
        </TitleContainer>
        <ChannelContainer>{this.props.channelTitle}</ChannelContainer>
        <small className="text-muted">Uploaded On: {formatDate(this.props.publishedAt)}</small>
        {this.props.children}
      </VideoInformationContainer>
    );
  }
};

export default VideoInformationFragment;
