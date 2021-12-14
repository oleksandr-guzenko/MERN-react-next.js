import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import actions from 'redux/actions/index'
import NavBar from 'components/navbar/navbar'
import Container from 'components/container/container'
import PageTitle from 'components/pageTitle/pageTitle'

const Layout = ({children, isAuthenticated, deauthenticate}) => (
  <div>
    <PageTitle />
    <NavBar 
      isAuthenticated={isAuthenticated} 
      deauthenticate={deauthenticate} 
    />

    <Container>
      {children}
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  deauthenticate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (
  {isAuthenticated: !!state.authentication.token}
)

export default connect(mapStateToProps, actions)(Layout)