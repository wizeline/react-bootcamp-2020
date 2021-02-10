import * as actions from './videosActions'
import * as types from '../types/videosTypes'

describe('Videos actions', () => {
  it('should create a search action', () => {
    const expectedAction = {
      type: types.SEARCH_VIDEOS,
      payload: 'adele'
    }
    expect(actions.searchVideosAction('adele')).toEqual(expectedAction)
  })

  it('should create a set videos action', () => {
    const expectedAction = {
      type: types.SET_VIDEOS,
      payload: [1,2]
    }
    expect(actions.setVideosAction([1,2])).toEqual(expectedAction)
  })

  it('should create a concat videos action', () => {
    const expectedAction = {
      type: types.CONCAT_VIDEOS,
      payload: [1,2,3]
    }
    expect(actions.concatVideosAction([1,2,3])).toEqual(expectedAction)
  })

  it('should create a save favorite action', () => {
    const expectedAction = {
      type: types.SAVE_VIDEO_TO_FAVORITES,
      payload: 1
    }
    expect(actions.saveFavoriteVideoAction(1)).toEqual(expectedAction)
  })

  it('should create a remove favorite action', () => {
    const expectedAction = {
      type: types.REMOVE_VIDEO_FROM_FAVORITES,
      payload: 1
    }
    expect(actions.removeFavoriteVideoAction(1)).toEqual(expectedAction)
  })
})