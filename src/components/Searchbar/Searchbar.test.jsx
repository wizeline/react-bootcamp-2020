import React from 'react';
import { render, screen } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from './Searchbar.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import videos from '../../utils/videoDataExample'

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe('Searchbar component', () => {
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
        <BrowserRouter><Searchbar /></BrowserRouter>
      </Provider>
    );
  });
  it('renders the searchbar component', () => {
    render(component);
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('class')).toBe('form-control');
    expect(input.id).toBe('query-input');
    const button = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('btn btn-outline-info');
    expect(button.id).toBe('search-button');
  });
    
  it('writes on the searchbar', async () => {
    render(component);
    const input = screen.getByPlaceholderText('Search');
    await userEvent.type(input, 'hi');
    expect(input.value).toBe('hi');
  });

  it('simulates search click', async () => {
    const searchbar = render(component);
    const btn = screen.getByRole('button');
    userEvent.click(btn, { button: 0 });
    searchbar.rerender();
    expect(screen.queryAllByRole('button')).toEqual([])
  });
});
