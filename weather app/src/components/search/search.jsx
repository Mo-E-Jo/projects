import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = () => {
    const [search, setSearch] = useState(null);

    return (
        <AsyncPaginate 
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={s}
        />
    )
}

export default Search;