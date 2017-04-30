import { HYDRATE_STATE } from '../types'

const initialState = {}

const ChapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        ...state,
        ...action.payload.Chapters
      }
    default:
      return state
  }
}

export default ChapterReducer