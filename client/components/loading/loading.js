import ReactLoading from 'react-loading'

export default function Loading ({ type, color, height = 100, width = 100 }) {
  return <ReactLoading type={type} color={color} height={height} width={width} />
}
