import React, { Component } from 'react';
import {title} from '../texts.json';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
            {title}
        </h1>
      </header>
    );
  }
}

export default Header;
