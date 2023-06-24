import React, { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import MediaCard from './MediaCard'
import './Artist.css'

export default function Artist() {
  const [{your_artist,token }, dispatch] = useDataLayerValue();
//   console.log(your_artist?.items[1]?.id)

  useEffect(() => {
    const f = async () => {
      const res = await fetch(
        "https://api.spotify.com/v1/me/player/play",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res)=>console.log(res)).catch(err=>{});
      // const data = await res.json();
      // console.log("here");
      // console.log(data);
    //   console.log(data.items.length);
    //   console.log(data.items[0].name);
    };
    f();
  }, []);

  return (
    <>
      <h3 className="name">{your_artist?.items[0]?.artists[0]?.name}</h3>
      <div className="artist">
        {your_artist?.items?.map((item) => (
          <MediaCard alm={[item.name, item.images,item.artists ,item.id]} key={item.id}/>
        ))}
      </div>
    </>
  );
}
