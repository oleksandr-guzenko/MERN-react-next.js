import PropTypes from 'prop-types'
import NavBar from 'components/navbar/navbar'
import 'styles/globals.css'

function App({Component, pageProps}) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App