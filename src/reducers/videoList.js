import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if(action.type === 'CHANGE_VIDEO_LIST') {
    let newState = Object.assign({}, state);
    newState.videoList = action.videos;
    return newState.videoList;
  } else {
    return state;
  }
};

export default videoListReducer;
