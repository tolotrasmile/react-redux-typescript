import * as React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import store from './stores/AppStore'
import { Provider } from 'react-redux'

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('app'))
