import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Boat component used in GameLineup.js compontent
 * @type {Object}
 */

class Boat extends Component {
  render () {
    const { styles } = this.props

    const degrees =
      parseInt(
        styles.transform.replace('rotate(', '').replace('deg)', ''),
        10
      ) - 180
    const shooterStyle = {
      left: styles.left + 55,
      top: styles.top + 46,
      transform: styles.transform
    }
    const shooterTwinStyle = {
      left: styles.left + 58,
      top: styles.top + 46,
      transform: 'rotate(' + degrees + 'deg)'
    }

    return (
      <div id='boat-layer'>
        <div id='boat' style={styles} />
        <div id='shooter-1' className='shooter' style={shooterStyle} />
        <div id='shooter-1-twin' className='shooter' style={shooterTwinStyle} />
      </div>
    )
  }
}

Boat.propTypes = {
  styles: PropTypes.object
}

export default Boat
