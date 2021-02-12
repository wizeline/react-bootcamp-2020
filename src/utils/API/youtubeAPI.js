import axios from 'axios';
import { MAX_VIDEOS_TO_FETCH } from '../constants';

const KEY = 'AIzaSyBPxyTwIxve-kmky0t7f9EWTv-bpDbBK6M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: MAX_VIDEOS_TO_FETCH,
    key: KEY,
  },
});
