import { queryGraphQL } from '../functions'

import {
  HYDRATE_STATE,
  STORE_FOUND_VERSES
} from '../types'

const fetchAllByReference = (reference) => {
  let query = `
    query ($reference: String!) {
      Verses(reference: $reference) {
        id
        Chapter {
          id
          Book {
            id
            name
          }
          number
        }
        number
        VerseTranslations {
          id
          text
        }
      }
    }
  `
  let variables = {
    reference
  }
  return (dispatch) => {
    return queryGraphQL(query, variables)
    .then((payload) => {
      dispatch({
        type: HYDRATE_STATE,
        payload: payload
      })
      dispatch({
        type: STORE_FOUND_VERSES,
        payload: payload
      })
    })
  }
}

function getDatasIdsToFetch (state, idsToLoad) {
  let idsToFetch = []
  idsToLoad.map((id) => {
    if (state.groups.datas[id] === undefined) {
      idsToFetch.push(id)
    }
  })
  return idsToFetch
}

function fetchDatasByIds (ids) {
  return dispatch => {
    return fetch(API_URL + 'groups.php?action=get_datas&ids=' + ids.join(','))
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: HYDRATE_STATE,
        payload: json
      })
    })
  }
}

export {
  fetchAllByReference
}