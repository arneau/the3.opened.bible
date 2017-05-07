import React from 'react'
import PropTypes from 'prop-types'

import { VerseActions } from '../../actions'

import Verse from '../elements/verse.jsx'

import styles from './read.scss'

class ReadPage extends React.Component {

  static contextTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

  componentWillMount = () => {
    let dispatch = this.context.dispatch
    dispatch(VerseActions.fetchAllByReference('John 3'))
  }

  getPassage = () => {
    let dispatch = this.context.dispatch
    dispatch(VerseActions.fetchAllByReference(this.refs.input.value))
  }

  render () {
    let state = this.context.state, ids = state.pages.read.verses.found
    return (
      <div>
        <input ref="input" type="text" />
        <button onClick={this.getPassage}>Go!</button>
        <div>
          {
            ids.map((id) => {
              return (
                <Verse key={id} id={id} />
              )
            })
          }
        </div>
        <div>
          {state.pages.read.verses.selected.length &&
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