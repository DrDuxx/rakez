import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { configurePersistor, configureStore } from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

const store = configureStore()
const persistor = configurePersistor(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
