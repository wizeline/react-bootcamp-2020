import {authReducer} from './authReducers'
import * as types from '../types/authTypes'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual({})
  })
  it('should save the successful login', () => {
    const mockedUser = {
      id: '123',
      name: 'Wizeline',
      avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    }
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      payload: mockedUser
    }
    expect(authReducer(undefined, expectedAction)).toEqual({...mockedUser})
  })

  it('should make logout', () => {
    const mockedUser = {
      id: '123',
      name: 'Wizeline',
      avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    }
    const expectedAction = {
      type: types.LOGOUT,
    }
    expect(authReducer({...mockedUser}, expectedAction)).toEqual(null)
  })
})