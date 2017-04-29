import { connect } from 'react-redux'

import AppComponent from '../components/app.jsx'

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default AppContainer