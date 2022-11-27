import React from "react";

const Filter = ({ setShowGreased, showGreased, setName }) => {

    const handleClick = () => {setShowGreased(showGreased ? false : true )}

    const clearFilter= () => {setShowGreased("")}

    const handleName = (e) => {setName(e.target.value)}

    return (
        <div className="filterWrapper">
            <input onChange={handleName} text="search-name" placeholder="search-name"/>
            <button onClick={handleClick}>{showGreased ? "Not Greased" : "Greased"}</button>
            <button onClick={clearFilter}>Clear Filter</button>
        </div>
    )
}

export default Filter;
