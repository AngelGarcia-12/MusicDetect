import { tracks } from "../data/tracks"

export const useEmotion = () => {

    const getHappy = () => {
        const emotion = tracks.filter(track => track.tags == 'happy');

        return emotion;
    }

    const getSad = () => {
        const emotion = tracks.filter(track => track.tags == 'sad');

        return emotion;
    }

    const getExcited = () => {
        const emotion = tracks.filter(track => track.tags == 'excited');

        return emotion;
    }

    const getSurprised = () => {
        const emotion = tracks.filter(track => track.tags == 'surprised');

        return emotion;
    }

    return {
        getHappy,
        getExcited,
        getSurprised,
        getSad,
    }
}