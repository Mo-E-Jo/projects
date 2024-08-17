import React, {useState} from "react";
import styles from "./App.module.css"
import SearchResults from "../SearchResults/SearchResults";
/*import SearchBar from './SearchBar.js'; */

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
    }]
  );


  return (
      <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        
        <div className={styles['App-playlist']}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={SearchResults}/>
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
      );
}

export default App;
