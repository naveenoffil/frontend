import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_RESPONSE } from "./ProductsActionTypes";

const initialState = {
    products: [],
    productsDataLoading: false,
    productsDataResponse:  null,
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                productsDataLoading: true,
                productsDataResponse: null,
            };

        case GET_PRODUCTS_RESPONSE:
            return {
                ...state,
                productsDataLoading: false,
                products: action.payload,
                // productsDataResponse: action.payload,
            };

        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                productsDataLoading: false,
                productsDataResponse: action.payload,
            };
            default:
                return state;
    }
};

export default productReducer;