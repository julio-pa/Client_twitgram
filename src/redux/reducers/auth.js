import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  PERFIL_LOADED_SUCCESS,
  PERFIL_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT
} from '../actions/users/types';

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null,
  perfil: null
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
        isAuthenticated: false
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
    case PERFIL_LOADED_FAIL:
      return {
        ...state,
        perfil: null
      }
    case LOGIN_FAIL:
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