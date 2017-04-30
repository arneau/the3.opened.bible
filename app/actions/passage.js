import { queryGraphQL } from '../functions'

import { HYDRATE_STATE } from '../types'

const loadPassage = (reference) => {
  dispatch(fetchDatasByIds(reference))
  // return (dispatch, getState) => {
  //   let idsToFetch = getDatasIdsToFetch(getState(), idsToLoad)
  //   if (idsToFetch.length) {
  //     return dispatch(fetchDatasByIds(idsToFetch))
  //   } else {
  //     return Promise.resolve()
  //   }
  // }
}

const fetchPassage = (reference) => {
  let query = `
    query ($reference: String!) {
      Passage(reference: $reference) {
        Book {
          id
          name
        }
        Chapter {
          id
          number
        }
        Verses {
          id
          number
          VerseTranslations {
            id
            text
          }
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
  fetchPassage
}