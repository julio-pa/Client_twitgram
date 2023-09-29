import {
  GET_TWEETS_LIST_SUCCESS,
  GET_TWEETS_LIST_FAIL,
  POST_TWEET_SUCCESS,
  POST_TWEET_FAIL,
} from '../actions/tweets/types'

const initialState = {
  tweets_list: null,
  count: null,
  next: null,
  previous: null,
  TweetPost: null
}

export default function tweets(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TWEETS_LIST_SUCCESS:
      return {
        ...state,
        tweets_list: payload.results.posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      }
    case POST_TWEET_SUCCESS:
      return {
        ...state,
        TweetPost: true
      }
    case POST_TWEET_FAIL:
      return {
        ...state,
        TweetPost: false
      }
    case GET_TWEETS_LIST_FAIL:
      return {
        ...state,
        tweets_list: null,
        count: null,
        next: null,
        previous: null,
      }
    default:
      return state
  }
}