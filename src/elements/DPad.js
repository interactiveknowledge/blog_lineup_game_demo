import React, { Component } from 'react'
import ArrowKeysReact from 'arrow-keys-react'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'

/**
 * Dpad compontent used in GameLocation.js to move Boat component.
 * @type {Object}
 *
 * @uses arrow-keys-react
 * @uses react-swipeable
 */

import Button from './Button'

class DPad extends Component {
  constructor (props) {
    super(props)

    this.debounceAction = debounce(this._handleAction, 50)

    ArrowKeysReact.config({
      left: () => {
        if (this.props.ready === 'aim') {
          this.debounceAction('keypress', 'left')
        } else if (this.props.disabled.w !== true) {
          this.debounceAction('click', 'w')
        }
      },
      right: () => {
        if (this.props.ready === 'aim') {
          this.debounceAction('keypress', 'right')
        } else if (this.props.disabled.e !== true) {
          this.debounceAction('click', 'e')
        }
      },
      up: () => {
        if (this.props.ready === 'aim') {
          this.debounceAction('click', 'fire')
        } else if (this.props.disabled.n !== true) {
          this.debounceAction('click', 'n')
        }
      },
      down: () => {
        if (this.props.ready !== 'aim' && this.props.disabled.s !== true) {
          this.debounceAction('click', 's')
        }
      }
    })
  }

  /**
   * Handles a debounced click action.
   * @param {enum} type string. expects either "click" or "rotate" or "keypress"
   * @param {string} direction string that determines which button the user has clicked.
   */
  _handleAction (type, direction) {
    if (type === 'click') {
      this.props.onClick(direction)
      return
    }

    if (type === 'keypress') {
      this.props.handleKeyPress(direction)
      return
    }

    if (type === 'rotate') {
      this.props.handleRotate(direction)
    }
  }

  render () {
    const { disabled, map, ready, stage } = this.props

    return (
      <div id='controls' {...ArrowKeysReact.events}>
        <div className='label'>Move</div>
        <div id='dpad' className={`stage-${stage} ${(map === 1 && stage === 1 ? ' start' : ' ')}`}>
          <div className='blank'>&nbsp;</div>

          <Button
            classes='up'
            disabled={disabled.n === true ? 'disabled' : null}
            label={stage === 2 ? 'forward' : 'up'}
            onClick={() => this.debounceAction('click', 'n')}
          />

          <div className='blank'>&nbsp;</div>

          <Button
            classes='left'
            disabled={stage === 2 || disabled.w === true ? 'disabled' : null}
            label='left'
            onClick={() => this.debounceAction('click', 'w')}
          />

          <div className='blank center'>Move</div>

          <Button
            classes='right'
            disabled={stage === 2 || disabled.e === true ? 'disabled' : null}
            label='right'
            onClick={() => this.debounceAction('click', 'e')}
          />

          <div className='blank'>&nbsp;</div>

          <Button
            classes='down'
            disabled={disabled.s === true ? 'disabled' : null}
            label={stage === 2 ? 'back' : 'down'}
            onClick={() => this.debounceAction('click', 's')}
          />

          <div className='blank'>&nbsp;</div>
        </div>

        <div className='label'>Turn</div>

        <div id='turn'>
          <Button
            classes='rotate left'
            label='Rotate Left'
            onClick={() => this.debounceAction('rotate', 'left')}
          />

          <Button
            classes='rotate right'
            label='Rotate Right'
            onClick={() => this.debounceAction('rotate', 'right')}
          />
        </div>

        <Button
          classes={'fire-button ' + ready}
          id='fire-button'
          label='Found It'
          onClick={() => this.debounceAction('click', 'fire')}
        />
      </div>
    )
  }
}

DPad.propTypes = {
  disabled: PropTypes.object,
  handleKeyPress: PropTypes.func,
  handleRotate: PropTypes.func,
  map: PropTypes.number,
  onClick: PropTypes.func,
  ready: PropTypes.string,
  stage: PropTypes.number
}

export default DPad
