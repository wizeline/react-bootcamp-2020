export const selectVideosState = store => store.videos

export const selectVideos = store => selectVideosState(store) ? store.videos.videos : [];

export const selectFavoriteVideos = store => selectVideosState(store) ? store.videos?.favorites : [];

export const selectVideoSearch = store => selectVideosState(store) ? store.videos?.search : '';

export const selectIsVideoFavorite = (store, props) => selectVideosState(store) ? store.videos.favorites.filter(e => e).find((element) => element?.id.videoId === props.id) : false;