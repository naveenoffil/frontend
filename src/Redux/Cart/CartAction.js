import { type } from "@testing-library/user-event/dist/type";
import { ADD_TO_CART_ERROR, ADD_TO_CART_REQUEST, ADD_TO_CART_RESPONSE, GET_CART_PRODUCT_ERROR, GET_CART_PRODUCT_REQUEST, GET_CART_PRODUCT_RESPONSE } from "./CartActionTypes";

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


export const getCartDataRequest = () => ({
    type:GET_CART_PRODUCT_REQUEST,
})


export const getCartDataResponse = (data) => ({
    type: GET_CART_PRODUCT_RESPONSE,
    payload: data,
})

export const getCartDataError = (error) => ({
    type: GET_CART_PRODUCT_ERROR,
    payload: error,
})

