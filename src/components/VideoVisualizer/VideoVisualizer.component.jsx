import React from 'react';

class VideoVisualizer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <section>
          {this.props.id && (
            <iframe
              title={this.props.id}
              data-testid="video-frame"
              width="100%"
              height="400"
              allowFullScreen
              frameBorder="0"
              src={`https://www.youtube.com/embed/${this.props.id}?controls=0&autoplay=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
        </section>
      </div>
    );
  }
};

export default VideoVisualizer;
