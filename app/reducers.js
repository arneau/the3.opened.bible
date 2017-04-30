import { combineReducers } from 'redux'
import { routerReducer as RouterReducer } from 'react-router-redux'

import BookReducer from './reducers/Book'
import ChapterReducer from './reducers/Chapter'
import VerseReducer from './reducers/Verse'
import VerseTranslationReducer from './reducers/VerseTranslation'

const Reducers = combineReducers({
  Books: BookReducer,
  Chapters: ChapterReducer,
  Verses: VerseReducer,
  VerseTranslations: VerseTranslationReducer,
  Router: RouterReducer
})

export default Reducers