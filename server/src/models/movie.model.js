import {Schema, model} from 'mongoose'

const MovieSchema = Schema({
  name: {type: String, required: true, unique: true},
  duration: {type: String, required: true},
  synopsis: {type: String, unique: true},
  images: {type: [String]},
}, {
  collection: 'Movies',
  versionKey: 'MERN_STACK_DB_MOVIES'
})

const Movie = model('Movie', MovieSchema)

export const find = (name) => Movie.find(name)
export const create = (movie) => movie.save()
export const remove = (name) => Movie.remove({name})

export default Movie