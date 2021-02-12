import React from 'react';
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

describe('LoginPage', () => {
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

  it('renders the form component', () => {
    render(
      component
    );
    expect(screen.getByTestId('username-field')).toBeInTheDocument();
    expect(screen.getByTestId('password-field')).toBeInTheDocument();
  });

  it('writes inside the fields and click button ', async () => {
    const renderer = render(
      component
    );
    const usernameInput = screen.getByTestId('username-field');
    const passwordInput = screen.getByTestId('password-field');
    const loginButton = screen.getByTestId('login-submit-button');
    await userEvent.type(usernameInput, 'wizeline');
    await userEvent.type(passwordInput, 'Rocks!');
    expect(usernameInput.value).toEqual('wizeline');
    expect(passwordInput.value).toEqual('Rocks!');
    userEvent.click(loginButton, 'login-submit-button');
    renderer.rerender();
    expect(screen.queryAllByTestId('username-field')).toEqual([]);
    expect(screen.queryAllByTestId('password-field')).toEqual([]);
  });
});