import { ADD_TO_CART_ERROR, ADD_TO_CART_REQUEST, ADD_TO_CART_RESPONSE } from "./CartActionTypes";

export const addToCartRequest = () => ({
    type: ADD_TO_CART_REQUEST,
})


export const addToCartResponse = (data) => ({
    type: ADD_TO_CART_RESPONSE,
    paylokad: data,
})

export const addToCartError = (error) => ({
    type: ADD_TO_CART_ERROR,
    payload: error,
});