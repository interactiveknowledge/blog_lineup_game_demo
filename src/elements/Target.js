import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Target component is used in GameLocation.js as the "targets" where the Boat needs to line up with.
 * @type {Object}
 */

class Target extends Component {
  render () {
    let styles = null

    if (
      parseInt(this.props.stage, 10) === 2 &&
      parseInt(this.props.current, 10) === 1
    ) {
      styles = { display: 'none' }
    } else {
      styles = { display: 'block' }
    }

    return (
      <div
        id={this.props.name}
        className={`target target-stage-${this.props.stage} target-${this.props.name}`}
        style={styles}>
        X
      </div>
    )
  }
}

Target.propTypes = {
  current: PropTypes.number,
  name: PropTypes.string,
  stage: PropTypes.number
}

export default Target
