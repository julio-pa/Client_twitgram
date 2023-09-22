import { combineReducers } from 'redux';
import tweets from './tweets';
import images from './images';

export default combineReducers({
  tweets,
  images
})