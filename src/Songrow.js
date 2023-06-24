import React, { useEffect } from 'react'
import './Songrow.css'
import { useDataLayerValue } from './DataLayer'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify=new SpotifyWebApi()
// 

export default function Songrow({track="test"}) {
    const [{play_song,footer_track},dispatch]=useDataLayerValue()
    // useEffect(()=>{
    //       spotify.getTracks([play_song]).then(res=>dispatch({type:"SET_FOOTER_TRACK",footer_track:res})).then(console.log(footer_track)).catch(err=>console.log("err"))
    // },[play_song])
    
  return (
    <div className='Songrow-2'>
    <PlayArrowIcon className='icon-2' fontSize='large' style={{paddingRight:10}}/>
      <img src={track.album?.images[0]?track.album?.images[0]?.url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt='' className='img-2'/>
      <div className='title-2'>
        <h3 onClick={()=>{dispatch({type:"SET_PLAYSONG",play_song:track?.id})}}>{track.name.split('(')[0]}</h3>
        <p>
            {track.artists.map((artist)=>artist.name).join(", ")}
            {/* {track.album.name} */}
        </p>
      </div>
        <p className='alubum-2' style={{paddingLeft:"7%"}}>{track.album?.name.split('(')[0]}</p>
        <p className='date-2' style={{paddingLeft:"7%"}}>{track.album?.release_date}</p>
        <FavoriteBorderIcon className='fav-2'/>
        <p className='time-2' style={{paddingLeft:"0%"}}>{track.duration_ms}</p>
    </div>
  )
}
