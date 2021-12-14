import {connect} from 'react-redux'
import initialize from 'helpers/initialize'

/**
 * @description Home page
 * 
 * @returns {Component}
 */
function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, doloremque, quibusdam quisquam dolorum, quidem
        necessitatibus, quam quisquam quis, quisquam quisquam.
      </p>
    </>
  )
}

Home.getInitialProps = (context) => {
  console.log(context.store)
  initialize(context)
}

export default connect((state) => state)(Home)