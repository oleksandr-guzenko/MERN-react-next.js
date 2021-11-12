import Container from 'components/container/container'
import PageTitle from 'components/pageTitle/pageTitle'

/**
 * @description About page
 * 
 * @returns {Component}
 */
export default function About() {
  return (
    <>
      <PageTitle title="About" />
      <Container>
        <h1>About</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, doloremque, quibusdam quisquam dolorum, quidem
        necessitatibus, quam quisquam quis, quisquam quisquam.
        </p>
      </Container>
    </>
  )
}