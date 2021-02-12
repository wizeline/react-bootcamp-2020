import React from 'react';
import { withRouter } from 'react-router';
import { RedFilledHeart, RedBorderHeart } from './Heart.styled';
// Redux
import { connect } from "react-redux";
import { saveFavoriteVideoAction, removeFavoriteVideoAction } from '../../redux/actions/videosActions'
import { selectIsVideoFavorite } from '../../redux/selectors/videosSelectors'

class HeartItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <span>
        {this.props.isFavorite(this.props.id) ? (
          <RedFilledHeart
            data-testid="red-filled-heart"
            onClick={() => this.props.dispatchRemoveFavoriteVideo(this.props.id)}
          />
        ) : (
          <RedBorderHeart
            data-testid="red-border-heart"
            onClick={() => this.props.dispatchSaveFavoriteVideo(this.props.id)}
          />
        )}
      </span>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    ...state,
    isFavorite: () => selectIsVideoFavorite(state, { id })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSaveFavoriteVideo: (id) => dispatch(saveFavoriteVideoAction(id)),
    dispatchRemoveFavoriteVideo: (id) => dispatch(removeFavoriteVideoAction(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HeartItem));

