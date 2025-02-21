import React, { useContext } from 'react'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import Display from './components/display'
import { PlayerContext } from './context/PlayerContext'
const App = () => {
  const {audioRef, track}=useContext(PlayerContext)
  return (
    <div className='bg-black h-screen'>
      <div className="h-[90%] flex">
<Sidebar />
<Display></Display>
      </div>
<Player />
<audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App