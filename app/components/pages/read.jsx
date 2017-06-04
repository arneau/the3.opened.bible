import React from 'react'

import HeaderComponent from './read/header.jsx'
import VersesComponent from './read/verses.jsx'
import FooterComponent from './read/footer.jsx'

class ReadPage extends React.Component {

  render () {
    return (
      <div>
        <HeaderComponent />
        <VersesComponent />
        <FooterComponent />
      </div>
    )
  }

}

export default ReadPage