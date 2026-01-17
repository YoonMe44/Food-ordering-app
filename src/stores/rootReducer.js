
import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./menu/productsSlice"
import { addressSlice } from "./userInfo/addressSlice";

const rootReducer= combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressSlice,
    }
);

export default rootReducer;