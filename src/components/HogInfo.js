import React, {useState} from "react";
import ExtraInfo from "./ExtraInfo";

const HogInfo = ({hog}) =>{

    const [extra, setExtra] = useState(false)

    const handleClick = (e) =>{setExtra((prevExtra) => !prevExtra)}

    return (
        <div className="ui eight wide column" onClick={handleClick}>
            <div className="pigTile" key={hog.name} >
                    <p>{hog.name}</p>
                    <img src={hog.image} alt={hog.name} width="200px" height="200px"/>  
                    {extra ? <ExtraInfo hog={hog} /> : ""}
            </div>
        </div>
    )
}

export default HogInfo;