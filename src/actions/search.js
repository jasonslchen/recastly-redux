import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // videos:
  //TODO:  Write an asynchronous action to handle a video search!
  return () => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, function(videos) {
      changeVideo(videos[0]);
      changeVideoList(videos);
    })
  }
};

export default handleVideoSearch;
// searchYouTube({key: YOUTUBE_API_KEY, query: 'cats', max: 5}, function(items) {
  //   console.log(items)});


  // return (searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, function(videos) {
    //       console.log(videos);
    // (dispatch) => {
      // }
      //         dispatch ()
          // return {
          //   type: 'SEARCH',
          //   videos: searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, function(videos) {
          //           changeVideo(videos[0]);
          //           changeVideoList(videos);
          //         }),
          //   dispatch: (dispatch) => {dispatch(this.videos)}
          // }