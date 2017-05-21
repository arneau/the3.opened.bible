import React from 'react'
import PropTypes from 'prop-types'

import HeaderComponent from './read/header.jsx'
import VerseComponent from '../elements/verse.jsx'

import styles from './read.scss'

class ReadPage extends React.Component {

  static contextTypes = {
    state: PropTypes.object
  }

  render () {
    let state = this.context.state, ids = state.pages.read.verses.found
    return (
      <div className={styles.container}>
        <HeaderComponent />
        <article>
          {
            ids.map((id) => {
              return (
                <VerseComponent key={id} id={id} />
              )
            })
          }
        </article>
        <div>
          {state.pages.read.verses.selected.length > 0 &&
            <button className={styles.link_button}>
              <i className="material-icons">create</i>
            </button>
          }
        </div>
      </div>
    )
  }

}

export default ReadPage