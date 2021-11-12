import Movie, {create, find, remove, update} from '../models/movie.model'

export const Create = async (req, res) => {
  const {name, duration, synopsis, images} = req.body

  await create(Movie({name, duration, synopsis, images}))
    .then(() => res.send({
      status: 'success',
      message: 'Movie created successfully',
    }))
    .catch((err) => res.send({
      status: 'failed',
      message: `Error: ${err}`
    }))
}

export const Remove = async (req, res) => {
  const {id} = req.body

  await remove(id)
    .then(() => res.send({
      status: 'success',
      message: 'Movie deleted successfully'
    }))
    .catch((err) => res.send({
      status: 'failed',
      message: `Error: ${err}`
    }))
}

export const Find = async (req, res) => {
  const id = req.params.id ?? undefined

  await find(id)
    .then((movies) => res.send(movies))
    .catch((err) => res.send({
      status: 'failed',
      message: `Error: ${err}`
    }))
}

export const Update = async (req, res) => {
  const {id, name, duration, synopsis, images} = req.body

  await update(id, Movie({name, duration, synopsis, images}))
    .then(() => res.send({
      status: 'success',
      message: 'Movie updated successfully',
    }))
    .catch((err) => res.send({
      status: 'failed',
      message: `Error: ${err}`
    }))
}