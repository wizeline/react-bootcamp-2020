import React from 'react'
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
      auth: {
        id: 1,
        avatarUrl: 'asdad',
        name: 'wizeline'
      }
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter><LoginPage /></BrowserRouter>
      </Provider>
    );
  });

  describe('LoginPage authenticated', () => {
    it('redirects to /', () => {
      render(
        component, {
          auth: {
            id: 1,
            avatarUrl: 'asdad',
            name: 'wizeline'
          }
        }
      );
      expect(screen.queryAllByTestId('username-field').length).toEqual(0);
      expect(screen.queryAllByTestId('password-field').length).toEqual(0);
    });
  });
});