import React from 'react'
import PropTypes from 'prop-types'

import styles from './verse.scss'

class Verse extends React.Component {

  static contextTypes = {
    state: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render () {
    let state = this.context.state, id = this.props.id
    let { number } = state.entities.verses[id]
    let { text } = state.entities.verseTranslations[id]
    return (
      <div className={styles.verse}>
        <p>
          <sup>{number}</sup>
          &nbsp;
          <span dangerouslySetInnerHTML={{__html: text}} />
        </p>
      </div>
    )
  }

}

export default Verse