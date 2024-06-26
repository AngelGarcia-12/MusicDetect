import { useEffect, useState } from "react"
import { useUiStore, useAuthStore } from "../../hooks"
import { AudioPlayer } from "../components/AudioPlayer";
import { NavBar } from "../components/NavBar";

export const MusicDetectPage = () => {
  const {user} = useAuthStore();
  const {openDateModal} = useUiStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  // const onDoubleClick = (event) => {
  //   openDateModal();
  // }
  // const onSelect = (event) => {
  //   setActiveEvent(event);
  // }
  // const onViewChanged = (event) => {
  //   localStorage.setItem('lastView', event);
  //   setLastView(event);
  // }

  // useEffect(() => {
  //   startLoadingEvents();
  // }, [])
  

  return (
    <>
        <NavBar/>
        <AudioPlayer/>
    </>
  )
}
