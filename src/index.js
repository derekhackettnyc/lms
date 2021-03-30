import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppStore } from './contexts/AppStore';
import App from './components/App'

import ScrollToTop from './components/ui/ScrollToTop'

ReactDom.render(
    <BrowserRouter>
        <ScrollToTop>
            <AppStore >
                <App />
            </AppStore>
        </ScrollToTop>
    </BrowserRouter>,
    document.querySelector('#root')
)
