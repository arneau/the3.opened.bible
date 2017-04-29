import { compose, createStore } from 'redux'
import { connectRouter } from 'connected-react-router'

import History from './history'
import Reducers from './reducers'
import { DevToolsEnhancer } from './tools'

const Store = createStore(
  connectRouter(History)(Reducers),
  {},
  compose(
    DevToolsEnhancer
  )
)

export default Store