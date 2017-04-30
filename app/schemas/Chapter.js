import { schema } from 'normalizr'

import BookSchema from './Book'

const ChapterSchema = new schema.Entity('Chapters', {
  Book: BookSchema
})

export default ChapterSchema