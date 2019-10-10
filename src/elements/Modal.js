import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'

import Button from './Button'

/**
 * Modal component is a generic modal that can be used sitewide.
 * @type {Object}
 */

class Modal extends Component {
  constructor (props) {
    super(props)

    this.debounceAction = debounce(this._handleClick, 500)
  }

  /**
   * Handles a debounced click action.
   * @param {string} type string that determines which method to call on user click.
   */
  _handleClick = type => {
    if (type === 'close') {
      this.props.close()
    }
  }

  render () {
    return (
      <div id='modal' className='modal'>
        <div id='modal-foreground' className='modal-foreground'>
          <div className='close' onClick={() => this.debounceAction('close')}>
            Close
          </div>

          <div id='modal-inner' className='modal-inner'>
            <h1>How To Play This Game</h1>
            <div className='text'>
              <p>
                Drive your boat with the “<strong>MOVE</strong>” control or use the arrow keys.
              </p>
              <p>
                Rotate your boat with the “<strong>TURN</strong>” control or “<strong>L</strong>” and “<strong>R</strong>” keys.{' '}
              </p>
              <p>
                When you are positioned for the line-up, press the “
                <strong>FOUND IT</strong>” or “<strong>ENTER</strong>” key.
              </p>
            </div>
            <Button
              label='Ok'
              onClick={() => {
                this.debounceAction('close')
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  close: PropTypes.func
}

export default Modal
