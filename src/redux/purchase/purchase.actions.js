import {
    SET_PURCHASE,
    SET_PURCHASES,
    GET_PURCHASES,
    DELETE_PURCHASE,
    UPDATE_PURCHASE_STATUS,
    SHOW_LOADING,
    HIDE_LOADING,
} from './purchase.types'

export const setPurchase = (purchase) => ({
    type: SET_PURCHASE,
    payload: purchase
})

export const setPurchases = (purchases) => ({
    type: SET_PURCHASES,
    payload: purchases
})

export const getPurchases = () => ({
    type: GET_PURCHASES
})

export const deletePurchase = (payload) => ({
    type: DELETE_PURCHASE,
    payload
})

export const updatePurchaseStatus = (payload) => ({
    type: UPDATE_PURCHASE_STATUS,
    payload
})

export const showLoading = () => ({
    type: SHOW_LOADING
})

export const hideLoading = () => ({
    type: HIDE_LOADING
})
