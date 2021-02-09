import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.styles.css';

class NotFoundPage extends React.Component {
  render(){
    return (
      <section data-testid="not-found-container" className="not-found">
        <Link to="/" className="home-link">
          home
        </Link>
        <img src="404.gif" alt="page not found" />
      </section>
    );
  }
}

export default NotFoundPage;
