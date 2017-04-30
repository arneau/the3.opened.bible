import { createStore } from 'redux'

import Reducers from './reducers'
import Enhancers from './enhancers'

const Store = createStore(
  Reducers,
  {},
  Enhancers
)

export default Store