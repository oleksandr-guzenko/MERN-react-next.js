import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NavBar from 'components/navbar/navbar'
import Container from '@mui/material/Container'
import PageTitle from 'components/pageTitle/pageTitle'
import { deauthenticate, reauthenticate } from 'redux/actions/authActions'

const Layout = ({ children, isAuthenticated, title }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated) { dispatch(reauthenticate(isAuthenticated)) }
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
      </Container>
    </div>
  )
}

export default Layout
