export default function Details() {

  const movie = {}

  return (
    <div>
      <h1>Details</h1>

      {movie && (
        <div>
          <h2>{movie.name}</h2>
          <p>{movie.synopsis}</p>
        </div>
      )}

    </div>
  )
}