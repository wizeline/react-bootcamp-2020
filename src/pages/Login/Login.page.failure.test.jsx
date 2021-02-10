import React from 'react';
import { act } from '@testing-library/react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from './Login.page';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe('LoginPage failure scenario', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter><LoginPage /></BrowserRouter>
      </Provider>
    );
  });

  it('writes inside the fields and click button ', async () => {
    act(() => {
      render(component, {
        initialState: {
          auth: {},
          videos: {}
        }
      })
    });
    
    await act(async() => {
      const usernameInput = screen.getByTestId('username-field');
      const passwordInput = screen.getByTestId('password-field');
      const loginButton = screen.getByTestId('login-submit-button');
      await userEvent.type(usernameInput, 'wizeline');
      await userEvent.type(passwordInput, 'Rocks!');
      expect(usernameInput.value).toEqual('wizeline');
      expect(passwordInput.value).toEqual('Rocks!');
      userEvent.click(loginButton, 'login-submit-button')
    });
  });
});