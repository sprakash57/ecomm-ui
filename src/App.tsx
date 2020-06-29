/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import NavHeader from './components/common/NavHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/screens/Home';
import Description from './components/screens/Description';
import Order from './components/screens/Order';
import Cart from './components/screens/Cart';
import { fetchBooks } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

interface IProps {
  fetchBooks(): void
}

const App: React.FC<IProps> = (props) => {

  useEffect(() => {
    props.fetchBooks();
  }, [])

  return (
    <div className='container'>
      <BrowserRouter>
        <NavHeader />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/orders' component={Order} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/:id' component={Description} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ fetchBooks }, dispatch)

export default connect(null, mapDispatch)(App);
