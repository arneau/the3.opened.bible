import { schema } from 'normalizr'

import ChapterSchema from './Chapter'
import VerseTranslationSchema from './VerseTranslation'

const VerseSchema = new schema.Entity('Verses', {
  Chapter: ChapterSchema,
  VerseTranslations: [VerseTranslationSchema]
})

export default VerseSchema