import React from "react";

const ExtraInfo = ({hog}) => {
    return (
    <div key={hog.name} >
        <p>{hog.weight}</p>
        <p>{hog.specialty}</p>
        <p>{hog.greased ? "Greased" : "Not Greased" }</p>
        <p>{hog["highest medal achieved"]}</p> 
    </div>
    )
}

export default ExtraInfo;