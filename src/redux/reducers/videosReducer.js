import { storage } from '../../utils/storage';
import {
  findVideo,
  removeVideoFromFavorites,
  removeRepeatedVideos,
} from '../../utils/arrayUtils';
import { SEARCH_VIDEOS, SET_VIDEOS, CONCAT_VIDEOS, SAVE_VIDEO_TO_FAVORITES, REMOVE_VIDEO_FROM_FAVORITES, FETCH_VIDEOS }  from '../types/videosTypes';

export const initialState = JSON.parse(storage.get('videos')) || {
  videos: [],
  favorites: [],
  search: '',
};

export function videosReducer(state = initialState, action) {
  let videoState = {};
  let favorites = [];
  let foundVideo = {};
  let newVideosArray = [];
  const { type, payload } = action;
  switch (type) {
    case SEARCH_VIDEOS:
      videoState = { ...state, search: payload };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case SET_VIDEOS:
      videoState = { ...state, videos: payload };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case CONCAT_VIDEOS:
      newVideosArray = removeRepeatedVideos([...state.videos, ...payload]);
      videoState = { ...state, videos: newVideosArray };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case SAVE_VIDEO_TO_FAVORITES:
      foundVideo = findVideo(state.videos, payload);
      favorites = [foundVideo, ...((state && state.favorites) || [])];
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    case REMOVE_VIDEO_FROM_FAVORITES:
      favorites = removeVideoFromFavorites(state.favorites, payload);
      videoState = { ...state, favorites };
      storage.set('videos', JSON.stringify(videoState));
      return videoState;
    default:
      return state;
  }
}
