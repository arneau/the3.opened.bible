import {
  normalize,
  schema
} from 'normalizr'

const BookSchema = new schema.Entity('Books')

const ChapterSchema = new schema.Entity('Chapters')

const VerseTranslationSchema = new schema.Entity('VerseTranslations')

const VerseSchema = new schema.Entity('Verses', {
  VerseTranslations: [VerseTranslationSchema]
})

const PassageSchema = new schema.Entity('Passage', {
  Book: BookSchema,
  Chapter: ChapterSchema,
  Verses: [VerseSchema]
})

const queryGraphQL = (query, variables) => {
  return fetch('http://localhost:4000/graphql/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
  .then((response) => response.json())
  .then((json) => normalize(json.data.Passage, PassageSchema).entities)
}

export {
  queryGraphQL
}