import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import asideReducer from './reducers/aside.js'
// import { groups } from './reducers/groups.js'

const Reducers = combineReducers({
  aside: asideReducer,
  router: routerReducer
})

export default Reducers