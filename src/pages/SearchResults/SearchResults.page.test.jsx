import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import SearchResultsPage from './SearchResults.page';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import videos from '../../utils/videoDataExample'

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe('Explore page', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      videos: {
        videos
      },
      auth: {
        id: 1,
        avatarUrl: 'asa',
        name: 'Wizeline'
      }
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter><SearchResultsPage /></BrowserRouter>
      </Provider>
    );
  });
  it('Renders the content correctly', () => {
    render(component);
    expect(screen.getByTestId('row-videos-container')).toBeInTheDocument();
    expect(screen.getAllByTestId('video-item').length).toEqual(5);
  });
});

