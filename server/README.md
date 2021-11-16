# Server documentation

[![npm version](https://badge.fury.io/js/babylonjs.svg)](https://nodejs.org/es/)

- <div align="justify">
    Server developed using <b>NodeJs, ES6 and MongoDB</b> technology, this will provide us with an api, the server is deployed using <a href="https://www.heroku.com">Heroku</a> and the database is hosted using <a href="https://www.mongodb.com">MongoDB</a>.
  </div>

- <div align="justify">
    The MongoDB connection will be made through a <b>Cluster</b> created with <a href="https://www.mongodb.com/atlas/database">MongoDB Atlas </a>. Within this project, different environment variables will be used, which will serve us both for the port where said server will be executed or the credentials of our MongoDB cluster.
  </div>

## Environment variables

- <div align="justify">
    📝  Within this project we must create an <b>.env</b> file where different environment variables will be used which will serve us both for the port where said server will be executed or the credentials of our MongoDB cluster.
  </div>

```bash
PORT=YOUR_PORT # Port where the server will be executed, exmaple: PORT=3000

DB_HOST=YOUR_DB_HOST # Host of the MongoDB cluster, example: DB_HOST=ds151208.mlab.com or localhost

DB_USER=YOUR_DB_USER # User of the MongoDB cluster, example: DB_USER=admin

DB_PASSWORD=YOUR_DB_PASSWORD # Password of the MongoDB cluster, example: DB_PASSWORD=admin

DB_PORT=YOUR_DB_PORT # Port of the MongoDB to localhost, example: DB_PORT=27017

DB_NAME=YOUR_DB_NAME # Name of the database, example: DB_NAME=Pplam

JWT_SECRET=YOUR_JWT_SECRET # Secret used to sign the JWT, example: JWT_SECRET=secret
```

## Technologies

- <div align="justify">
    We must have <a href="https://nodejs.org/es/">Npm and NodeJs</a> installed, optionally and for ease when executing our application, <a href="https://www.docker.com/">Docker</a> and <a href="https://docs.docker.com/compose/install/">docker-compose</a> could be installed with which we will encapsulate our server within virtual containers.
  </div>

## Installation for development with docker-compose (Recommended)

```bash
git clone git@github.com:DerianCordobaPerez/MERN_STACK_DB_MOVIES.git
cd MERN_STACK_DB_MOVIES
docker-compose up
```

## Installation (Manually)

```bash
git clone git@github.com:DerianCordobaPerez/MERN_STACK_DB_MOVIES.git
cd MERN_STACK_DB_MOVIES
npm install
npm run build
npm start
```
