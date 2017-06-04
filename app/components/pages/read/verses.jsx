import React from 'react'
import PropTypes from 'prop-types'

import { combineClasses } from '../../../functions'
import VerseComponent from '../../elements/verse.jsx'
import styles from './verses.scss'

class VersesComponent extends React.Component {

  static contextTypes = {
    state: PropTypes.object
  }

  render () {
    let state = this.context.state
    let classes = combineClasses([
      styles.container,
      state.pages.read.verses.selected.length > 0 && styles.raised
    ])
    let ids = state.pages.read.verses.found
    return (
      <div className={classes}>
        {
          ids.map((id) => {
            return (
              <VerseComponent key={id} id={id} />
            )
          })
        }
      </div>
    )
  }

}

export default VersesComponent