import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import Private from './Private.component';
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
      auth: null
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter>
          <Private>
            <h1>Hello world</h1>
          </Private>
        </BrowserRouter>
      </Provider>
    );
  });
  it('doesnt render children if the user is not authenticated', () => {
    render(
      component
    );
    const heading = screen.queryAllByRole('heading');
    expect(heading).toEqual([]);
  })
});
