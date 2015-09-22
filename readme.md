# React Starter

Starter Application for React SPAs, this kit includes:

- [Ava](https://github.com/sindresorhus/ava) for JS unit tests
- [Babel](https://babeljs.io/)
- [BASSCSS](http://www.basscss.com/) for CSS
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [Istanbul](https://github.com/gotwarlost/istanbul)
- [JSCS](http://jscs.info/) For JS linting
- [Phoenix](http://www.phoenixframework.org/) as backend
- [React Router](https://github.com/rackt/react-router)
- [React](http://facebook.github.io/react/)
- [Redux devtools](https://github.com/gaearon/redux-devtools)
- [Redux-crud](https://github.com/Versent/redux-crud)
- [Redux](https://github.com/rackt/redux)
- [Robo](https://github.com/tj/robo) for running tasks
- [Seamless-immmutable](https://github.com/rtfeldman/seamless-immutable)
- [Webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html)
- [Webpack](http://webpack.github.io/)

Set up
----------------

1. Install Docker and Docker-compose


2. Create data container

```
make build-data
```

3. Build all container

```
make build-containers
```

Run
----------------

```
docker-compose up
```

Open http://ip_or_host_to_docker_vm:4002/


Lint
----------------

```
make client-lit
```

Test
----------------

```
make client-test
```

Testing with coverage:

```
make client-test-coverage
```

Watch mode:

```
gulp test-watch
```

Running single test:

```
robo test ./src/users/Show.test.js
```

## TODO:

- Test using CI
- Deployment with Docker
- Flow type checker (Doesn't work with ES6)


