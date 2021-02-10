import {
  selectVideosState,
  selectVideos,
  selectFavoriteVideos,
  selectVideoSearch,
  selectIsVideoFavorite,
} from './videosSelectors';

import videos from '../../utils/videoDataExample'

describe('Videos Selector', () => {

  describe('selectVideosState', () => {
    it('should select whole state', () => {

      const videoSlice = {
        videos: [],
        favorites: [],
        search: '',
      }

      const state = {
          videos: videoSlice
      }

      const mockState = {
        ...state
      };

      const selected = selectVideosState(mockState);
      expect(selected).toEqual(videoSlice)
    });
  });

  describe('selectVideos', () => {
    it('should select videos', () => {

      const videoSlice = {
        videos: [videos[0], videos[1]],
        favorites: [],
        search: '',
      }

      const state = {
          videos: videoSlice
      }

      const mockState = {
        ...state
      };

      const selected = selectVideos(mockState);
      expect(selected).toEqual(videoSlice.videos)
    });
  });

  describe('selectFavoriteVideos', () => {
    it('should select favorites', () => {
      const videoSlice = {
        videos: [videos[0]],
        favorites: [videos[1], videos[2]],
        search: '',
      }

      const state = {
          videos: videoSlice
      }

      const mockState = {
        ...state
      };

      const selected = selectFavoriteVideos(mockState);
      expect(selected).toEqual(videoSlice.favorites)
    });
  });

  describe('selectVideoSearch', () => {
    it('should select search', () => {
      const videoSlice = {
        videos: [],
        favorites: [],
        search: 'adele',
      }

      const state = {
          videos: videoSlice
      }

      const mockState = {
        ...state
      };

      const selected = selectVideoSearch(mockState);
      expect(selected).toEqual('adele')
    });
  });

  describe('selectIsVideoFavorite', () => {
    it('should select if is favorite', () => {
      const videoSlice = {
        videos: [],
        favorites: [videos[0], videos[1]],
        search: '',
      }

      const state = {
          videos: videoSlice
      }

      const mockState = {
        ...state
      };

      const selected = selectIsVideoFavorite(mockState, {id: videos[1].id.videoId});
      expect(selected).toEqual(videos[1])
    });
  });
});