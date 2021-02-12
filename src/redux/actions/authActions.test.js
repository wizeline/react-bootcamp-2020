import * as actions from './authActions'
import * as types from '../types/authTypes'

describe.only('Auth actions', () => {
  it('should create a login success action', () => {
    const mockedUser = {
      id: '123',
      name: 'Wizeline',
      avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    }
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      payload: mockedUser
    }
    expect(actions.loginSuccessAction(mockedUser)).toEqual(expectedAction)
  })
  
  it('should create a logout action', () => {
    const expectedAction = {
      type: types.LOGOUT,
    }
    expect(actions.logoutAction()).toEqual(expectedAction)
  })
})