import { applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import History from './history'
import { DevToolsEnhancer } from './tools'

const Enhancers = compose(
  applyMiddleware(
    routerMiddleware(History),
    thunkMiddleware
  ),
  DevToolsEnhancer
)

export default Enhancers