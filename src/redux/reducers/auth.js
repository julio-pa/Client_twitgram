import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  PERFIL_LOADED_SUCCESS,
  PERFIL_LOADED_FAIL,
  UPDATE_PERFIL_SUCCESS,
  UPDATE_PERFIL_FAIL,
  USERS_LIST_LOADED_SUCCESS,
  USERS_LIST_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT
} from '../actions/users/types';

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null,
  perfil: null,
  usersList: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload
      }
    case PERFIL_LOADED_SUCCESS:
      return {
        ...state,
        perfil: payload.perfil
      }
    case UPDATE_PERFIL_SUCCESS:
      return {
        ...state,

      }
    case USERS_LIST_LOADED_SUCCESS:
      return {
        ...state,
        usersList: payload.results.users
      }
    case REFRESH_SUCCESS:
      localStorage.setItem('access', payload.access);
      return {
        ...state,
        access: localStorage.getItem('access')
      }
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false
      }
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null
      }
    case UPDATE_PERFIL_FAIL:
      return {
        ...state
      }
    case PERFIL_LOADED_FAIL:
      return {
        ...state,
        perfil: null
      }
    case USERS_LIST_LOADED_FAIL:
      return {
        ...state,
        usersList: null
      }
    case LOGIN_FAIL:
    case REFRESH_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null
      }
    default:
      return state
  }
}