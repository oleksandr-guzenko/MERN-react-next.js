import 'styles/globals.css'
import PropTypes from 'prop-types'
import {wrapper} from '../redux/index'

function MyApp({Component, pageProps}) {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}