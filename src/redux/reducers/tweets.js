import {
  GET_TWEETS_LIST_SUCCESS,
  GET_TWEETS_LIST_FAIL
} from '../actions/tweets/types'

const initialState = {
  tweets_list: null,
  post: null,
  count: null,
  next: null,
  previous: null,
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