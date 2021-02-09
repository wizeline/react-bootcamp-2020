import { SEARCH_VIDEOS, SET_VIDEOS, CONCAT_VIDEOS, SAVE_VIDEO_TO_FAVORITES, REMOVE_VIDEO_FROM_FAVORITES } from '../types/videosTypes'
import youtubeService from '../../services/youtubeService'


export const searchVideosAction = (search) => { 
  return ({ type: SEARCH_VIDEOS, payload: search })
};

export const fetchQueriedVideosAction = (search) => async (dispatch) => {
  fetchQueriedVideos(search).then((res) => {
    dispatch(setVideosAction(res))
  }).catch(err => console.log('ERR'))
}

export const fetchPopularVideosAction = (search) => async (dispatch) => {
  fetchPopularVideos().then((res) => {
    dispatch(setVideosAction(res))
  }).catch(err => console.log('ERR'))
}


export const fetchRelatedVideosAction = (videoId) => async (dispatch) => {
  fetchRelatedVideos(videoId).then((res) => {
    dispatch(setVideosAction(res))
  }).catch(err => console.log('ERR'))
}

export const fetchQueriedVideos = async (search) => {
  const queried = await youtubeService.fetchQueriedVideos(search)
  return queried.data.items || []
}

export const fetchPopularVideos = async () => {
  const queried = await youtubeService.fetchPopularVideos()
  return queried.data.items || []
}

export const fetchRelatedVideos = async (videoId) => {
  const queried = await youtubeService.fetchRelatedVideos(videoId)
  return queried.data.items || []
}

export const setVideosAction = (videoItems) => ({ type: SET_VIDEOS, payload: videoItems });

export const concatVideosAction = (videoItems) => ({ type: CONCAT_VIDEOS, payload: videoItems });

export const saveFavoriteVideoAction = (videoId) => ({ type: SAVE_VIDEO_TO_FAVORITES, payload: videoId });

export const removeFavoriteVideoAction = (videoId) => ({ type: REMOVE_VIDEO_FROM_FAVORITES, payload: videoId });
