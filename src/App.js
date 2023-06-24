import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getAccessToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Practice from './practice'
import { useDataLayerValue } from './DataLayer';
import Player from './Player';


      //to link with spotify api
      //install spotify-web-api-js
const spotify=new SpotifyWebApi();

      

function App() {
  // const [token,setToken]=useState(null)
  const [{user,token,artist_id,my_top_tracks,recommendations,artist_top_track,album_id,available_genre},dispatch]=useDataLayerValue();
  // console.log(artist_id) //yes album
  // console.log(new_release) //yes song
  // console.log("my top track")
  // console.log(my_top_tracks) //yes songs

  // console.log("my recommendations")
  // console.log(recommendations)

  // console.log("artist_top_track")
  // console.log(artist_top_track) //yes songs

  // console.log("available_genre")
  // console.log(available_genre) //yes genre

  useEffect(()=>{

    // console.log(artist_id)

    //after login and agree spotify auth we will get hash which contain token,bearer,time_limit
    const hash=getAccessToken();
    window.location.hash="";

    //we need only access_token hence
    const _token=hash.access_token;
    // console.log(_token);
    // console.log(hash);
    if(_token){
      // setToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token: _token
      })


      //set access_token to token
      spotify.setAccessToken(_token)

      //get the logged in detail
      spotify.getMe().then((user)=>{
        // console.log("user : ",user);
        dispatch({
          type:'SET_USER',
          user:user
        });
      });

      spotify.getUserPlaylists().then((playlist)=>{
           dispatch({
            type:'SET_PLAYLIST',
            playlists:playlist
           })
      }).catch(err=>console.log("err"))

      spotify.getPlaylist("5kN55TRMf48eOArpgwBbeM").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      ).catch((err)=>{console.log(err)});


      spotify.getArtistAlbums(artist_id).then(res=>
        dispatch({
          type: "SET_ARTIST",
          your_artist:res
        })).catch(err=>console.log("err"))

        spotify.getArtistTopTracks(artist_id,"IN").then(res=>
          dispatch({
            type: "SET_ARTIST_TOP_TRACK",
            artist_top_track:res
          })).catch(err=>console.log("err"))

        spotify.getArtists(["7M3xY5iHSzEtoL3FpqOD75","2FKWNmZWDBZR4dE5KX4plR","3OLGltG8UPIea8sA4w0yg0","6zZrFenNe3YPttxZsnQQs1",
      "7hVmdlsJp0E2WQIvVl8ngN","4ITkqBlf5eoVCOFwsJCnqo","5f4QpKfy7ptCHwTqspnSJI","4YRxDV8wJFPHPTeXepOstw"]).then(res=>
          dispatch({
            type: 'SET_ARTIST_NAME',
            ar_name:res
          })).catch(err=>console.log("err"))


          spotify.getNewReleases().then(res=>console.log(res)).then(res=>
            dispatch({
                   type: 'SET_NEWRELEASE',
                   new_release:res
            })).catch(err=>console.log("err"))

          spotify.getMyTopTracks().then(res=>
            dispatch({
              type: 'MYTOPTRACKS',
              my_top_tracks:res
            })).catch(err=>console.log("err"))


            spotify.getRecommendations().then(res=>
              dispatch({
                type:"SET_RECOMMENDATIONS",
                recommendations:res
              })).then(console.log(recommendations)).catch(err=>console.log("err"))

               if(album_id)
              spotify.getAlbumTracks(album_id).then(res=>
                dispatch({
                  type:"GET_ALBUM_TRACK",
                  album_track:res
                })).catch(err=>console.log("error"))
                // :console.log("no album found!")

// spotify.getAvailableGenreSeeds().then(res=>console.log(res)).catch(err=>{})
// spotify.getAudioAnalysisForTrack("7F1CiKqrY44kh5cDqwHOnx").then(res=>console.log(res)).catch(err=>{})
// spotify.getMyRecentlyPlayedTracks().then(res=>console.log(res)).catch(err=>{})
// spotify.getTrack("3142jd7zpfue52crr37cp5tqhkr4").then(res=>console.log(res)).catch(err=>{})
// spotify.getMe().then(res=>console.log(res)).catch(err=>{})
// spotify.createPlaylist(user).then(res=>console.log(res)).catch(err=>{})
spotify.
spotify.play({"uris":["spotify:track:50UrzLQaUmPp5LsehLMMKR"]}).then(res=>console.log("res:"+res)).catch(err=>{})
              spotify.getAvailableGenreSeeds().then(res=>dispatch({
                type:"SET_AVAILABLE_GENRE",
                available_genre:res
              })).catch(err=>console.log("err"))

              
              //  

              spotify.getCategories({"limit":"30"}).then(res=>dispatch({
                type: "SET_CATEGORY",
                category : res
              }))
              // spotify.getTracks("0JQ5DAqbMKFHCxg5H5PtqW").then(res=>console.log(res))
            
          


    }
  },[])

  
  
  return (
    <div className="app">
         {/* <Practice/> */}

         {token ? <Player spotify={spotify}/>:<Login/>}
    </div>
  );
}

export default App;
