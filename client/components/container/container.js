import Container from '@mui/material/Container'

export default function CustomContainer ({ children, maxWidth = 'sm' }) {
  return (
    <Container maxWidth={maxWidth}>
      {children}
    </Container>
  )
}
