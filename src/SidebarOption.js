import React, { useEffect, useState } from 'react'
import './SidebarOption.css'
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify=new SpotifyWebApi()


export default function SidebarOption({title,Icon,ig,ky,hm,pid,sr}) {
  // hm?console.log(hm):console.log("none")

  const [{artist_id,your_artist,U_pid,discover_weekly},dispatch]=useDataLayerValue()
  const [toggle,setToggle]=useState()
  useEffect(()=>{
    spotify.getArtistAlbums(artist_id).then(res=>
      dispatch({
        type: "SET_ARTIST",
        your_artist:res
      })).catch(err=>console.log("err"))

      if(U_pid)spotify.getPlaylist(U_pid).then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    ).catch((err)=>{console.log(err)});

     
  },[artist_id,U_pid])
  return (
    <>
    
    <div className='sidebaroption'>
      {Icon?<Icon className="icon"/>:<img className='ig' src={ig} alt=''/>}
      {Icon?hm?<h3 onClick={()=>{dispatch({type:"SET_ALBUMID",album_id:null})}}>{title}</h3>:sr?<h3 onClick={()=>{dispatch({type:"SET_SEARCH",search:true})}}>{title}</h3>:<h3>{title}</h3>:pid?<h4 onClick={()=>{dispatch({type:"USER_PLAYLIST_ID",U_pid:pid})}}>{title}</h4>:<h4 onClick={()=>{dispatch({type:"SET_ARTIST_ID",artist_id:ky})}}>{title}</h4>}
      {/* {Icon?hm?:<h3>{title}</h3>:pid?<h4 onClick={()=>{dispatch({type:"USER_PLAYLIST_ID",U_pid:pid})}}>{title}</h4>:<h4 onClick={()=>{dispatch({type:"SET_ARTIST_ID",artist_id:ky})}}>{title}</h4>} */}
    </div>
    </>
  )
}
