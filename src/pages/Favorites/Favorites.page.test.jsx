import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import FavoritesPage from './Favorites.page';
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
        videos,
        favorites: []
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
        <BrowserRouter><FavoritesPage /></BrowserRouter>
      </Provider>
    );
  });
  it('Renders no videos found if no videos were provided', () => {
    render(component);
    expect(screen.getByTestId('favorite-videos-container')).toBeInTheDocument();
    expect(screen.getByTestId('row-videos-container')).toBeInTheDocument();
    expect(screen.getByRole('heading').innerHTML).toEqual('No videos found');
  });
});

