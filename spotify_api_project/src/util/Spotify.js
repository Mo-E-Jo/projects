let accessToken;
const clientID = "45ce4c6c9d8a46458c7a4eb263c59daa";
const redirectURL = "http://localhost:3000";

const Spotify = {
  getAccessToken() {
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    // second check for access token
    if (tokenInURL && expiryTime) {
      // Setting access token & expiry time variables
      const expiresIn = Number(expiryTime[1]);

      // Setting the function which will reset the access token when it expires
      //window.setTimeout(() => (tokenInURL = ""), expiresIn * 1000);

      // clearing the url after the access token expires
      //window.history.pushState("Access token", null, "/");
      return tokenInURL[1];
    }

    return "";
  },

  search(term) {
    // first check for the access token
    if (!accessToken) {
      accessToken = Spotify.getAccessToken();
      if (!accessToken) {
        // third check for the access token if 1st & 2nd checks are both false
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
        window.location = redirect;
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
    }

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse) {
          console.log("Response Error");
        }
        return jsonResponse.tracks.items.map((t) => ({
          id: t.id,
          name: t.name,
          artist: t.artists[0].name,
          album: t.album.name,
          uri: t.uri,
        }));
      });
  },

  savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris) return;
    const aToken = Spotify.getAccessToken();
    const header = { Authorization: `Bearer ${aToken}` };
    let userId;
    return fetch(`https://api.spotify.com/v1/me`, { headers: header })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        let playlistId;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: header,
          method: "post",
          body: JSON.stringify({ name: playlistName }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                headers: header,
                method: "post",
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },
};

export { Spotify };
