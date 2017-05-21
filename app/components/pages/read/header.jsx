import React from 'react'
import PropTypes from 'prop-types'

import { capitalizeString, combineClasses } from '../../../functions'
import { VerseActions } from '../../../actions'
import styles from './header.scss'

class HeaderComponent extends React.Component {

  static contextTypes = {
    dispatch: PropTypes.func
  }

  constructor () {
    super()
    this.state = {
      hasShadow: false
    }
  }

  componentDidMount = () => {
    this.fetchVersesByReference('John 3')
    this.refs.input.value = 'John 3'
    window.addEventListener('scroll', this.handleScroll)
  }

  fetchVersesByReference = (reference) => {
      this.context.dispatch(VerseActions.fetchAllByReference(reference))
  }

  handleKeyUp = (event) => {
    if (event.key == 'Enter') {
      this.fetchVersesByReference(event.target.value)
      event.target.value = capitalizeString(event.target.value)
      document.body.scrollTop = 0
    }
  }

  handleScroll = () => {
    if (this.state.hasShadow != (document.body.scrollTop > 0)) {
      this.setState({
        hasShadow: (document.body.scrollTop > 0)
      })
    }
  }

  render () {
    let classes = combineClasses([
      styles.container,
      this.state.hasShadow && styles.with_shadow
    ])
    return (
      <header className={classes}>
        <div className={styles.reference}>
          <input onKeyUp={this.handleKeyUp} ref="input" type="text" />
        </div>
      </header>
    )
  }

}

export default HeaderComponent