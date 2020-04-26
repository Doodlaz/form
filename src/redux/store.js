// Setup
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

// Reducers
import reducers from './reducers'

// Middleware
import createSagaMiddleware from 'redux-saga'

// Root saga
import rootSaga from './sagas'

// Creating saga worker
const sagaMiddleware = createSagaMiddleware()
// Compose enchancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Group all reducers
const combinedReducers = combineReducers({
  ...reducers,
})

// Creating store with combined reducers and enchancers
export const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

// Run saga worker with root saga
sagaMiddleware.run(rootSaga)
