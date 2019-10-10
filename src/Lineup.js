import React, { Component } from 'react'

/**
 * GameLineup - Finding a Line Up.
 * User views a short intro and then is directed to three Line Up interactives.
 * @type {Object}
 * @see Game.js
 */

import Game from './elements/Game'
import Header from './elements/Header'
import Modal from './elements/Modal'

const data = {
  maps: [
    {
      boat: { top: 580, left: 800, transform: 'rotate(45deg)' },
      disabled: { n: false, e: true, s: true, w: false },
      ready: 'ready',
      stage: 1
    },
    {
      boat: { top: 580, left: 220, transform: 'rotate(135deg)' },
      disabled: { n: false, e: false, s: true, w: true },
      ready: 'ready',
      stage: 1
    },
    {
      boat: { top: 580, left: 800, transform: 'rotate(0deg)' },
      disabled: { n: false, e: true, s: true, w: false },
      ready: 'ready',
      stage: 1
    }
  ]
}

class Lineup extends Component {
  state = {
    map: 1,
    mapState: data.maps[0]
  }

  componentDidMount = () => {
    this._updateMap(1)
  }

  /**
   * Method that hides the help modal.
   */
  _closeModal = () => {
    const modal = document.getElementById('modal')

    modal.setAttribute('class', 'fadeOut animated modal')
    setTimeout(() => {
      if (modal) {
        modal.setAttribute('style', 'display:none;')
      }
    }, 1000)
  }

  /**
   * Loads the sky and randomly pladces birds and clouds.
   */
  _loadSky = () => {
    const air = document.getElementById('air-layer')
    const clouds = Math.floor(Math.random() * 3) + 1
    const birds = Math.floor(Math.random() * 2) + 1
    const min = 40
    const max = 60

    if (air) {
      air.innerText = null

      for (let i = 0; i < clouds; i++) {
        let cloud = document.createElement('div')
        let locationTop = Math.floor(Math.random() * 780)
        let locationLeft = Math.floor(Math.random() * 900)
        let transition = Math.floor(Math.random() * (max - min + 1) + min)
        let moveTop = Math.floor(
          Math.random() * (1000 - locationTop + 1) + locationTop
        )

        cloud.setAttribute(
          'class',
          'cloud cloud-' + (Math.floor(Math.random() * 3) + 1)
        )
        cloud.setAttribute(
          'style',
          'top: ' +
            locationTop +
            'px; left: ' +
            locationLeft +
            'px; transition: all ' +
            transition +
            's linear;'
        )
        air.appendChild(cloud)

        setTimeout(() => {
          if (cloud) {
            cloud.setAttribute(
              'style',
              'top: ' +
                moveTop +
                'px; left: 1900px; transition: all ' +
                transition +
                's linear;'
            )
          }
        })
      }

      for (let i = 0; i < birds; i++) {
        let bird = document.createElement('div')
        let locationTop = Math.floor(Math.random() * 780)
        let locationLeft = Math.floor(Math.random() * 900)
        let transition = Math.floor(Math.random() * (max - min + 1) + min)
        let birdMoveTop = Math.random() < 0.51 ? -200 : 1000
        let birdMoveLeft = Math.random() < 0.51 ? -200 : 1000
        let transform = null

        if (locationTop < 100) {
          locationTop = 200
        }

        if (birdMoveTop > 0 && birdMoveLeft > 0) {
          transform = -145
        } else if (birdMoveTop > 0 && birdMoveLeft < 0) {
          transform = -45
        } else if (birdMoveTop < 0 && birdMoveLeft > 0) {
          transform = 145
        } else if (birdMoveTop < 0 && birdMoveLeft < 0) {
          transform = 45
        }

        bird.setAttribute(
          'class',
          'bird bird-' + (Math.floor(Math.random() * 3) + 1)
        )
        bird.setAttribute(
          'style',
          'top: ' +
            locationTop +
            'px; left: ' +
            locationLeft +
            'px; transform: rotate(' +
            transform +
            'deg);'
        )
        air.appendChild(bird)

        setTimeout(() => {
          if (bird) {
            bird.setAttribute(
              'style',
              'top: ' +
                birdMoveTop +
                'px; left: ' +
                birdMoveLeft +
                'px; transform: rotate(' +
                transform +
                'deg); transition: all ' +
                transition +
                's linear;'
            )
          }
        }, 500)
      }
    } else {
      setTimeout(() => {
        if (document.getElementById('air-layer')) {
          this._loadSky()
        }
      }, 500)
    }
  }

  /**
   * Method that shows the help modal.
   */
  _getModal = () => {
    const modal = document.getElementById('modal')

    modal.setAttribute('style', 'display:block;')
    modal.setAttribute('class', 'fadeIn animated modal')
  }

  /**
   * Updates the map state. (Sets the map number to show)
   * @param  {integer} map the number of the map that the user is currently on.
   */
  _updateMap = map => {
    this.setState({
      started: true,
      map: map,
      mapState: data.maps[map - 1]
    })

    const message = document.getElementsByClassName('message')

    if (message.length > 0) {
      message[0].setAttribute('class', 'message active fadeOut animated')
      setTimeout(() => {
        if (message) {
          message[0].setAttribute('class', 'message')
        }
      }, 750)
    }

    document.getElementById('boat').setAttribute('class', '')

    this._loadSky()
  }

  render () {
    return (
      <div className='lineup-game'>
        <div
          className={
            'activity-content animated activity-lineup activity-map-' +
            this.state.map
          }
        >
          <Header
            title='Find a Line-Up'
            infoClick={() => this._getModal(0, false)}
          />
          {this.state.mapState && (
            <Game
              map={this.state.map}
              updateMap={this._updateMap}
              mapState={this.state.mapState}
            />
          )}

          <Modal
            close={() => {
              this._closeModal()
            }}
          />
        </div>
      </div>
    )
  }
}

export default Lineup
