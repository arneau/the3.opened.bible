import { applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import History from './history'
import { DevToolsEnhancer } from './tools'

const Enhancers = compose(
  applyMiddleware(
    routerMiddleware(History)
  ),
  DevToolsEnhancer
)

export default Enhancers