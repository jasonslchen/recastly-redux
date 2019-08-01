import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({currentVideo: currentVideo, videoList: videoList});

// combineReducers({currentVideo: currentVideo, videoList: videoList});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;

// (state={videoList: [], currentVideo: null}, action) => {
//   let combination = combineReducers({currentVideo: currentVideo, videoList: videoList});
//   return combination(state, action);

// state={currentVideo:null, videoList:[]}, action