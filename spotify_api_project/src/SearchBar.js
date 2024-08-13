import React, { useState } from 'react';

function SearchBar() {
    const [userInput, setUserInput] = useState("")

    function handleChange({target}) {
        setUserInput(target.value)
    }

    return (
        <>
        <form>
            <label>Type Song Name Here:
                <input type="text" value={userInput} onChange={handleChange}/>
            </label>
            <button type="submit">SEARCH</button>
        </form>
        </>
    )
}

export default SearchBar;