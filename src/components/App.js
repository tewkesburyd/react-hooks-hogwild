import React, {useState} from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Filter from "./Filter";


import hogs from "../porkers_data";

function App() {

	const [showGreased, setShowGreased] = useState("")
	const [name, setName] = useState('')


    const handleFilter = hogs
	.filter((hog)=> {
		if (showGreased === ""){
			return true
		} else if(showGreased === true){
		return (hog.greased)
		} else {
			return !hog.greased
		}
    })
	.filter((hog) => {
		return hog.name.toLowerCase().startsWith(name.toLowerCase())
	})


	return (
		<div className="App">
			<Nav />
			<Filter hogs={hogs} setShowGreased={setShowGreased} showGreased={showGreased} setName={setName}/>
			<Tile hogs={handleFilter} />
		</div>
	);
}

export default App;
