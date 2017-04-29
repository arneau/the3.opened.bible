import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import History from './history'
import Reducers from './reducers'
import { DevToolsEnhancer } from './tools'

const Store = createStore(
  connectRouter(History)(Reducers),
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history)
    ),
    DevToolsEnhancer
  )
)

export default Store