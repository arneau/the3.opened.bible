import 'isomorphic-fetch'
import {
  normalize,
  schema
} from 'normalizr'

import QuerySchema from './schema'

const capitalizeString = (string) => string.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase())

const combineClasses = (array) => array.filter((value) => value).join(' ')

const queryGraphQL = (query, variables) => {
  return fetch('http://192.168.1.105:4000/graphql/', {
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
  .then((json) => normalize(json.data, QuerySchema))
}

export {
  capitalizeString,
  combineClasses,
  queryGraphQL
}