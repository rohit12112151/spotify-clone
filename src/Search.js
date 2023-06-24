import React, { useEffect } from "react";
import "./Search.css";
import "./Body.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import Songrow from "./Songrow";
const spotify = new SpotifyWebApi();

export default function Search() {
  const [{category, category_pid, category_playlist,category_playlist_id,category_playlist_track}, dispatch] =
    useDataLayerValue();
//   console.log({category})
//   console.log({category_playlist})
  useEffect(() => {
    
    spotify.getCategoryPlaylists(category_pid).then(res=>dispatch({type:"SET_CATEGORY_PLAYLIST",category_playlist:res})).catch(err=>{console.log("error")})
    spotify.getPlaylistTracks(category_playlist_id).then(res=>dispatch({type:"SET_CATEGORY_PLAYLIST_TRACK",category_playlist_track:res})).catch(err=>{})
  }, [category_pid,category_playlist_id]);
  return (
    <div className="search">
      <div className="search-header">
        <span
          onClick={() => {
            dispatch({ type: "SET_BACK", search: false });
          }}
        >
          <ArrowBackIcon fontSize="large" />
        </span>
        <div className="search-input">
          <SearchIcon fontSize="large" />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="search-body">
        <h3
          style={{
            fontSize: "30px",
            fontWeight: "900px",
            letterSpacing: "0.1px",
            padding: "10px",
          }}
        >
          Browse all
        </h3>
        <div className="cards">
          {/* <div className="category"> */}
            {category?.categories?.items.map((item) => (
              <div
                className="search-card"
                id={item.id}
                onClick={() =>
                  dispatch({ type: "SET_CATEGORY_PID", category_pid: item.id })
                }
              >
                <h3 style={{ paddingLeft: "30px", paddingTop: "30px" }}>
                  {item.name}
                </h3>
                <img className="img" src={item.icons[0].url} />
              </div>
            ))}
          {/* </div> */}

         <div className="category-card">
          {
            
            category_playlist?.playlists?.items.map((item)=>(
                <div className="category-playlist-card" onClick={()=>dispatch({type:"SET_CATEGORY_PLAYLIST_ID",category_playlist_id:item.id})}>
                <img className="CP-img" src={item.images[0]?.url} alt=""/>
                <p>{item.description}</p>
            </div>
            ))
          }
            
          </div>
          <div className="Songrow">
            {
                category_playlist_track?.items?.map((item)=>(<Songrow track={item.track}/>))
            }
          </div>

          
        </div>
      </div>
    </div>
  );
}
