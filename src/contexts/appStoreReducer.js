import { useReducer } from 'react'

export const initialState = {
    query:'',
    product: null,
    products: [],
    loading: false,
    countDown: {
        deadline: 'Dec, 1, 2021',
        message: 'Get ready. XMAS begins in ... 😱'
    },
    menuDrawOpened: false,
    navigation: null,
    openDropDown: '',
}



export const appStoreReducer = (state, { type, payload }) => {
    switch (type) {
        case 'FETCH_COURSES': {
            return {
                ...state,
                products: payload,
                product: null
            }

        }
        case 'UPDATE_CURRENT': {
            return {
                ...state,
                current: payload
            }

        }
        case "FETCH_PRODUCT": {

            return {
                ...state,
                product: payload.length === 0 ? null : payload[0],
                action: 'fetch',
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
