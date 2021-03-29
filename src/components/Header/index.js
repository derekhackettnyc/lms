import React from 'react'
import { Link } from 'react-router-dom'

import AppStoreContext from '../../contexts/AppStore';
import MainMenu from '../Nav/MainMenu'
import SearchBar from '../ui/SearchBar'

const Header = ({ nav }) => {

    const { state, dispatch } = React.useContext(AppStoreContext)

    return (
        <header className="header">
            <Link className="" to="/">
                <img src="/assets/images/logo.png" alt="Star Logo" />
            </Link>
            <div
                onClick={() => dispatch({ type: 'MENUDRAW_OPENED', payload: !state.menuDrawOpened })}
                className={state.menuDrawOpened ? "menu-icon-container change" : "menu-icon-container"}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <SearchBar />
            <MainMenu nav={nav} isMenuDrawOpened={state.menuDrawOpened} />
        </header>
    )
}

export default Header