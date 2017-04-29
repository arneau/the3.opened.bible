import React from 'react'
import { createDevTools } from 'redux-devtools'

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

const DevTools = createDevTools(
  <DockMonitor changePositionKey='ctrl-p' defaultIsVisible={false} toggleVisibilityKey='ctrl-r' >
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

const DevToolsEnhancer = DevTools.instrument()

export {
  DevTools,
  DevToolsEnhancer
}
