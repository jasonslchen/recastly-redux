import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {
  // videos:
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, function(videos) {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    })
  }
};

export default handleVideoSearch;
