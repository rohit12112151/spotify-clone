export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    artist_id:"7M3xY5iHSzEtoL3FpqOD75",
    album_id:null,
    search:null
    // artists:[],
    // token:'BQC9LcT69md72S2wZuZqpfFzfqRZOmfLbzx38jTqgnE_ZDKnAnDjM1ePF87QSiS08NKEKkr6kKYdpyBzUX23sL4RjRxHaHGRVIjDDG_w0xphc_qGbsz-nvVTtIApLlCDeU4xQ_okqQYf_HWCzSyB09ANrS1gne6v7I9HOt5TnH08ZixzAxe50Csx1a7uZcyo21FIYCTbCsmPCNByI7UP5LLg7yE_AtI'
};

const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':{
            return {
                ...state,
                user:action.user
            }
        }
        case 'SET_TOKEN':{
            return {
                ...state,
                token:action.token
            }
        }
        case 'SET_PLAYLIST':{
            return{
                ...state,
                playlists:action.playlists
            }
        }
        case 'SET_ARTIST':{
            return{
                ...state,
                your_artist:action.your_artist
            }
        }
        case "SET_DISCOVER_WEEKLY":{
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        }
        case "SET_ARTIST_NAME":{
            return {
                ...state,
                ar_name:action.ar_name
            }
        }

        case "SET_ARTIST_ID":{
            return {
                ...state,
                artist_id:action.artist_id
            }
        }

        case "SET_ARTIST_TOP_TRACK":{
            return{
                ...state,
                artist_top_track:action.artist_top_track
            }
        }

        case "SET_NEWRELEASE":{
            return{
                ...state,
                new_release:action.new_release
            }
        }
        case "MYTOPTRACKS":{
            return{
                ...state,
                my_top_tracks:action.my_top_tracks
            }
        }
        case "SET_RECOMMENDATIONS":{
            return{
                ...state,
                recommendations:action.recommendations
            }
        }
        case "SET_PLAYSONG":{
            return{
                ...state,
                play_song:action.play_song
            }
        }
        case "SET_PLAYLISTID":{
            return{
                ...state,
                play_list_id:action.play_list_id
            }
        }
        case "SET_ALBUMID":{
            return{
                ...state,
                album_id:action.album_id
            }
        }
        case "GET_ALBUM_TRACK":{
            return{
                ...state,
                album_track:action.album_track
            }
        }
        case "USER_PLAYLIST_ID":{
            return{
                ...state,
                U_pid:action.U_pid
            }
        }
        case "SET_AVAILABLE_GENRE":{
            return{
                ...state,
                available_genre:action.available_genre
            }
        }
        case "SET_FOOTER_TRACK":{
            return{
                ...state,
                footer_track:action.footer_track
            }
        }
        case "SET_BACK":{
            return{
                ...state,
                search:action.search
            }
        }
        case "SET_CATEGORY":{
            return{
                ...state,
                category:action.category
            }
        }
        case "SET_CATEGORY_PID":{
            return{
                ...state,
                category_pid:action.category_pid
            }
        }
        case "SET_CATEGORY_PLAYLIST":{
            return{
                ...state,
                category_playlist:action.category_playlist
            }
        }
        case "SET_CATEGORY_PLAYLIST_ID":{
            return{
                ...state,
                category_playlist_id:action.category_playlist_id
            }
        }
        case "SET_CATEGORY_PLAYLIST_TRACK":{
            return{
                ...state,
                category_playlist_track:action.category_playlist_track
            }
        }
        case "SET_SEARCH":{
            return{
                ...state,
                search:action.search
            }
        }
        
        
        default:
            return state;
    }

}

export default reducer; 
