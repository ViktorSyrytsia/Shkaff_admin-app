import {
    SET_SUBCATEGORY,
    SET_SUBCATEGORIES,
    SHOW_LOADING,
    HIDE_LOADING,
} from './subcategory.types'

const initialState = {
    list: [],
    subcategory: {},
    loading: false
}

const subcategoryReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_SUBCATEGORY: {
            return {
                ...state,
                subcategory: payload
            }
        }
        case SET_SUBCATEGORIES: {
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
            return {
                ...state
            }
    }
}

export default subcategoryReducer;
