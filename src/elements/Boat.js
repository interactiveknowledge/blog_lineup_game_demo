import React, { Component } from 'react'

/**
 * Boat component used in GameLineup.js compontent
 * @type {Object}
 */

class Boat extends Component {
  render () {
    const degrees =
      parseInt(
        this.props.styles.transform.replace('rotate(', '').replace('deg)', ''),
        10
      ) - 180
    const shooterStyle = {
      left: this.props.styles.left + 55,
      top: this.props.styles.top + 46,
      transform: this.props.styles.transform
    }
    const shooterTwinStyle = {
      left: this.props.styles.left + 58,
      top: this.props.styles.top + 46,
      transform: 'rotate(' + degrees + 'deg)'
    }

    return (
      <div id='boat-layer'>
        <div id='boat' style={this.props.styles} />
        <div id='shooter-1' className='shooter' style={shooterStyle} />
        <div id='shooter-1-twin' className='shooter' style={shooterTwinStyle} />
      </div>
    )
  }
}

export default Boat
