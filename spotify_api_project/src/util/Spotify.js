let accessToken;
const clientID = "45ce4c6c9d8a46458c7a4eb263c59daa";
const redirectURL = "https://localhost:3000";

const Spotify = {
    getAccessToken() {
        // first check for the access token
        if (accessToken) return accessToken;

        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
        
        // second check for access token
        if (tokenInURL && expiryTime) {
        // Setting access token & expiry time variables 
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

        // Setting the function which will reset the access token when it expires
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000)
        
        // clearing the url after the access token expires
            window.history.pushState("Access token", null, "/");\
            return accessToken;
        }

        // third check for the access token if 1st & 2nd checks are both false
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`
        windows.location = redirect;
    }
}

export {Spotify};