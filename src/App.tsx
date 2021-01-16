import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShipmentDetail from './containers/ShipmentDetail';
import ShipmentList from './containers/ShipmentList';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={ShipmentList} />
      <Route path='/ShipmentDetail/:id' component={ShipmentDetail} />
    </Switch>
  </BrowserRouter>
);

export default App;
