import React, { useEffect } from 'react'
import './MediaCard.css'
import { useDataLayerValue } from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js';
const spotify=new SpotifyWebApi()
export default function Newreleasescard({ig,name,id}) {
    const [play_list_id,dispatch]=useDataLayerValue()
    useEffect(()=>{
    //     spotify.getPlaylist(play_list_id).then((response) =>
    //     dispatch({
    //       type: "SET_DISCOVER_WEEKLY",
    //       discover_weekly: response,
    //     })
    //   ).catch((err)=>{console.log(err)});
    // console.log(play_list_id)

    // dispatch({type:"SET_PLAYLISTID",play_list_id:id})}
    },[])
  return (
    <div className='card' onClick={()=>{console.log(id)}}>
    
    <img src={ig?.url} alt=''/>
    <h3><center>{name}</center></h3>
      
    </div>
  )
}
