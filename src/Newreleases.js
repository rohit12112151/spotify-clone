import React from 'react'
import './Artist.css'
import { useDataLayerValue } from './DataLayer'
import Newreleasescard from './Newreleasescard'


// console.log(new_release)

export default function Newreleases() {
    const [{new_release},dispatch]=useDataLayerValue()
    // console.log(new_release)
  return (
    <>
      {/* <h3 className="name">{your_artist?.items[0]?.artists[0]?.name}</h3> */}
      <h1 style={{paddingTop:"10px" ,paddingBottom:"4px"}}>New Releases</h1>
      <div className="artist">
        {new_release?.albums?.items?.map((item) => (
           <Newreleasescard ig={item.images[0]} name={item.name} id={item.id} key={item.id}/>

        ))}
      </div>
    </>
  )
}
