import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import reactLogo from '../../assets/react.svg';
import './AudioPlayer.css';
import { tracks } from "../../data/tracks";
import { colors } from "../../helpers";

export const AudioPlayer = () => {
  return (
    <>
      <div id='rootAudioPlayer'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h1>Music Detect</h1>
      </div>
      <div className="card">
        <Player 
          trackList={tracks}
          includeTags={false}
          customColorScheme={colors}
        />
      </div>
    </>
  )
}
