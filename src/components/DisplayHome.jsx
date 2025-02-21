import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets/assets'
import SongItem from './SongItem'
const DisplayHome = () => {
  return (
    <>
    <Navbar />
<div className="my-4">
    <p className='my-5 font-bold text-2xl'>Featured Charts</p>
    <div className="flex overflow-auto">
    {albumsData.map((items, index)=>(<AlbumItem key={index} name={items.name} image={items.image} desc={items.desc} id={items.id}/>))}
    </div>
</div>
<div className="my-4">
    <p className='my-5 font-bold text-2xl'>Today's Biggest hits</p>
    <div className="flex overflow-auto">
        {songsData.map((items, index)=>(<SongItem key={index} name={items.name} desc={items.desc} image={items.image} id={items.id}/>))}
    </div>
</div>
    </>
  )
}

export default DisplayHome