import {
    SET_PURCHASES,
    SHOW_LOADING,
    HIDE_LOADING,
    SET_PURCHASE,
} from './purchase.types'

const initialState = {
    list: [],
    purchase: {},
    loading: false
}

const purchaseReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PURCHASES: {
            return {
                ...state,
                list: payload
            }
        }
        case SET_PURCHASE: {
            return {
                ...state,
                purchase: payload,
            }
        }
        case SHOW_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case HIDE_LOADING: {
            return {
                ...state,
                loading: false,
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default purchaseReducer;
