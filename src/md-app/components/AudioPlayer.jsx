import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import reactLogo from '../../assets/react.svg';
import './AudioPlayer.css';
import { tracks } from "../../data/tracks";
import { colors } from "../../helpers";
import { useClasification } from "../../hooks/useClasification";
import { SentimentSatisfiedAlt, 
  SentimentVeryDissatisfied, SentimentVerySatisfied } from "@mui/icons-material";
import { Button } from '@mui/material';
import { useState } from "react";
import { useEmotion } from "../../hooks/useEmotion";

export const AudioPlayer = () => {
  const [emotion, setEmotion] = useState('');
  const { getHappy, getSad, getExcited } = useEmotion();
  // const model = useClasification();

  // console.log(model);

  const clickHappy = () => {
    setEmotion(getHappy);
  }

  const clickSad = () => {
    setEmotion(getSad);
  }

  const clickExcited = () => {
    setEmotion(getExcited);
  }

  const clickRoot = () => {
    setEmotion('');
  }

  return (
    <>
      <div id='rootAudioPlayer' onClick={clickRoot}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h1>Music Detect</h1>
      </div>
      <div className="icons">
        <Button
          variant="outlined"
          onClick={clickHappy}
          style={{padding: 0, borderColor: 'transparent'}}
        >
          <SentimentSatisfiedAlt 
              color="action"
              fontSize="large"
              style={{color: "white"}}
            />
        </Button>
        <Button
          variant="outlined"
          onClick={clickSad}
          style={{padding: 0, borderColor: 'transparent'}}
        >
          <SentimentVeryDissatisfied
              color="action"
              fontSize="large"
              style={{color: "white"}}
            />
        </Button>
        <Button
          variant="outlined"
          onClick={clickExcited}
          style={{padding: 0, borderColor: 'transparent'}}
        >
          <SentimentVerySatisfied
              color="action"
              fontSize="large"
              style={{color: "white"}}
            />
        </Button>
      </div>
      <div className="card">
        {
          emotion !== ''
          ? (
              <Player 
                trackList={emotion}
                includeTags={false}
                customColorScheme={colors}
              />
          )
          :
          (
            <Player 
              trackList={tracks}
              includeTags={false}
              customColorScheme={colors}
            />
          )
        }
      </div>
    </>
  )
}
