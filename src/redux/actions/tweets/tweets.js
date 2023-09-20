import axios from "axios";

import {
  GET_TWEETS_LIST_SUCCESS,
  GET_TWEETS_LIST_FAIL
} from './types'

export const get_tweets_list = () => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/tweet/list`, config)

    if (res.status === 200) {
      dispatch({
        type: GET_TWEETS_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_TWEETS_LIST_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TWEETS_LIST_FAIL
    })
  }
}