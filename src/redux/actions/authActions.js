
import { LOGOUT, LOGIN_SUCCESS } from '../types/authTypes'
import authService from '../../services/authService'

export const loginAction = (user, password) => async (dispatch) => {
  authService.loginApi(user, password).then(res => {
    dispatch(loginSuccessAction(res))
  }).catch(err => {console.log('error login in')})
};

export const logoutAction = () => ({ type: LOGOUT });

export const loginSuccessAction = (mockedUser) => ({ type: LOGIN_SUCCESS, payload:  mockedUser});