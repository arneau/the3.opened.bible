import React from 'react'
import PropTypes from 'prop-types'

import styles from './footer.scss'

class FooterComponent extends React.Component {

  static contextTypes = {
    state: PropTypes.object
  }

  render () {
    let state = this.context.state
    return state.pages.read.verses.selected.length > 0 && (
      <footer className={styles.container}>
        <button>Link verses</button>
      </footer>
    )
  }

}

export default FooterComponent