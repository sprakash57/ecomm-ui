import { combineReducers } from 'redux';
import { FETCH_BBOKS_RESOLVED, ADD_TO_CART, SAVE_ADDRESS, CHECKOUT } from '../constants';

const initState = {
    books: [],
    orders: [],
    cart: [],
    address: null
}

const reducer = (state: any = initState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case FETCH_BBOKS_RESOLVED:
            return { ...state, books: data }
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, data] }
        case SAVE_ADDRESS:
            return { ...state, address: data }
        case CHECKOUT:
            return { ...state, orders: [...state.orders, ...data], cart: [] }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;
