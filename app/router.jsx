import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Link, Route } from 'react-router-dom'

import Store from './store'
import History from './history'

import AppContainer from './containers/app'
import HomePage from './components/pages/home.jsx'
import ReadPage from './components/pages/read.jsx'

export default (
  <Provider store={Store}>
    <ConnectedRouter history={History}>
      <AppContainer>
        <Route exact path="/" component={ReadPage} />
        <Route path="/read" component={ReadPage} />
      </AppContainer>
    </ConnectedRouter>
  </Provider>
)
