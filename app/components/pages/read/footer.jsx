import React from 'react'
import PropTypes from 'prop-types'

import { combineClasses } from '../../../functions'
import styles from './footer.scss'

class FooterComponent extends React.Component {

  static contextTypes = {
    state: PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      hasShadow: true
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (this.state.hasShadow != (document.body.scrollTop + window.innerHeight != document.body.scrollHeight)) {
      this.setState({
        hasShadow: (document.body.scrollTop + window.innerHeight != document.body.scrollHeight)
      })
    }
  }

  render () {
    let state = this.context.state
    let classes = combineClasses([
      styles.container,
      this.state.hasShadow && styles.with_shadow
    ])
    return state.pages.read.verses.selected.length > 0 && (
      <footer className={classes}>
        <button>Link verses</button>
      </footer>
    )
  }

}

export default FooterComponent