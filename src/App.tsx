import React from 'react';
import NavHeader from './components/common/NavHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/screens/Home';
import Description from './components/screens/Description';
import Order from './components/screens/Order';
import Cart from './components/screens/Cart';

function App() {
  return (
    <div className='container'>
      <NavHeader />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={Description} />
          <Route exact path='/orders' component={Order} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
