import {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {deauthenticate, reauthenticate} from 'redux/actions/authActions'
import NavBar from 'components/navbar/navbar'
import Container from 'components/container/container'
import PageTitle from 'components/pageTitle/pageTitle'

const Layout = ({children, isAuthenticated}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if(isAuthenticated)
      dispatch(reauthenticate(isAuthenticated))
  }, [])

  return (
    <div>
      <PageTitle />
      <NavBar 
        isAuthenticated={isAuthenticated} 
        deauthenticate={dispatch(deauthenticate)}
      />
  
      <Container>
        {children}
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  deauthenticate: PropTypes.func.isRequired
}

export default Layout