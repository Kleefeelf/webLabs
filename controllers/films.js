import { v4 as uuidv4 } from 'uuid'

let films = []

export const getFilms = (req, res) => {
    res.send(films)
}

export const createFilm = (req, res) => {
    const film = req.body

    films.push({...film, id: uuidv4()})

    res.send(`Film name ${film.name} added`)
}

export const getFilm = (req, res) => {
    const { id } = req.params

    const foundFilm = films.find((film) => film.id === id)

    res.send(foundFilm)
}

export const deleteFilm = (req, res) => {
    const { id } = req.params
    
    films = films.filter((film) => film.id !== id)

    res.send(`Film with ${id} id was deleted`)
}

export const updateFilm = (req, res) => {
    const { id } = req.params
    const {name, duration, rating} = req.body

    const filmToUpdate = films.find((film) => film.id === id)

    if (name) filmToUpdate.name = name
    if (duration) filmToUpdate.duration = duration
    if (rating) filmToUpdate.rating = rating

    res.send(`Film with id ${id} was updated`)
}