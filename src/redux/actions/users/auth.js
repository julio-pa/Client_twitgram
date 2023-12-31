import axios from 'axios';
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
} from './types';

export const update_profile = (body) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-CSRFToken': `${localStorage.getItem('csrftoken')}`
    }
  };

  // console.log(body)

  try {
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/user/update`, body, config);

    dispatch({
      type: UPDATE_PERFIL_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: UPDATE_PERFIL_FAIL
    })
  }
}

export const load_users_list = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/users`, config);

      dispatch({
        type: USERS_LIST_LOADED_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USERS_LIST_LOADED_FAIL,
      });
    }

  } else {
    dispatch({
      type: USERS_LIST_LOADED_FAIL
    });
  }
}

export const load_perfil = (username) => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/profile/${username}`, config);

      dispatch({
        type: PERFIL_LOADED_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PERFIL_LOADED_FAIL
      });
    }

  } else {
    dispatch({
      type: USER_LOADED_FAIL
    });
  }
}

export const load_user = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/users/me/`, config);

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL
    });
  }
};


export const checkAuthenticated = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    const body = JSON.stringify({ token: localStorage.getItem('access') });

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/verify/`, body, config)

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: AUTHENTICATED_SUCCESS
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL
      });
    }

  } else {
    dispatch({
      type: AUTHENTICATED_FAIL
    });
  }
};

export const refresh = () => async dispatch => {
  if (localStorage.getItem('refresh')) {
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      refresh: localStorage.getItem('refresh')
    });

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/refresh/`, body, config);

      if (res.status === 200) {
        dispatch({
          type: REFRESH_SUCCESS,
          payload: res.data
        });
      } else {
        dispatch({
          type: REFRESH_FAIL
        });
      }
    } catch (err) {
      dispatch({
        type: REFRESH_FAIL
      });
    }
  } else {
    dispatch({
      type: REFRESH_FAIL
    });
  }
};


export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/create/`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    })
  }
};

export const signup = (username, email, password, re_password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, email, password, re_password });

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/users/`, body, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL
    })
  }
};


export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};