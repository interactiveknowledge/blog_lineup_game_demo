import React from 'react'
import ReactDOM from 'react-dom'

import Lineup from './Lineup'

import './styles/styles.scss'

function App () {
  return (
    <div className='App'>
      <Lineup />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
