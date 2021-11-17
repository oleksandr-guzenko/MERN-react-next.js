import {Schema, model} from 'mongoose'

const MovieSchema = Schema({
  name: {
    type: String, 
    required: true, 
    unique: true, 
    trim: true
  },
  duration: {
    type: String, 
    required: true, 
    trim: true
  },
  synopsis: {
    type: String, 
    unique: true, 
    trim: true
  },
  images: {
    type: [String]
  },
  rating: {
    type: Number,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'Movies',
  versionKey: 'MERN_STACK_DB_MOVIES'
})

const Movie = model('Movie', MovieSchema)

export const find = (id) => {
  if(id)
    return Movie.findById(id)

  return Movie.find()
}

export const create = (movie) => movie.save()

export const remove = (id) => Movie.findByIdAndDelete(id)

export const update = (id, movie) => Movie.findByIdAndUpdate(id, movie)

export default Movie