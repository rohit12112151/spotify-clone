import React, { useReducer, useState } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDataLayerValue } from './DataLayer';
import styled from '@emotion/styled';

export default function Sidebar() {
  const [{playlists,ar_name,artist_id},dispatch]=useDataLayerValue();
  const [arpl,setArpl]=useState("playlist")
  // console.log(ar_name.artists[0].id)
  // const [{artist},dispatch_artist]=useDataLayerValue()
  return (
    <div className='sidebar'>
      <section className='side-section'>
          <SidebarOption title="Home" Icon={HomeIcon} hm="home"/>
          <SidebarOption title="Search" Icon={SearchIcon} sr="search"/>
          
      </section>
      <section className='side-section-2'>
      <div className='lib'>
      <SidebarOption title="library" Icon={LibraryMusicIcon}/>
      <AddIcon className='add-icon'/>
      <ArrowForwardIcon/>
      </div>
      <br/>
      <strong className='playlist' onClick={()=>{setArpl("playlist")}}>Playlist</strong>
      <strong className='playlist' onClick={()=>{setArpl("artist")}}>Artists</strong>
      <br/>
      <br/>
      <hr/>
      {/* console.log({ar_name}) */}

{
  (arpl==="playlist")?
  playlists?.items?.map(playlist=>(
    <SidebarOption title={playlist.name}  ig={playlist.images[0]?.url} pid={playlist.id} key={playlist.id}/>
    /* {console.log({playlist.id})} */
   )):ar_name?.artists?.map(nm=>(
    <SidebarOption title={nm.name}  ig={nm.images[0]?.url} ky={nm.id}/>
   ))

   
}

      
      </section>
    </div>
  )
}
