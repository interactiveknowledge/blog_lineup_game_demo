import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'

/**
 * Generic button compontent used throughout the site.
 * @type {Object}
 */

class Button extends Component {
  constructor (props) {
    super(props)

    this.debounceAction = debounce(this._handleClick, 500)
  }

  /**
   * Handles a debounced click action.
   */
  _handleClick () {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render () {
    const { classes, disabled, id, label, styles } = this.props
    return (
      <button
        className={
          'button-' +
          label.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() +
          (classes ? ' ' + classes : '')
        }
        disabled={disabled || false}
        id={
          id || 'button-' +
              label.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        }
        onClick={() => this.debounceAction()}
        style={styles || null}
      >
        {label}
      </button>
    )
  }
}

Button.propTypes = {
  classes: PropTypes.string,
  disabled: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  styles: PropTypes.object
}

export default Button
