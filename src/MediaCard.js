import React, { useEffect } from 'react';
import './MediaCard.css';
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify=new SpotifyWebApi()

export default function MediaCard({alm}) {
    const [{album_id,album_track},dispatch]=useDataLayerValue();
    useEffect(()=>{
        // console.log(album_id)
        if(album_id)
        spotify.getAlbumTracks(album_id).then(res=>
            dispatch({
              type:"GET_ALBUM_TRACK",
              album_track:res
            })).catch(err=>console.log("error msg"))
            // :console.log("error msg outside")
        // console.log("media card")
    },[album_id])
    
    //  (dispatch({type:"SET_PLAYLISTID",play_list_id:alm[2][0].id})}
  return(
    <div className='card' onClick={()=>{dispatch({type:"SET_ALBUMID",album_id:alm[3]})}}>
          <img src={alm[1][0].url} alt=''/>
          {/* <img src={alm?.images[0]?.url} alt=''/> */}
          {/* <img src={alm?.map(ig=>(ig.images[0].url))} alt=''/> */}
          <h2>{alm[0]}</h2>
          <p>
            {
                alm[2][0].name
            }
          </p>
          {/* <h3>{alm?.artists[0]?.name}</h3> */}
          {/* <img src={alm?.items[1]?.images[0]?.url} alt=''/>
          <h2>{alm?.items[1]?.name}</h2>
          <h3>{alm?.items[0]?.artists[0]?.name}</h3> */}
    </div>
  );
}