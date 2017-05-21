import React from 'react'
import PropTypes from 'prop-types'

import { combineClasses } from '../../functions'
import { TOGGLE_VERSE_SELECTION } from '../../types'
import styles from './verse.scss'

class VerseComponent extends React.Component {

  static contextTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

  handleClick = (id) => {
    let dispatch = this.context.dispatch
    dispatch({
      type: TOGGLE_VERSE_SELECTION,
      verse_id: id
    })
  }

  render () {
    let state = this.context.state, id = this.props.id * 1

    let selected_verses = state.pages.read.verses.selected, classes = combineClasses([
      styles.container,
      selected_verses.indexOf(id) != -1 && styles.selected,
      selected_verses.indexOf(id - 1) == -1 && styles.rounded_top,
      selected_verses.indexOf(id + 1) == -1 && styles.rounded_bottom
    ])

    let { number } = state.entities.verses[id]
    let { text } = state.entities.verseTranslations[id]
    return (
      <div className={classes} onClick={() => this.handleClick(id)}>
        <sup className={styles.number}>{number}</sup>
        <p className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
      </div>
    )
  }

}

export default VerseComponent