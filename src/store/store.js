import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const store = createStore(rootReducer, {currentVideo: null, videoList: exampleVideoData}, applyMiddleware(thunk));

// const configureStore = (initialState) => {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk));
// }

export default store;