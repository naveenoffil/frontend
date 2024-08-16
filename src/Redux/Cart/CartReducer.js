import { ADD_TO_CART_ERROR, ADD_TO_CART_REQUEST, ADD_TO_CART_RESPONSE } from "./CartActionTypes";

const initialState = {
    cart:[],
    cartDataLoading: false,
    cartDataResponse: null,
};


export const cartReducer = (state=initialState,action) =>{
    switch(action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                cartDataLoading: true,
            };

        case ADD_TO_CART_RESPONSE:
            return {
                ...state,
                cartDataLoading: false,
                cart: action.data,
                cartDataResponse: action.data,
            }
        case ADD_TO_CART_ERROR:
            return {
                ...state,
                cartDataLoading: false,
                cartDataResponse: action.error,
            }
            default:
                return state;

        }
};

export default cartReducer;