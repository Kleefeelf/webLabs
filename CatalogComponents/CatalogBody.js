import React, { useEffect, useState } from "react";
import '../style/catalog-body.css'

function CatalogBody() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([]);
    const [filter, setFilter] = useState([])
    const [films, setFilms] = useState([
        { name: "Anakonda", duration: 440, rating: 5, price: 152, genre: ["Action"] },
        { name: "Dimona", duration: 120, rating: 666, price: 25, genre: ["Horror", "Action", "Romance"] },
        { name: "Turtle", duration: 120, rating: 5, price: 15, genre: ["Action", "Racing"] },
        { name: "Gretha Tunberg", duration: 120, rating: 5, price: 65, genre: ["Horror"], },
        { name: "Anakonda 2", duration: 440, rating: 5, price: 252, genre: ["Action"] },
        { name: "JOAA", duration: 120, rating: 666, price: 14, genre: ["Slice of life"] },
        { name: "Ttrurtle", duration: 120, rating: 5, price: 45, genre: ["Thriller", "Racing"] },
        { name: "Zdershen", duration: 120, rating: 5, price: 75, genre: ["Mario"], },
        { name: "Xin Zheao", duration: 440, rating: 5, price: 65, genre: ["Action"] },
        { name: "RIOT", duration: 120, rating: 666, price: -205, genre: ["Horror", "Action", "Romance"] },
        { name: "Leagie", duration: 120, rating: 5, price: 151, genre: ["Action", "Racing"] },
        { name: "Legendoros", duration: 120, rating: 5, price: 465, genre: ["Horror"], }
    ])
    
    const handleSearchChange = event => {
        setSearch(event.target.value)
    }

    const handleFitlerChange = event => {
        setFilter(event.target.value)   
    }

    const handleDetails = (filmName) => {
        const filmDetails = films.filter(film => film.name === filmName)        
        localStorage.setItem('film', JSON.stringify(...filmDetails))
    }
    


    useEffect(() => {
        const filterResults = films.filter(film => 
            Object.values(film).join(' ').toLowerCase().includes(filter))
        

        const searchResults = films.filter(film => 
            Object.values(film).join(' ').toLowerCase().includes(search)
        )

        const fullResults = filterResults.filter(el => searchResults.includes(el))
        setResults(fullResults)
        
    }, [search, filter])
    


    return (
        <div className="catalog">
            <div className="filter-lists">
                <input type="text" className="filter-button" onChange={handleSearchChange} value={search} placeholder="Search films"/>
                <select className="filter-button" id="select" onChange={handleFitlerChange}>
                    <option value="">All</option>
                    <option value="horror">Horror</option >
                    <option value="action">Action</option >
                    <option value="romance">Romance</option >
                    <option value="slice of life">Slice of life</option >
                    <option value="thriller">Thriller</option>
                    <option value="mario">Mario</option> 
                </select>
            </div>
            <div className="films">
                {
                    results.map(film => {
                        return (
                            <div className="film" key={film.name} id={film.name}>
                                <div className="film-tile">
                                    <p className="name">{film.name}</p>
                                    <p className="film-duration">{film.duration} min</p>
                                    <p className="rating">{film.rating}/5</p>
                                </div>
                                <div className="pricing">
                                    <hr className="br-line" />
                                    <p className="price">price: {film.price} $</p>
                                    <a href={`/catalog/${film.name}`} onClick={() => handleDetails(film.name)} className="more">View more</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default CatalogBody