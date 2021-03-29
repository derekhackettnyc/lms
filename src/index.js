import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppStore } from './contexts/AppStore';
import App from './components/App'

ReactDom.render(
    <BrowserRouter>
        <AppStore >
            <App />
        </AppStore>
    </BrowserRouter>,
    document.querySelector('#root')
)
