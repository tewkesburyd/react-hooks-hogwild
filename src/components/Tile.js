import React from "react";
import HogInfo from "./HogInfo";


const Tile = ({hogs}) => {

    const hogTiles = hogs.map((hog) => <HogInfo hog={hog} key={hog.name}/>)

    return (
        <div className="ui grid container" >
            {hogTiles}
        </div>
    )
}

export default Tile;