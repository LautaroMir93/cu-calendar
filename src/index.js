import React from 'react'
import ReactDOM from 'react-dom'
import App from 'modules/app/containers/app'
import { Provider } from 'react-redux'
import configureStore from './store'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
