import React,{useEffect,useState} from "react";
import "./Footer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import LyricsIcon from "@mui/icons-material/Lyrics";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import VolumeUpSharpIcon from "@mui/icons-material/VolumeUpSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { Grid, Slider } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

import SpotifyWebApi from 'spotify-web-api-js';
const spotify=new SpotifyWebApi()

export default function Footer() {
    const [{footer_track,play_song},dispatch]=useDataLayerValue();
    const [play_pause,setPlay_pause]=useState("play")
    // console.log(footer_track)
    useEffect(()=>{
      if(play_song)spotify.getTracks([play_song]).then(res=>dispatch({type:"SET_FOOTER_TRACK",footer_track:res})).then(res=>console.log(footer_track)).catch(err=>console.log("err ft"))
      if(play_song)spotify.getAudioFeaturesForTrack(play_song).then(res=>console.log(res)).catch(err=>{console.log("err ps")})
      let audio=document.getElementById("audio")
      if(audio.paused)setPlay_pause("pause")
      
    },[play_song])
  return (
    <div className="footer">
      <div className="footer_left">
        <img src={footer_track?.tracks[0]?.album?.images[0]?.url} alt="" className="album-logo"></img>
        <div className="song-info">
          <h3>{footer_track?footer_track.tracks[0].name:"song"}</h3>
          <p>{footer_track?.tracks[0]?.artists[0]?.name}</p>
        </div>
        <FavoriteBorderSharpIcon fontSize="large" style={{paddingLeft:"20px"}}/>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="green" fontSize="large"/>
        <SkipPreviousIcon className="icon" fontSize="large"/>
        <div onClick={()=>{
          play_pause==="play"?setPlay_pause("pause"):setPlay_pause("play")
        }}>
        
        {
          play_pause==="play"?<PlayCircleIcon className='icon' onClick={()=>{var audio = document.getElementById("audio");audio.play()}} sx={{ fontSize: "60px" ,backgroungColor:"green"}}></PlayCircleIcon>:
          <PauseCircleFilledIcon onClick={()=>{document.getElementById("audio").pause()}} className='icon' sx={{ fontSize: "60px" ,backgroungColor:"green"}}/>
          
        }

        </div>
        {/* <PlayCircleIcon sx={{ fontSize: "60px" ,backgroungColor:"green"}} className="icon"/> */}
        <SkipNextIcon className="icon" fontSize="large"/>
        <RepeatIcon className="green" fontSize="large"/>
      </div>
      <div className="footer_right">
        {/* <Grid container spacing={2}> */}
          {/* <Grid item>
            <LyricsIcon />
          </Grid>
          <Grid item>
            <QueueMusicIcon />
          </Grid>
          <Grid item>
            <CastConnectedOutlinedIcon />
          </Grid>
          <Grid item>
            <VolumeUpSharpIcon />
          </Grid> */}
          <Grid item xs>
            {/* <Slider /> */}
        <audio className="audio" id="audio" src={footer_track?footer_track.tracks[0].preview_url:"song"} controls></audio>

          </Grid>
        {/* </Grid> */}
      </div>
    </div>
  );
}
