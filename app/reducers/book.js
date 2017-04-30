import { HYDRATE_STATE } from '../types'

const initialState = {}

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        ...state,
        ...action.payload.Books
      }
    default:
      return state
  }
}

export default BookReducer