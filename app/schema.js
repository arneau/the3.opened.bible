import { schema } from 'normalizr'

import BookSchema from './schemas/Book'
import ChapterSchema from './schemas/Chapter'
import VerseSchema from './schemas/Verse'

const QuerySchema = new schema.Entity('Query', {
  Book: BookSchema,
  Chapter: ChapterSchema,
  Verse: VerseSchema,
  Verses: [VerseSchema]
})

export default QuerySchema