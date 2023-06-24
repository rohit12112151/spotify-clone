import React, { useState } from 'react'
import './Header.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { useDataLayerValue } from './DataLayer';
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  const [{user},dispatch]=useDataLayerValue();
  
  
  return (
    <div className='header'>
    <div className='header-left'>
      <ArrowBackIosIcon className='arrow'/>
      <ArrowForwardIosIcon className='arrow'/>
    </div>
      
      <img className='logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''></img>
      <div className='header-right'>
        <Diversity2Icon/>
        {/* <a href=''></a> */}
        <a href='https://github.com/rohit12112151' className='github'><GitHubIcon/></a>
        
        <div className='user'>
          {/* <AccountCircleIcon/> */}
          <Avatar src={user?.images[0]?.url} alt=''/>
          <h3>{user?.display_name}</h3>
        </div>
        
      </div>
      
    
    </div>
  )
}
