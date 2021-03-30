import { useReducer } from 'react'

export const initialState = {
    courses: [],
    loading: false,
    menuDrawOpened: false,
    navigation: null,
    openDropDown: '',
}



export const appStoreReducer = (state, { type, payload }) => {
    switch (type) {
        case 'FETCH_COURSES': {
            return {
                ...state,
                courses: payload,
            }
        }
        case "ASYNC_START": {
            return {
                ...state,
                loading: true
            }
        }
        case "ASYNC_END": {
            return {
                ...state,
                loading: false
            }
        }
        case 'MENUDRAW_OPENED':
            return {
                ...state,
                menuDrawOpened: payload
            }
        case 'OPEN_DROPDOWN':
            return {
                ...state,
                openDropDown: payload
            }
        case 'SELECT_NAVIGATION':
            return {
                ...state,
                navigation: payload,
                openDropDown: ''
            }

        default:
            return state
    }
}

export const CreateStore = () => useReducer(appStoreReducer, initialState) 
