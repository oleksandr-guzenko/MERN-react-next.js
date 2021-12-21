import {connect} from 'react-redux'
import initialize from 'helpers/initialize'
import Layout from 'components/layout/layout'

/**
 * @description About page
 * 
 * @returns {Component}
 */
function About() {
  return (
    <Layout title='About'>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, doloremque, quibusdam quisquam dolorum, quidem
        necessitatibus, quam quisquam quis, quisquam quisquam.
      </p>
    </Layout>
  )
}

About.getInitialProps = function(context) {
  initialize(context)
}

export default connect((state) => state)(About)