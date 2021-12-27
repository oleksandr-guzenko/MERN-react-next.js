import Head from 'next/head'

export default function PageTitle ({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="NEXTJS_MERN_STACK_REDUX_DB_MOVIES" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
