# 🗒️ Client documentation

- <div align="justify">
    💻 The client is developed with <a href="https://nextjs.org/" target="_blank">Next Js</a> from where it will be consulted towards the Api, on the part of the frontend as such it is being made of pure CSS without any framework that helps with the styles section.
  </div>

- <div align="justify">
    📋 Through the cookies the token given from the api orchestrated by <a href="https://jwt.io/" target="_blank">JWT</a> is stored, within the management of the cookies will be done based on a global context using <a href="https://redux.js.org/" target="_blank">Redux</a>, <a href="https://react-redux.js.org/" target="_blank">Redux-React</a> and <a href="https://github.com/kirill-konshin/next-redux-wrapper" target="_blank">Next-Redux-Wrapper</a> apart, all this will be done by the server To avoid misuses from the client, everything is divided into the Actions passed to our Reducers which will provide global services to the application.
  </div>

  <div align="justify">
    🤝 In compensation of not using the dynamic generation of routes or GetStaticPaths, the movies will be presented through independent modal windows using the <a href="https://www.npmjs.com/package/react-modal" target="_blank">React-Modal</a> library which will provide us with almost the same result as the aforementioned through dynamic routes.
  </div>

## Environment variables

- <div align="justify">
    📝  Within this project we must create a .env file where different environment variables will be used that will help us to make requests to the api as the definition for the analytical variables of the next js itself.
  </div>

```bash
# Next expose
NEXT_PUBLIC_ANALYTICS_ID=YOUR_KEY_FAVORITE
NEXT_PUBLIC_ENV_VARIABLE=YOUR_KEY_FAVORITE

# Web protocol
# Use https for production
PROTOCOL=http

# API Protocols
API_PORT=4000
# Use PORT only development
API_HOST=localhost:$API_PORT

# API URL's
# These routes should not be changed because they are the different calls to the api
# The port must match the execution of the local server in case of development
API_URL=$PROTOCOL://$API_HOST/api
USER_API_URL=$API_URL/authentication
MOVIES_API_URL=$API_URL/movie
```

## Installation (Manually)

```bash
git clone git@github.com:DerianCordobaPerez/NEXTJS_MERN_STACK_REDUX_DB_MOVIES.git
cd NEXTJS_MERN_STACK_REDUX_DB_MOVIES/client
npm install
npm run build
npm start
```

<div align="justify">
  Now you can visit: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
</div>
