import {videosReducer} from './videosReducer'
import * as types from '../types/videosTypes'
import videos from '../../utils/videoDataExample'

describe('todos reducer', () => {

  it('should return the initial state', () => {
    expect(videosReducer(undefined, {})).toEqual({
      videos: [],
      favorites: [],
      search: '',
    })
  })

  it('should save the search', () => {
    const resultObj = {
      videos: [],
      favorites: [],
      search: 'adele',
    }
    const expectedAction = {
      type: types.SEARCH_VIDEOS,
      payload: 'adele'
    }
    expect(videosReducer(undefined, expectedAction)).toEqual(resultObj)
  })

  it('should set the videos', () => {
    const resultObj = {
      videos: [1,2],
      favorites: [],
      search: '',
    }

    const expectedAction = {
      type: types.SET_VIDEOS,
      payload: [1,2]
    }
    expect(videosReducer(undefined, expectedAction)).toEqual(resultObj)
  })

  it('should concat the videos', () => {
  
    const resultObj = {
      videos: [videos[0], videos[1], videos[2]],
      favorites: [],
      search: '',
    }

    const initialState = {
      videos: [videos[0]],
      favorites: [],
      search: '',
    }

    const expectedAction = {
      type: types.CONCAT_VIDEOS,
      payload: [videos[1], videos[2]]
    }

    expect(videosReducer(initialState, expectedAction)).toEqual(resultObj)
  })

  it('should save to favorites', () => {
    const resultObj = {
      videos: [videos[0], videos[1], videos[2]],
      favorites: [videos[2]],
      search: '',
    }

    const initialState = {
      videos: [videos[0], videos[1], videos[2]],
      favorites: [],
      search: '',
    }

    const expectedAction = {
      type: types.SAVE_VIDEO_TO_FAVORITES,
      payload: videos[2].id.videoId
    }
    expect(videosReducer(initialState, expectedAction)).toEqual(resultObj)
  })

  it('should remove from favorites', () => {
    const resultObj = {
      videos: [videos[0], videos[1], videos[2]],
      favorites: [],
      search: '',
    }

    const initialState = {
      videos: [videos[0], videos[1], videos[2]],
      favorites: [videos[2]],
      search: '',
    }

    const expectedAction = {
      type: types.REMOVE_VIDEO_FROM_FAVORITES,
      payload: videos[2].id.videoId
    }
  
    expect(videosReducer(initialState, expectedAction)).toEqual(resultObj)
  })
})