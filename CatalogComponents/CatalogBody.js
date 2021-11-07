import React from "react";
import Select from 'react-select'

import '../style/catalog-body.css'
import SearchButton from "./SearchButton";

const actions = [
    {label: "A-Z", value: 1},
    {label: "Z-A", value: 2},
]

function CatalogBody() {
        let films = [ 
            {name: "Anakonda", duration: 440, rating: 5, price: 152},
            {name: "Dimona", duration: 120, rating: 666, price: 25},
            {name: "Turtle", duration: 120, rating: 5, price: 15},
            {name: "Gretha Tunberg", duration: 120, rating: 5, price: 65} 
        ]
        
        const filmList = films.map(films => 
            <div className="film"  key={films.name}>
                <div className="film-tile">
                    <p className="name">{films.name}</p>
                    <p className="film-duration">{films.duration} min</p>
                    <p className="rating">{films.rating}/5</p>    
                </div>
                <div className="pricing">
                    <hr className="br-line"/>
                    <p className="price">price: {films.price} $</p>
                    <a href="#" className="more">View more</a>
                </div>
            </div>
            
        )
        return (
            <div className="catalog">
                <div className="filter-lists">                    
                    <SearchButton />
                </div>
                <div className="films">{filmList}</div>
            </div>
        )
}


export default CatalogBody