import React, { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar() {
    const [userInput, setUserInput] = useState("")

    function handleChange({target}) {
        setUserInput(target.value)
    }

    return ( 
        <>
        <div>
            <input type="text" value={userInput} onChange={handleChange} placeholder='Enter a Song, Album, or Artist'/>
            <button type="submit" className={styles.SearchButton}>SEARCH</button>
        </div>
        </>
    )
}

export default SearchBar;