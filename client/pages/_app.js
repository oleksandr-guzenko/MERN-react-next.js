import 'styles/globals.css'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Container} from 'next/app'
import wrapper from '../redux/index'

function App({Component, pageProps, store}) {
  return (
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

App.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
    
  return {pageProps}
}

export default wrapper.withRedux(App)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}