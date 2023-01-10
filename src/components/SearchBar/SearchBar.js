import React from "react";
import './SearchBar.css';

import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
    return(
        <div className="searchContainer">
            <div className="searchBox">
                <SearchIcon
                    sx={{
                        color: "#6B7A83",
                        height: 20,
                        width: 20
                    }}
                />
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className="searchBar"
                />
            </div>
        </div>
    );
}

export default SearchBar;