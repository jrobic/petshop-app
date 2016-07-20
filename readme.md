[![bitHound Overall Score](https://www.bithound.io/github/jrobic/petshop-app/badges/score.svg)](https://www.bithound.io/github/jrobic/petshop-app)
[![bitHound Dependencies](https://www.bithound.io/github/jrobic/petshop-app/badges/dependencies.svg)](https://www.bithound.io/github/jrobic/petshop-app/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/jrobic/petshop-app/badges/code.svg)](https://www.bithound.io/github/jrobic/petshop-app)

## Install

**Required**
- docker: **1.10**
- docker-compose: **1.6.2**

or

- **nodejs 6**, **npm 3**

```
docker-compose build
```

or

```
npm install
```

## Start App

```
docker-compose run app npm start
```

or

```
npm start
 ```

## Lint

When start dev environment, when changed file, webpack lint automatically with eslint-loader before babel.

```
docker-compose run app npm run lint
```

or

```
npm run lint
```

## Stack

- ES6 + Babel
- React
- React Router
- Redux
- Webpack
- Eslint + airbnb rules
- Mocha + Chai
- Enzyme

## Todo

### Test
- [ ] Components
- [ ] Redux flow
- [ ] Build production
