import React from "react";

const SearchBar = ({ handleSearchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--lightest-blue bg-white" 
                type="search"
                placeholder="Search robots"
                onChange={handleSearchChange}
            ></input>
        </div>
    );
}

export default SearchBar;