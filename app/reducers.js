import { combineReducers } from 'redux'
import { routerReducer as RouterReducer } from 'react-router-redux'

import BookReducer from './reducers/Book'
import ChapterReducer from './reducers/Chapter'
import VerseReducer from './reducers/Verse'
import VerseTranslationReducer from './reducers/VerseTranslation'

import readPageReducer from './reducers/pages/read'

const Reducers = combineReducers({
  entities: combineReducers({
    books: BookReducer,
    chapters: ChapterReducer,
    verses: VerseReducer,
    verseTranslations: VerseTranslationReducer,
  }),
  pages: combineReducers({
    read: readPageReducer
  }),
  router: RouterReducer
})

export default Reducers