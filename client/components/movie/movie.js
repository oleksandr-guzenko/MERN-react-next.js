import {useMovie} from 'hooks/useMovie'
import {useDelay} from 'hooks/useDelay'
import Loading from 'components/loading/loading'

export default function Movie({token, id}) {
  const isDelayed = useDelay()
  const movie = useMovie({token, id})

  return (
    <div>
      {!isDelayed
        ? <Loading type='bars' color='#7bff' />
        : <>
          <p>Name: {movie.name}</p>
          <p>Duration: {movie.duration}</p>
          <p>Synopsis: {movie.synopsis}</p>
        </>}
    </div>
  )
}