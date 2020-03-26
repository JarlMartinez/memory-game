import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './redux/reducers'
import initialState from './redux/initialState'

import App from './App'

const app = document.getElementById('app')
const store = createStore(reducers, initialState, applyMiddleware(reduxThunk))

const renderApp = () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>, app)
}

if(module.hot) {
    module.hot.accept('./App', () => {
        renderApp()
    })
}

renderApp()