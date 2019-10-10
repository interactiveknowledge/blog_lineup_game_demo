import React, { Component } from 'react';
import debounce from 'lodash.debounce';

/**
 *
 * @type {Object}
 */

class Header extends Component {
  constructor(props) {
    super(props);

    this.debounceAction = debounce(this.handleClick, 500);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handles a debounced click action.
   * @param {string} type string that determines which method to call on user click.
   */
  handleClick(type) {
    if (type === 'info') {
      this.props.infoClick();
      return;
    }
  }

  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <em>
          A game developed for{' '}
          <a
            href="https://www.sealaskaheritage.org/"
            target="_blank"
            rel="noopener noreferrer">
            The Sealaska Heritage Institute
          </a>{' '}
          by{' '}
          <a
            href="https://interactiveknowledge.com"
            target="_blank"
            rel="noopener noreferrer">
            Interactive Knowledge
          </a>
          . All rights reserved.
        </em>
        <div className="info" onClick={() => this.debounceAction('info')}>
          How to Play
        </div>
      </div>
    );
  }
}

export default Header;
