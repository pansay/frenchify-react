import React, { Component } from 'react';
import {source} from '../texts.json';


class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/pansay/react-frenchify">{source}</a>
      </footer>
    );
  }
}

export default Footer;
