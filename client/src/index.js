import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import browser
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import rootReducer from './reducers/rootReducer';
import BaseLayout from './components/layout/BaseLayout';
import Store from './components/Store';
import Cart from './components/ShoppingCart';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/store'  component={Store} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
