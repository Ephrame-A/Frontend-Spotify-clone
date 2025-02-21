import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import Aster from'./Aster.jpeg'
import img5 from './img5.jpg'
import Etiege from './Etiege.jpg'
import img8 from './img8.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './Dahlak.jpg'
import Rophnan from './Rophnan.jpeg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import EtiegeSong from './Etiege.mp3'
import Dahlak from './Dahlak.mp3'
import Top50 from './Top50.png'
import mezmur from './mezmur.mp3'
import AsterSong from './Aster.mp3'
import rophnan from './rophnan.m4a'
export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 Ethiopian",
        image: Top50,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Stay in the loop with the latest album releases.",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Uncover the music everyone is talking about.",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Discover the hottest hits of the week!",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your curated playlist of the week’s best tracks.",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Rophnan",
        image: Rophnan,
        file:rophnan,
        desc:"Let the rhythm take you on a journey through joyful melodies.",
        duration:"4:19"
    },
    {
        id:1,
        name: "Song Two",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Song Three",
        image: img3,
        file:song3,
        desc:"Dive into a world of passion and romance with these enchanting love songs.",
        duration:"2:32"
    },
    {
        id:3,
        name: "Teddy Etiege",
        image: Etiege,
        file:EtiegeSong,
        desc:"ብላቴናዉ የፍቅር ሰው",
        duration:"5:34"
    },
    {
        id:4,
        name: "EOTC Mezmur by Muluken",
        image: img5,
        file:mezmur,
        desc:"Time to give Thanks to God",
        duration:"6:50"
    },
    {
        id:5,
        name: "Song Six",
        image: Aster   ,
        file:AsterSong,
        desc:"Unwind and relax with soothing sounds that embrace your soul.",
        duration:"3:47"
    },
    {
        id:6,
        name: "Song Seven",
        image: img13,
        file:Dahlak,
        desc:"Put a smile on your face with these happy tunes",
        duration:"5:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:song1,
        desc:"Reconnect with nature through serene harmonies that soothe the mind.",
        duration:"2:35"
    }
]