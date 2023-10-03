import axios from "axios";

import {
  GET_TWEETS_LIST_SUCCESS,
  GET_TWEETS_LIST_FAIL,
  POST_TWEET_SUCCESS,
  POST_TWEET_FAIL,
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
// user, description, thumbnail
export const post_tweet = (body) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-CSRFToken': `${localStorage.getItem('csrftoken')}`
      // 'Accept': 'application/json',
      // 'Authorization': `Bearer ${localStorage.getItem('csrftoken')}`
    }
  };

  // const body = JSON.stringify(data);
  console.log(body)

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/tweet/create`, body, config);

    dispatch({
      type: POST_TWEET_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_TWEET_FAIL
    })
  }
}