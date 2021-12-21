import Document, {Html, Head, Main, NextScript} from 'next/document'

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

_Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
      enhanceComponent: (Component) => Component,
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
  }
}

export default _Document
