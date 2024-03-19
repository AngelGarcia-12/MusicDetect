import { useState } from 'react'
import reactLogo from './img/reactlogo.svg'
import './App.css'
import "@madzadev/audio-player/dist/index.css";
import { AudioPlayer } from './components/AudioPlayer'


function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Music Detect</h1>
      <div className="card">
        <AudioPlayer/>
      </div>
    </>
  )
}

export default App
