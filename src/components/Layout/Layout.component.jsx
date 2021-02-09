import { render } from '@testing-library/react';
import React from 'react';

import './Layout.styles.css';

class Layout extends React.Component{
  render(){
    return <main className="container">{this.props.children}</main>;
  }
}

export default Layout;
