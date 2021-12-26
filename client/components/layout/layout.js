import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import NavBar from 'components/navbar/navbar'
import Container from 'components/container/container'
import PageTitle from 'components/pageTitle/pageTitle'
import {deauthenticate, reauthenticate} from 'redux/actions/authActions'

const Layout = ({children, isAuthenticated, title}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if(isAuthenticated)
      dispatch(reauthenticate(isAuthenticated))
  }, [])

  return (
    <div>
      <PageTitle title={title} />
      <NavBar 
        isAuthenticated={isAuthenticated} 
        deauthenticate={deauthenticate}
      />
  
      <Container>
        {children}
        <div id="modal-container"></div>
      </Container>
    </div>
  )
}

export default Layout