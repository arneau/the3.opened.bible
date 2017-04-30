import React from 'react'
import PropTypes from 'prop-types'

import { DevTools } from '../tools'

import styles from './app.scss'

class AppComponent extends React.Component {

  static childContextTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  getChildContext() {
    return {
      dispatch: this.props.dispatch,
      state: this.props.state
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <main>
          {this.props.children}
        </main>
        <DevTools />
      </div>
    )
  }

}

export default AppComponent