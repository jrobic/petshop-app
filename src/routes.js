import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AnimalsPage from './components/animals/AnimalsPage';
import ManageAnimalPage from './components/animals/ManageAnimalPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AnimalsPage} />
    <Route path="/add" component={ManageAnimalPage} />
    <Route path="/:id" component={ManageAnimalPage} />
  </Route>
);

