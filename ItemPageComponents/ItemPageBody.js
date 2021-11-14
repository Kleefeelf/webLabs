import React, { useEffect, useState } from "react";

function ItemPageBody(props) {
    const [film, setFilm] = useState({});
    useEffect(() => {
        console.log(props)
    }, [])
    
    return (
        <div className="film-descritpion">
            <div>
                <h1 className="heading">{film.name}</h1>
                <div className="sub-heading">
                    
                </div>
                <div className="sub-heading">
                    Watch on Smart TVs, Playstation, Xbox, 
                    Chromecast, Apple TV, Blu-ray players, and more.
                </div>
            </div>
        </div>
    )  
        
}


export default ItemPageBody