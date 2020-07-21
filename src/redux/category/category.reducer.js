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
        case SELECT_CATEGORY: {
            return {
                ...state,
                category: state.list.find(item => item.id === payload)
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default categoryReducer;
