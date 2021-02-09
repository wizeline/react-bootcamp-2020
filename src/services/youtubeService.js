import youtubeAPI from '../utils/API/youtubeAPI';


const fetchPopularVideos = async () => {
  try {
    const popularVideos = await youtubeAPI.get('/search',
    {
      params: {
        chart: 'mostPopular',
        regionCode: 'mx',
      },
    })
    return popularVideos 
  } catch (error) {
    console.log('ERR', error)
  }
}

const fetchRelatedVideos = async(videoId) => {

  try {
    const relatedVideos = await youtubeAPI.get('/search',
    {
      params: {
        relatedToVideoId: videoId,
        type: 'video',
      },
    })
    return relatedVideos
  } catch (error) {
    console.log('ERR', error)
  }
  
}

const fetchQueriedVideos = async(search) => {
  try {
    const queriedVideos = await youtubeAPI.get('/search',
    {
      params: {
        q: search,
      },
    })
    return queriedVideos 
  } catch (error) {
    console.log('ERR', error)
  }
}

export default {
  fetchPopularVideos,
  fetchRelatedVideos,
  fetchQueriedVideos,
}