import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import VideoItem from './VideoItem.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import videos from '../../utils/videoDataExample'
import userEvent from '@testing-library/user-event';

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
          <VideoItem video={videos[0]}/>
        </BrowserRouter>
      </Provider>
    );
  });
  it('catches when the user clicks the video image', () => {
    const a = render(component);
    userEvent.click(screen.getByTestId('video-card-image'), { button: 0 });
    a.rerender();
    expect(screen.queryAllByTestId('video-card-image')).toEqual([]);
  });
});
