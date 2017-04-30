import React from 'react'
import PropTypes from 'prop-types'

import { VerseActions } from '../../actions'

import Verse from '../elements/verse.jsx'

class ReadPage extends React.Component {

  static contextTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

  getPassage = () => {
    let dispatch = this.context.dispatch
    dispatch(VerseActions.fetchAllByReference(this.refs.input.value))
  }

  render () {
    let state = this.context.state, ids = Object.keys(state.entities.verses)
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
      </div>
    )
  }

}

export default ReadPage