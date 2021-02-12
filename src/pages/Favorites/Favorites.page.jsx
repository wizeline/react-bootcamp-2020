import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
// Redux
import { connect } from "react-redux";

class FavoritesPage extends React.Component {

  constructor (props) {
    super(props)
  }

  render(){
    return (
      <Container fluid data-testid={'favorite-videos-container'}>
        <Row>
          <VideoList width={12} videos={this.props.videos.favorites} />
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesPage);
