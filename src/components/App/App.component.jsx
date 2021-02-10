// Libs
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from '../../redux/store/store'
// Components
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import Menu from '../Menu';
import ExplorePage from '../../pages/Explore/Explore.page';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
import VideoDetailPage from '../../pages/VideoDetail/VideoDetail.page';
import SearchResultsPage from '../../pages/SearchResults/SearchResults.page';

function App(){
    return (
      <>
        <BrowserRouter>
          <Provider store={store}>
          <Menu />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/explore">
                <ExplorePage />
              </Private>
              <Private exact path="/search">
                <SearchResultsPage />
              </Private>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Private exact path="/video/:id">
                <VideoDetailPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
          </Provider>
        </BrowserRouter>
      </>
    );
}

export default App;
