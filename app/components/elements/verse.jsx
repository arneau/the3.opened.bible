import React from 'react'
import PropTypes from 'prop-types'

import styles from './verse.scss'

class Verse extends React.Component {

  static contextTypes = {
    state: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      isSelected: false
    }
  }

  toggleSelected = () => {
    this.setState({
      isSelected: !this.state.isSelected
    })
  }

  render () {
    let state = this.context.state, id = this.props.id, selected = this.state.isSelected
    let { number } = state.entities.verses[id]
    let { text } = state.entities.verseTranslations[id]
    return (
      <div className={styles.verse} data-selected={selected} onClick={this.toggleSelected}>
        <p>
          <sup>{number} {selected}</sup>
          &nbsp;
          <span dangerouslySetInnerHTML={{__html: text}} />
        </p>
      </div>
    )
  }

}

export default Verse