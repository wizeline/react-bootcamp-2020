import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Menu from './Menu.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import videos from '../../utils/videoDataExample'

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe('Private component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      videos: {
        videos
      },
      auth: {
        id: 2,
        name: 'Wizeline'
      }
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter>
          <Menu/>
        </BrowserRouter>
      </Provider>
    );
  });
  it('renders children component if the user is authenticated', () => {
    const renderer = render(component);
    const button = screen.getByTestId('logout-button');
    userEvent.click(button, { button: 0 });
    renderer.rerender();
    expect(screen.queryAllByTestId('logout-button')).toEqual([]);
  });
});

