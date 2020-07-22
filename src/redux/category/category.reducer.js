import {
    SET_CATEGORY,
    SET_CATEGORIES,
    SHOW_LOADING,
    HIDE_LOADING,
    SELECT_CATEGORY
} from './category.types'

const initialState = {
    list: [],
    category: {},
    loading: false
}

const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CATEGORY: {
            return {
                ...state,
                category: payload
            }
        }
        case SET_CATEGORIES: {
            return {
                ...state,
                list: payload,
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
            return state
    }
}

export default categoryReducer;
