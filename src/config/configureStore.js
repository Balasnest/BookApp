import AppNavigation from '../Navigation/AppNavigation'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'


export default configureStore = () => {
  let store = createStore(reducers, {}, applyMiddleware());
  return store;
}

// {} - initial state which we need to pass to redux store application.
