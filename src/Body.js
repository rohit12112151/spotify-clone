import React,{useState} from 'react'
import './Body.css'
import './Songrow.css'
import Header from './Header'
import Songrow from './Songrow'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDataLayerValue } from './DataLayer';
import Artist from './Artist';
import Newreleases from './Newreleases';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TagIcon from '@mui/icons-material/Tag';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import Search from './Search'



export default function Body() {
  const [{discover_weekly,artist_id,album_id,album_track,search},dispatch]=useDataLayerValue()
  // const [changeColor,setChangecolor]=useState(false);
  const [play_pause,setPlay_pause]=useState("play")
 
  return (
    
    <>
    {
    search?<Search/>:
    <div className='body'>
    <Header/>
    {/* 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228' */}
    <div className='main_body'>
      <img src={discover_weekly?.images[0]?.url} alt=''></img>
      <div className='body-textinfo'>
        <h1>{discover_weekly?.name}</h1>
        <h4>Discover Weekly</h4>
        <p><strong>{discover_weekly?.owner?.display_name}</strong> : {discover_weekly?.tracks?.total} songs</p>
      </div>
    </div>
    <div className='body-song'>
      <div className='body-icon'>
        <div onClick={()=>{
          play_pause==="play"?setPlay_pause("pause"):setPlay_pause("play")
        }}>
        {
          play_pause==="play"?<PlayCircleIcon className='play' sx={{ fontSize: "80px" ,backgroungColor:"green"}}/>:
          <PauseCircleFilledIcon className='play' sx={{ fontSize: "80px" ,backgroungColor:"green"}}/>
         
        }

        </div>
        <FavoriteBorderSharpIcon fontSize='large'/>
        <MoreHorizIcon fontSize='large' style={{marginLeft: "20px"}}/>
      </div>
    </div>

    <Artist/>
    <Newreleases/>
    <div className='songrow-header'>
      <TagIcon style={{paddingLeft:"2%"}}/>
      <p style={{paddingLeft:"15%"}}>Title</p>
      <p style={{paddingLeft:"30%"}}>Album</p>
      <p style={{paddingLeft:"10%"}}>Date Added</p>
      <AccessTimeIcon style={{paddingLeft:"17%"}}/>
      {/* <p style={{paddingLeft:"16%"}}>Time</p> */}
    </div>
    {
      album_id?album_track?.items?.map((itms)=>(<Songrow track={itms}/>)):
      discover_weekly?.tracks.items.map((item)=>(
        <Songrow track={item.track} key={item.track.id}/>
      ))
    }

    </div>
    }
     </> 
)
}
