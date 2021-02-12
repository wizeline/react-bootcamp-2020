// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Heart from './Heart.component';
// import { VideosProvider } from '../../providers/Videos/videosProvider';

// describe('Heart', () => {
//   it('renders the component', () => {
//     render(
//       <VideosProvider>
//         <Heart />
//       </VideosProvider>
//     );
//     expect(screen.getByTestId('red-border-heart')).toBeInTheDocument();
//   });
// });


import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import Heart from './Heart.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import videos from '../../utils/videoDataExample'

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe('Heart component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      videos: {
        videos,
        favorites: [videos[0], videos[1]]
      },
      auth: null
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter>
          <Heart/>
        </BrowserRouter>
      </Provider>
    );
  });
  it('renders the component', () => {
    render(component);
    expect(screen.getByTestId('red-border-heart')).toBeInTheDocument();
  });
});
