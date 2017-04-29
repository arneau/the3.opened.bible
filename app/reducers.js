import { combineReducers } from 'redux'

import asideReducer from './reducers/aside.js'
// import { groups } from './reducers/groups.js'

export default combineReducers({
  aside: asideReducer
})
