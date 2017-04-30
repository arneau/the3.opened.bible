import { HYDRATE_STATE } from '../types'

const initialState = {}

const VerseTranslationReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        ...state,
        ...action.payload.entities.VerseTranslations
      }
    default:
      return state
  }
}

export default VerseTranslationReducer