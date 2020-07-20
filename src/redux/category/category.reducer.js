import {
    SET_CATEGORY,
    SET_CATEGORIES,
} from './category.types'

const initialState = {
    list: [],
    category: {}
}

const categoryReducer = (state = initialState, {type, payload}) => {
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
                list: payload
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default categoryReducer;
