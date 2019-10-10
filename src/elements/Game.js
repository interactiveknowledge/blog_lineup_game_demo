import React, { Component } from 'react'
import AudioPlayer from 'react-audio-player'
import CloneDeep from 'clone-deep'
import PropTypes from 'prop-types'

/**
 * The interactive game of the GameLineup.js activity.
 *
 * @type {Object}
 * @uses clone-deep
 */

import Boat from './Boat'
import Button from './Button'
import DPad from './DPad'
import Target from './Target'

import canvasImg1 from '../assets/map-1.png'
import canvasImg2 from '../assets/map-2.png'
import canvasImg3 from '../assets/map-3.png'

class Game extends Component {
  constructor (props) {
    super(props)

    this.canvasWidth = 900
    this.canvasHeight = 680
    this.minX = 20
    this.maxX = 800
    this.minY = 20
    this.maxY = 580
    this.multiplier = 30

    this.state = this.props.mapState
  }

  componentDidMount = () => {
    this._loadImage()

    document.addEventListener('keypress', this._keyboardPress)
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.map !== this.props.map) {
      // if we have a new map. Let's update our image and reset the board.
      const shooter = document.getElementById('shooter-1')
      const shooterTwin = document.getElementById('shooter-1-twin')
      const shooter2 = document.getElementById('shooter-2')
      const shooter2Twin = document.getElementById('shooter-2-twin')

      this._loadImage()

      // Resets all our shooters.
      shooter2.parentNode.removeChild(shooter)
      shooter2Twin.parentNode.removeChild(shooterTwin)

      shooter2.style.width = 0
      shooter2Twin.style.width = 0

      shooter2.setAttribute('class', 'shooter')
      shooter2Twin.setAttribute('class', 'shooter')
      shooter2.setAttribute('id', 'shooter-1')
      shooter2Twin.setAttribute('id', 'shooter-1-twin')

      this._resetMapState()
    }
  }

  /**
   * If user misses, offer a "do it for me" option to auto finish the game.
   */
  _doItForMe = () => {
    let top
    let left
    let transform
    let top2
    let left2
    let transform2

    switch (this.props.map) {
      case 1:
        top = 420
        left = 650
        transform = 'rotate(101deg)'
        break
      case 2:
        top = 340
        left = 460
        transform = 'rotate(133deg)'
        break
      case 3:
        top = 320
        left = 668
        transform = 'rotate(121deg)'
        break
      default:
        break
    }

    if (top && left && transform) {
      this._onClickMessage()
      this.setState({
        boat: {
          top: top,
          left: left,
          transform: transform
        }
      })

      setTimeout(() => {
        this._onClickDPad('fire-auto')
      }, 1500)

      setTimeout(() => {
        this._onClickMessage()

        switch (this.props.map) {
          case 1:
            top2 = 343
            left2 = 662
            transform2 = 'rotate(20.5deg)'
            break
          case 2:
            top2 = 340
            left2 = 460
            transform2 = 'rotate(223.5deg)'
            break
          case 3:
            top2 = 423
            left2 = 606
            transform2 = 'rotate(33.5deg)'
            break
          default:
            break
        }

        this.setState({
          boat: {
            top: top2,
            left: left2,
            transform: transform2
          }
        })
      }, 3800)

      setTimeout(() => {
        this._onClickDPad('fire-auto')
      }, 5300)
    }
  }

  /**
   * Get the Boat element's correct rotation.
   */
  _getCorrectRotation = (degrees) => {
    let degOffset = degrees - 360 * parseInt(degrees / 360, 10)
    let newDegrees = degrees

    if (degOffset > 0) {
      if (degOffset > 180) {
        newDegrees = degOffset - 180 - 180
      } else {
        newDegrees = degOffset
      }
    } else {
      if (degOffset < -180) {
        newDegrees = degOffset + 180 + 180
      } else {
        newDegrees = degOffset
      }
    }

    return newDegrees
  }

  /**
   * Get the degrees the boat is rotated.
   */
  _getDegrees = () => {
    let degrees = 0

    try {
      degrees = parseInt(
        this.state.boat.transform.substring(
          this.state.boat.transform.indexOf('(') + 1,
          this.state.boat.transform.indexOf('deg')
        ),
        10
      )
    } catch {
      degrees = 0
    }

    return degrees
  }

  /**
   * Helper method to determine which direction we're moving getting the transform: rotate(Xdeg) style attribute.
   * @param  {integer} degrees rotation degrees value from style transform attribute.
   * @return {string}         direction abbreviation (i.e. n = North)
   */
  _getDirection = (degrees) => {
    degrees = this._getCorrectRotation(degrees)

    if (degrees === 0) {
      return 'w'
    } else if (degrees > 0 && degrees < 90) {
      return 'nw'
    } else if (degrees === 90) {
      return 'n'
    } else if (degrees > 90 && degrees < 180) {
      return 'ne'
    } else if (degrees === 180) {
      return 'e'
    } else if (degrees > 0 - 180 && degrees < 0 - 90) {
      return 'se'
    } else if (degrees === -90) {
      return 's'
    } else if (degrees > 0 - 90 && degrees < 0) {
      return 'sw'
    }
  }

  /**
   * Helper method for getting pixel location from a canvas element.
   * @param  {integer} x x coordiante
   * @param  {integer} y y coordinate
   * @return {string}   calculated (numerical) hexcode for the coordinates given on the canvas element.
   */
  _getPixel = (x, y) => {
    const canvas = document.getElementById('map-layer')
    const context = canvas.getContext('2d')
    const imageData = context.getImageData(x - 1, y - 1, 1, 1)
    const d = imageData.data
    const rgb = ((d[0] << 16) | (d[1] << 8) | d[2]).toString(16)

    return ('000000' + rgb).slice(-6)
  }

  /**
   * Method to help if user does not have touch capability.
   * @param  {string} key string of key description (i.e. "left")
   * @return {event}     state change
   */
  _handleKeyPress = (key) => {
    const boatStyle = document.getElementById('boat').getAttribute('style')
    const newState = CloneDeep(this.state)
    let degrees = parseInt(
      boatStyle.substring(boatStyle.indexOf('(') + 1, boatStyle.indexOf('deg')),
      10
    )

    if (this.message.getAttribute('class').indexOf('active') < 0) {
      switch (key) {
        case 'left':
          degrees = degrees - this.multiplier / 4
          break
        case 'right':
          degrees = degrees + this.multiplier / 4
          break
        default:
          break
      }

      document.getElementById('boat').setAttribute('class', 'moving')

      setTimeout(() => {
        if (document.getElementById('boat')) {
          document.getElementById('boat').removeAttribute('class')
        }
      }, 2000)

      newState.boat.transform = 'rotate(' + degrees + 'deg)'

      this.setState(newState)
    }
  }

  /**
   * Method adjusts the degree value of the transform: rotate() style attribute.
   * @param  {object} e     event object
   * @param  {int} deltaX   delta x position
   * @param  {int} deltaY   delta y position
   *
   * @see https://github.com/dogfessional/react-swipeable#event-props
   */
  _handleRotate = (rotate) => {
    this._handleKeyPress(rotate)
  }

  /**
   * Method to determine if given coordinates is a land coolision.
   * @param  {integer}  x [description]
   * @param  {integer}  y [description]
   * @return {Boolean}   true is "yes land collision"
   */
  _isLandCollision = (x, y) => {
    if (this.state.stage === 2) {
      x = parseInt(x, 10)
      y = parseInt(y, 10)
    }
    const color = this._getPixel(x, y)

    return color !== 'ffffff'
  }

  /**
   * Add in additional keyboard controls.
   */
  _keyboardPress = (event) => {
    if (event.key === 'l') {
      this._handleRotate('left')
    } else if (event.key === 'r') {
      this._handleRotate('right')
    } else if (event.key === 'Enter') {
      this._onClickDPad('fire')
    }
  }

  /**
   * Loads the outline image and draws it on the canvas.
   */
  _loadImage = () => {
    const image = new Image()
    const context = this.canvas.getContext('2d')

    context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasWidth, this.canvasHeight)
    }

    image.src =
      this.props.map === 1
        ? canvasImg1
        : this.props.map === 2
          ? canvasImg2
          : canvasImg3
    image.width = this.canvasWidth
    image.height = this.canvasHeight
  }

  /**
   * Calculates where and how far the boat should move.
   * @param  {string} direction string telling us which direction we're wanting to move the boat.
   * @return {event}           state update
   */
  _moveBoat = (direction) => {
    const boat = document.getElementById('boat').getBoundingClientRect()
    let newState = CloneDeep(this.state)

    document.getElementById('boat').setAttribute('class', 'moving')

    setTimeout(() => {
      if (document.getElementById('boat')) {
        document.getElementById('boat').removeAttribute('class')
      }
    }, 2000)

    let top = newState.boat.top
    let left = newState.boat.left

    let adjacent
    let angle
    let degrees
    let opposite
    let radians
    let forward
    let backward
    let multiplier = this.multiplier

    // Adjusts the speed the boat moves in the direction.
    if (this.state.stage === 1) {
      multiplier = this.multiplier + 10
    }

    let coords = {
      n: {
        x: left + boat.width / 4,
        y: top - multiplier
      },
      e: {
        x: left + multiplier + boat.width / 4,
        y: top + boat.height / 4
      },
      s: {
        x: left + boat.width / 4,
        y: top + multiplier + boat.height / 2
      },
      w: {
        x: left - multiplier,
        y: top + boat.height / 4
      }
    }

    if (this.state.stage === 2 && (direction === 'n' || direction === 's')) {
      let shooterStyle = document
        .getElementById('shooter-1')
        .getAttribute('style')

      degrees = parseInt(
        shooterStyle.substring(
          shooterStyle.indexOf('(') + 1,
          shooterStyle.indexOf('deg')
        ),
        10
      )
      forward = this._getDirection(degrees)
      backward =
        degrees >= 0
          ? this._getDirection(0 - 180 + degrees)
          : this._getDirection(180 + degrees)

      // convert degrees to radians.
      angle =
        Math.abs(degrees) >= 90 ? 180 - Math.abs(degrees) : Math.abs(degrees)
      radians = Math.abs(angle) * (Math.PI / 180)

      // @see http://mathforum.org/sarah/hamilton/ham.1side.1angle.html
      // multiplier = hypotenuse.
      // opposite side.
      opposite = Math.sin(radians) * multiplier
      // adjacent side.
      adjacent = Math.cos(radians) * multiplier

      if (direction === 'n') {
        direction = this._getDirection(degrees)
      } else {
        if (degrees >= 0) {
          direction = this._getDirection(0 - 180 + degrees)
        } else {
          direction = this._getDirection(180 + degrees)
        }
      }
    }

    switch (direction) {
      case 'n':
        top = top - multiplier
        break
      case 's':
        top = top + multiplier
        break
      case 'w':
        left = left - multiplier
        break
      case 'e':
        left = left + multiplier
        break
      case 'ne':
        top = top - opposite
        left = left + adjacent
        break
      case 'nw':
        top = top - opposite
        left = left - adjacent
        break
      case 'se':
        top = top + opposite
        left = left + adjacent
        break
      case 'sw':
        top = top + opposite
        left = left - adjacent
        break
      default:
        break
    }

    if (this.state.stage === 2) {
      coords.ne = {
        x: left + adjacent,
        y: top - opposite
      }

      coords.nw = {
        x: left - adjacent,
        y: top - opposite
      }

      coords.se = {
        x: left + adjacent,
        y: top + opposite
      }

      coords.sw = {
        x: left - adjacent,
        y: top + opposite
      }
    }

    newState.boat.top = top
    newState.boat.left = left

    if (this.state.stage === 1) {
      newState.disabled.n =
        top <= this.minY || this._isLandCollision(coords.n.x, coords.n.y, 'n')
      newState.disabled.e =
        left >= this.maxX || this._isLandCollision(coords.e.x, coords.e.y, 'e')
      newState.disabled.s =
        top >= this.maxY || this._isLandCollision(coords.s.x, coords.s.y, 's')
      newState.disabled.w =
        left <= this.minX || this._isLandCollision(coords.w.x, coords.w.y, 'w')
    } else {
      newState.disabled.n = this._isLandCollision(
        coords[forward].x,
        coords[forward].y
      )
      newState.disabled.e = true
      newState.disabled.w = true
      newState.disabled.s = this._isLandCollision(
        coords[backward].x,
        coords[backward].y
      )
    }

    if (
      newState.disabled.n === true &&
      newState.disabled.s === true &&
      newState.disabled.w === true &&
      newState.disabled.e === true
    ) {
      newState = this.props.mapState
    }

    this.setState(newState)
  }

  /**
   * Method handling when a user clicks the DPad component.
   * @param  {string} direction
   * @return {event}           state update
   */
  _onClickDPad = (direction) => {
    const boat = document.getElementById('boat')
    const shooter = document.getElementById('shooter-' + this.state.stage)
    const shooterTwin = document.getElementById(
      'shooter-' + this.state.stage + '-twin'
    )

    if (document.getElementById('dpad')) {
      document
        .getElementById('dpad')
        .setAttribute('class', 'stage-' + this.state.stage)

      if (this.message.getAttribute('class').indexOf('active') < 0) {
        switch (direction) {
          case 'fire':
          case 'fire-auto':
            shooter.style.top = parseInt(boat.style.top, 10) + 46 + 'px'
            shooter.style.left = parseInt(boat.style.left, 10) + 55 + 'px'
            shooterTwin.style.top = parseInt(boat.style.top, 10) + 46 + 'px'
            shooterTwin.style.left = parseInt(boat.style.left, 10) + 58 + 'px'
            shooter.setAttribute('class', 'shooter fire')

            this.audioFire.audioEl.play()
            this._onFire(this.state.stage, direction)
            break
          default:
            this._moveBoat(direction)
            break
        }
      }
    }
  }

  /**
   * Reaction to clicking the modal messages
   */
  _onClickMessage = () => {
    if (this.message) {
      const message = this.message.getElementsByTagName('p')
      this.message.setAttribute('class', 'message active fadeOut animated')
      setTimeout(() => {
        if (this.message) {
          message[0].innerText = null
          this.message.setAttribute('class', 'message')
        }
      }, 750)
    }
  }

  /**
   * Method that handles when a user clicks and is ready to "fire" at the targets. Calculates the hit.
   * @param  {integer} stage 1 or 2
   * @return {event}       state update
   */
  _onFire = (stage, fire) => {
    const newState = CloneDeep(this.state)
    const layer = document.getElementById('boat-layer')
    const layerOffset = document
      .getElementById('map-layer')
      .getBoundingClientRect()
    const shooter = document.getElementById('shooter-' + this.state.stage)
    const shooterTwin = document.getElementById(
      'shooter-' + this.state.stage + '-twin'
    )
    const targets = document.getElementsByClassName('target-stage-' + stage)
    const message = this.message.getElementsByTagName('p')

    // Because we want smoother rotations, we have to calculate where the boat is pointing after multiple rotations of the boat.
    let degrees = parseInt(
      newState.boat.transform.replace('rotate(', '').replace('deg)', ''),
      10
    )

    const direction = this._getDirection(degrees)

    if (
      this.message.getAttribute('class').indexOf('active') >= 0 ||
      layer.getAttribute('class')
    ) {
      return false
    }

    layer.setAttribute('class', 'shooting')
    message[0].innerText = null

    let w = 0
    let hits = []
    let fireRange = {}

    let firing = setInterval(() => {
      w = w + 6
      shooter.style.width = w + 'px'
      shooterTwin.style.width = w + 'px'

      let shooterBox = shooterTwin.getBoundingClientRect()
      let shooterTwinBox = shooter.getBoundingClientRect()

      switch (direction) {
        case 'w':
        case 'nw':
        case 'n':
          fireRange = {
            y1: shooterBox.top - layerOffset.top,
            x1: shooterBox.left,
            y2: shooterTwinBox.bottom - layerOffset.top,
            x2: shooterTwinBox.right
          }
          break
        case 'e':
        case 'se':
        case 's':
          fireRange = {
            y1: shooterBox.bottom - layerOffset.top,
            x1: shooterBox.right,
            y2: shooterTwinBox.top - layerOffset.top,
            x2: shooterTwinBox.left
          }
          break
        case 'ne':
        case 'sw':
          fireRange = {
            y1: shooterBox.top - layerOffset.top,
            x1: shooterBox.right,
            y2: shooterTwinBox.bottom - layerOffset.top,
            x2: shooterTwinBox.left
          }
          break
        default:
          break
      }

      for (let i = 0; i < targets.length; i++) {
        let targetBox = targets[i].getBoundingClientRect()
        let targetRange = {
          y: targetBox.top - layerOffset.top + targetBox.height / 2,
          x: targetBox.left + targetBox.width / 2
        }

        let offset = targetBox.width
        let check =
          (targetRange.y >= fireRange.y1 - offset &&
            targetRange.y <= fireRange.y1 + offset &&
            (targetRange.x >= fireRange.x1 - offset &&
              targetRange.x <= fireRange.x1 + offset)) ||
          (targetRange.y >= fireRange.y2 - offset &&
            targetRange.y <= fireRange.y2 + offset &&
            (targetRange.x >= fireRange.x2 - offset &&
              targetRange.x <= fireRange.x2 + offset))

        if (check === true && hits.indexOf(targets[i]) === -1) {
          hits.push(targets[i])
        }
      }

      // Clear our interval if both ranges are outside of our canvas area.
      if (
        (fireRange.y1 > layerOffset.bottom && fireRange.y2 < 0) ||
        (fireRange.y2 > layerOffset.bottom && fireRange.y1 < 0) ||
        (fireRange.x1 < 0 && fireRange.x2 > layerOffset.right) ||
        (fireRange.x2 < 0 && fireRange.x1 > layerOffset.right) ||
        w > 1333
      ) {
        clearInterval(firing)

        if (hits.length === targets.length && hits.length !== 0) {
          if (stage === 1) {
            message[0].innerText =
              'You are in sight of the first location. Now line up with the other two landmarks!'
            if (this.message) {
              this.message.setAttribute(
                'class',
                'message active success stage-' +
                  stage +
                  ' ' +
                  fire +
                  ' fadeIn animated'
              )
            }

            newState.stage = 2
            newState.disabled.n = false
            newState.disabled.e = true
            newState.disabled.w = true
            newState.disabled.s = false

            let clone = layer
              .getElementsByClassName('shooter')[0]
              .cloneNode(true)
            let clone2 = layer
              .getElementsByClassName('shooter')[1]
              .cloneNode(true)
            shooter.setAttribute('id', 'shooter-2')
            shooter.setAttribute('class', 'shooter')
            shooter.setAttribute(
              'style',
              'width: 0px; transform: rotate(' +
                degrees +
                'deg); bottom: ' +
                this.state.boat.bottom +
                'px; right:' +
                this.state.boat.right +
                'px'
            )
            shooterTwin.setAttribute('id', 'shooter-2-twin')
            shooterTwin.setAttribute('class', 'shooter')
            shooterTwin.setAttribute(
              'style',
              'width: 0px; transform: rotate(' +
                degrees +
                'deg); bottom: ' +
                this.state.boat.bottom +
                'px; right:' +
                this.state.boat.right +
                'px'
            )

            layer.appendChild(clone)
            layer.appendChild(clone2)
          } else {
            message[0].innerText =
              'You found it! Drop your line, it’s time to fish.'

            if (this.message && document.getElementById('boat')) {
              this.message.setAttribute(
                'class',
                'message active success stage-' +
                  stage +
                  'a map-' +
                  this.props.map +
                  ' fadeIn animated'
              )
              document
                .getElementById('boat')
                .setAttribute('class', 'boat found')

              setTimeout(() => {
                if (document.getElementById('boat')) {
                  document
                    .getElementById('boat')
                    .setAttribute('class', 'boat found')
                }

                message[0].innerText =
                  this.props.map <= 2
                    ? 'Would you like to try the next map?'
                    : "You've found all the éet. Thanks for playing!"
                if (this.message) {
                  this.message.setAttribute(
                    'class',
                    'message active success stage-' +
                      stage +
                      ' map-' +
                      this.props.map +
                      ' fadeIn animated'
                  )
                }
              }, 4000)
            }
          }

          this.setState(newState)
          layer.removeAttribute('class')
        } else {
          message[0].innerText = 'Oops! You missed. Keep trying.'

          if (this.message && shooter && shooterTwin) {
            this.message.setAttribute(
              'class',
              'message active fail stage-' + stage + ' fadeIn animated'
            )

            shooter.style.width = 0
            shooterTwin.style.width = 0
            shooter.setAttribute('class', 'shooter')
            shooterTwin.setAttribute('class', 'shooter')
            for (let i = 0; i < targets.length; i++) {
              targets[i].setAttribute('style', '')
            }
          }

          layer.removeAttribute('class')
        }
      }
    }, 0.001)
  }

  /**
   * Resets the map state.
   */
  _resetMapState = () => {
    this.setState(this.props.mapState)
  }

  render = () => {
    let degrees = this._getDegrees()

    return (
      <div className='wrapper-game'>
        <DPad
          handleKeyPress={this._handleKeyPress}
          handleRotate={this._handleRotate}
          onClick={this._onClickDPad}
          disabled={this.state.disabled}
          ready={this.state.ready}
          rotation={this.state.boat.transform}
          stage={this.state.stage}
          map={this.props.map}
        />

        <canvas
          ref={(e) => {
            this.canvas = e
          }}
          id='map-layer'
          width={this.canvasWidth}
          height={this.canvasHeight}
        />
        <div
          id='map'
          className={`activity-content animated map-${this.props.map}`}>
          <Target name='clue1' stage='1' current={this.state.stage} />
          <Target name='clue2' stage='1' current={this.state.stage} />
          <Target name='clue3' stage='2' current={this.state.stage} />
          <Target name='clue4' stage='2' current={this.state.stage} />

          <Boat
            styles={this.state.boat}
            stage={this.state.stage}
            degrees={this._getCorrectRotation(degrees)}
          />

          <div id='air-layer' />

          <div
            ref={(m) => {
              this.message = m
            }}
            className='message'>
            <p />
            <Button
              label='Ok'
              onClick={() => {
                this._onClickMessage()
              }}
            />
            <Button label='Do It For Me' onClick={() => this._doItForMe()} />
            <Button
              label='Next Map'
              onClick={() => {
                this.props.updateMap(this.props.map + 1)
              }}
            />
            <Button
              label='Restart'
              onClick={() => this.props.updateMap(1)}
            />
          </div>
        </div>

        <AudioPlayer
          src={process.env.PUBLIC_URL + '/assets/audio/lineup-water.mp3'}
          autoPlay
          controls={false}
          loop
          volume={0.3}
        />

        <AudioPlayer
          ref={(e) => {
            this.audioFire = e
          }}
          src={process.env.PUBLIC_URL + '/assets/audio/lineup-fire.mp3'}
          autoPlay={false}
          controls={false}
          controlsList='nodownload'
        />
      </div>
    )
  }
}

Game.propTypes = {
  map: PropTypes.number,
  mapState: PropTypes.object,
  updateMap: PropTypes.func
}

export default Game
