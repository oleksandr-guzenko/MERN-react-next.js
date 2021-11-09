import PropTypes from 'prop-types'
import '../styles/globals.css'

function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App