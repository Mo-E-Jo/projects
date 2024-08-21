import React, { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const [userInput, setUserInput] = useState("")

    function passInput() {
        props.onSearch(userInput)
    }

    function handleChange({target}) {
        setUserInput(target.value);
    }

    return ( 
        <div className={styles.SearchBar}>
            <input type="text" value={userInput} onChange={handleChange} placeholder='Enter a Song, Album, or Artist'/>
            <button type="submit" className={styles.SearchButton} onClick={passInput}>SEARCH</button>
        </div>
    )
}

export default SearchBar;