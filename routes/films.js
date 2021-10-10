import express from 'express'
import { v4 as uuidv4 } from 'uuid'

import { createFilm, getFilm, getFilms, updateFilm, deleteFilm } from '../controllers/films.js'

const router = express.Router()

router.get('/', getFilms)

router.post('/', createFilm)
 
router.get('/:id', getFilm)

router.delete('/:id', deleteFilm)

router.patch('/:id', updateFilm)

export default router