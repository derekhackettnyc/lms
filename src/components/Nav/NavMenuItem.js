import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppStoreContext from '../../contexts/AppStore';

const NavMenuItem = props => {

    const { state } = useContext(AppStoreContext)
    const { category, menuItem, actions } = props
    const openedDropDown = state.openDropDown

    if (category === 'signout')
        return (
            <li className="navigation__parent">
                <button className="navigation__button" onClick={() => actions.handleSignOut()}>{menuItem.title}</button>
            </li>

        )

    if (!menuItem.sub) {
        return (
            <li className="navigation__parent">
                <Link className="navigation__button" to={`/${category}`} onClick={() => actions.handleClickEvent(category)}>{menuItem.title}</Link>
            </li>
        )
    }

    const keys = Object.keys(menuItem.sub)

    return (
        <li className="navigation__parent">
            <button className="navigation__button" onClick={() => actions.handleTouchStart(category)}>{`${menuItem.title}`}</button>
            <ul
                className={`navigation__child ${openedDropDown === category || keys.includes(openedDropDown) ? 'navigation__child--opened' : ''}`}
                onClick={event => event.stopPropagation()}
            >
                {
                    Object.values(menuItem.sub).map((item, index) => {
                        const path = item.path || ""
                        if (item.sub) {
                            const subMenuItem = keys[index]
                            const subCategory = Object.keys(item.sub)
                            return (
                                <li key={`${category}-${keys[index]}`} className="navigation__parent">
                                    <button className="navigation__button navigation__button--sub" onClick={(event) => actions.handleUserEvent(event, keys[index])}>{item.title}</button>
                                    <ul className={`navigation__child navigation__child--sub ${openedDropDown === keys[index] ? "navigation__child--opened" : ""}`}>

                                        {
                                            Object.values(item.sub).map((subItem, index) => {
                                                return (
                                                    <li key={`${category}-${subMenuItem}-${subCategory[index]}`}>
                                                        <Link
                                                            className="navigation__link" to={`${path}/${category}/${subMenuItem}/${subCategory[index]}`}
                                                            onClick={() => actions.handleClickEvent({ category: category, sub: `${keys[index]}`, topic: subCategory[index] })}>
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                )
                                            }

                                            )

                                        }
                                    </ul>
                                </li>
                            )

                        } else {
                            if (keys[index] === 'signin')
                                return (
                                    <li key={`${category}-${keys[index]}`} className="navigation__parent">
                                        <button className="navigation__button navigation__button--signin" style={{color: "#2f4f4f", fontSize:'1.6rem', paddingTop:'1rem',backgroundColor:'whitesmoke'}} onClick={() => actions.handleSignIn()}>Sign In</button>
                                    </li>
                                )
                            if (keys[index] === 'signout')
                                return (
                                    <li key={`${category}-${keys[index]}`} className="navigation__parent">
                                        <button className="navigation__button" onClick={() => actions.handleSignOut()}>{menuItem.title}</button>
                                    </li>

                                )
                            return (
                                <li key={`${category}-${keys[index]}`}>
                                    <Link
                                        className="navigation__link" to={category === 'misc' ? `/${keys[index]}` : `${path}/${category}/${keys[index]}`}
                                        onClick={() => actions.handleClickEvent({ category: category, sub: `${keys[index]}` })}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        }
                    })
                }

            </ul>
        </li>
    )
}

export default NavMenuItem