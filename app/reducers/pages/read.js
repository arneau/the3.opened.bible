import {
  STORE_FOUND_VERSES,
  TOGGLE_VERSE_SELECTION
} from '../../types'

const initialState = {
  verses: {
    found: [],
    selected: []
  }
}

const readPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_FOUND_VERSES:
      return {
        verses: {
          found: Object.keys(action.payload.entities.Verses),
          selected: []
        }
      }
    case TOGGLE_VERSE_SELECTION:
      let selected = state.verses.selected
      if (selected.indexOf(action.verse_id) === -1) {
        selected.push(action.verse_id)
      } else {
        selected.splice(selected.indexOf(action.verse_id), 1);
      }
      return {
        verses: {
          found: state.verses.found,
          selected: selected
        }
      }
    default:
      return state
  }
}

export default readPageReducer