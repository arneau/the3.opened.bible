import React from 'react'
import PropTypes from 'prop-types'

import { fetchPassage } from '../../actions'

class ReadPage extends React.Component {

  static contextTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

  getPassage = () => {
    let dispatch = this.context.dispatch
    dispatch(fetchPassage(this.refs.input.value))
    // fetchPassage(this.refs.input.value)
  }

  render () {
    return (
      <div>
        <p>This is the read page :)</p>
        <input ref="input" type="text" />
        <button onClick={this.getPassage}>Go!</button>
      </div>
    )
  }

}

export default ReadPage