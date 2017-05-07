import React from 'react'
import PropTypes from 'prop-types'

import { TOGGLE_VERSE_SELECTION } from '../../types'

import styles from './verse.scss'

class Verse extends React.Component {

  static contextTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

  toggleVerseSelection = (id) => {
    let dispatch = this.context.dispatch
    dispatch({
      type: TOGGLE_VERSE_SELECTION,
      verse_id: id
    })
  }

  render () {
    let state = this.context.state, id = this.props.id
    let isSelected = false
    if (state.pages.read.verses.selected.indexOf(id) !== -1) {
      isSelected = true
    }
    let { number } = state.entities.verses[id]
    let { text } = state.entities.verseTranslations[id]
    return (
      <div className={styles.verse} data-is-selected={isSelected} onClick={() => this.toggleVerseSelection(id)}>
        <sup>{number}</sup>
        <p dangerouslySetInnerHTML={{__html: text}} />
      </div>
    )
  }

}

export default Verse