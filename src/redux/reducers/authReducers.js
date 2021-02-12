import { storage } from '../../utils/storage';
import { LOGIN_SUCCESS, LOGOUT }  from '../types/authTypes';

export const initialState = JSON.parse(storage.get('user')) || {};

export function authReducer(state = initialState, action) {
  let authState = {};
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      authState = { ...state, ...payload };
      storage.set('user', JSON.stringify(authState));
      return authState;
    case LOGOUT:
      authState = null;
      storage.set('user', JSON.stringify(authState));
      return authState;
    default:
      return state;
  }
}
