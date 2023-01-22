export const authEndPoint="https://accounts.spotify.com/authorize"  

const redirectUrl = window.location.href+"login";



const clientId="867ae455ee8a4fe4bd66a2dff2acea8a"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const loginUrl=`${authEndPoint}?
client_id=${clientId}
&redirect_uri=${redirectUrl}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true    
`
export const getTokenFromUrl  = ()=>{
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial ,item)=>{
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial ;
        },{})
}