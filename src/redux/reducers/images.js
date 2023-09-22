import {
  GET_URL_IMG_SUCCESS,
  GET_URL_IMG_FAIL
} from '../actions/images/types'

const initialState = {
  url_img: null
}

export default function images(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_URL_IMG_SUCCESS:
      return {
        ...state,
        url_img: payload.images,
      }
    case GET_URL_IMG_FAIL:
      return {
        ...state,
        url_img: null,
      }
    default:
      return state
  }
}