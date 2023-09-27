import { combineReducers } from 'redux';
import tweets from './tweets';
import images from './images';
import auth from './auth'

export default combineReducers({
  tweets,
  images,
  auth
})