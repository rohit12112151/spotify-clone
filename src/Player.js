import React from 'react'
import './Player'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import './Player.css'
import { useDataLayerValue } from './DataLayer'
import Search from './Search'


export default function Player({spotify}) {
  const [{search},dispatch]=useDataLayerValue()
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar/>
        <Body/>
      </div>
        <Footer/>
    </div>
  )
}
