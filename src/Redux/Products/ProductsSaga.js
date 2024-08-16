import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS_REQUEST } from "./ProductsActionTypes";
import axios from 'axios';
import { getProductsError, getProductsResponse } from "./ProductsAction";


function*getProductsRequestSaga () {
    try {
        const res = yield axios.get ("https://663df21be1913c476795fa95.mockapi.io/products");
        yield put(getProductsResponse(res.data));

    } catch (err) {
        yield put(getProductsError(err));
    }
}



function* productSaga() {
    yield takeLatest(GET_PRODUCTS_REQUEST, getProductsRequestSaga)
}

export default productSaga;