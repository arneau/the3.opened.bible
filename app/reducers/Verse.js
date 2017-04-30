import { HYDRATE_STATE } from '../types'

const initialState = {}

const VerseReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        ...state,
        ...action.payload.entities.Verses
      }
    default:
      return state
  }
}

export default VerseReducer