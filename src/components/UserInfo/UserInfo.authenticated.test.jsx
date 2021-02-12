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
      auth: {
        id: 1,
        name: 'Jagermeister',
        avatarUrl: 'https://vignette.wikia.nocookie.net/caricaturas/images/b/bd/Smitty_Werben_Man_Jensen.jpg/revision/latest?cb=20111211225840&path-prefix=es'
      }
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
  it('renders the component if the user is authenticated', () => {
    render(component);
    const img = screen.getByRole('img');
    const span = screen.getByText('Jagermeister');
    expect(img.getAttribute('src')).toEqual(
      'https://vignette.wikia.nocookie.net/caricaturas/images/b/bd/Smitty_Werben_Man_Jensen.jpg/revision/latest?cb=20111211225840&path-prefix=es'
    );
    expect(span).toBeInTheDocument();
  });
});
