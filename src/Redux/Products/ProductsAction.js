import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_RESPONSE } from "./ProductsActionTypes"

export const getProductsRequest = () => ({
    type: GET_PRODUCTS_REQUEST,
})


export const getProductsResponse = (products) => ({
    type: GET_PRODUCTS_RESPONSE,
    payload: products,
})

export const getProductsError = (error) => ({
    type: GET_PRODUCTS_ERROR,
    payload: error,
})