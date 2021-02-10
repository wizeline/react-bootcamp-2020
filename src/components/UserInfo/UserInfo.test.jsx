import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import UserInfo from './UserInfo.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import videos from '../../utils/videoDataExample'

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe('UserInfo component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      videos: {
        videos
      },
      auth: null
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter>
          <UserInfo/>
        </BrowserRouter>
      </Provider>
    );
  });
  it('doesnt render the component when the user is not authenticated', () => {
    render(component);
    expect(screen.getByTestId('unauthenticated-user')).toBeInTheDocument();
  });
});
