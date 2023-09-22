import axios from 'axios'
import {
  GET_URL_IMG_SUCCESS,
  GET_URL_IMG_FAIL
} from './types'

export const get_url_img = (id) => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/media/img_url/${id}`, config)

    if (res.status === 200) {
      dispatch({
        type: GET_URL_IMG_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_URL_IMG_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: GET_URL_IMG_FAIL
    })
  }
}