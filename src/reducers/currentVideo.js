import Redux from 'redux';

var currentVideoReducer = (state=null, action) => {
  if(action.type === 'CHANGE_VIDEO') {
    let newState = Object.assign({}, state);
    newState.currentVideo = action.video;
    return newState.currentVideo;
  } else {
    return state;
  }

};

export default currentVideoReducer;

// if(state.type === 'CHANGE_VIDEO') {
//   let newState = Object.assign({}, state);
//   newState.currentVideo = action.video;
// }
// return newState;