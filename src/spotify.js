export const AUTHendpoint="https://accounts.spotify.com/authorize";
const client_id="74ea9c8f480b4cfca7d922b9df5f7d8b";
const redirectUri="http://localhost:3000";
const response_type="code";
const scope=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "app-remote-control",
    
];
const show_dialog=true

export const getAccessToken=()=>{
    return window.location.hash
           .substring(1)
           .split('&')
           .reduce((initial,item)=>{
              var parts=item.split('=')
              initial[parts[0]]=decodeURIComponent(parts[1]);
              return initial;
           },{})
};

export const accessURL=`${AUTHendpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=${show_dialog}`;