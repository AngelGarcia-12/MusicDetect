import Player from "@madzadev/audio-player";
import { tracks } from "../data/tracks";

export const AudioPlayer = () => {
  return (
    <div>
      <Player 
        trackList={tracks}
        includeTags={false}
      />
    </div>
  )
}
