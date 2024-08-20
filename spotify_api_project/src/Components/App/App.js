import React, {useState} from "react";
import styles from "./App.module.css"
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar.js";

function App () {
  const [searchResults, setSearchResults] = useState(
    [{
      name: "examples track name 1", 
      artist: "examples track artist 1",
      album: "examples track album 1",
      id: 1
    },
    {
      name: "examples track name 2", 
      artist: "examples track artist 2",
      album: "examples track album 2",
      id: 2
    },
  ]
  );

  const [playlistName, setPlaylistName] = useState("Example Playlist Name");

  const [playlistTracks, setPlaylistTracks] = useState(
    [{
      name: "examples playlist name 1", 
      artist: "examples playlist artist 1",
      album: "examples traplaylistck album 1",
      id: 1
    },
    {
      name: "examples playlist name 2", 
      artist: "examples playlist artist 2",
      album: "examples playlist album 2",
      id: 2
    },
    {
      name: "examples playlist name 2", 
      artist: "examples playlist artist 2",
      album: "examples playlist album 2",
      id: 3
    },
  ]
  )

  function addTrack(track) {
    const existingTrack = playlistTracks.find(t => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
      if (existingTrack) {
        console.log("Track already exists")
      } else {
        setPlaylistTracks(newTrack);
      }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter(t => t.id === track.id);
    setPlaylistTracks(existingTrack)
  }


  return (
      <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div className={styles['App-playlist']}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
          {/* <!-- Add a Playlist component --> */}
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
        </div>
      </div>
    </div>
      );
}

export default App;
