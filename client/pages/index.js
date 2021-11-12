import Container from 'components/container/container'
import PageTitle from 'components/pageTitle/pageTitle'

/**
 * @description Home page
 * 
 * @returns {Component}
 */
export default function Home() {
  return (
    <>
      <PageTitle title="Home" />
      <Container>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, doloremque, quibusdam quisquam dolorum, quidem
          necessitatibus, quam quisquam quis, quisquam quisquam.
        </p>
      </Container>
    </>
  )
}
