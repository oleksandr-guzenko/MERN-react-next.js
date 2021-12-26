import 'styles/globals.css'
import { wrapper } from '../redux/index'

function MyApp ({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
