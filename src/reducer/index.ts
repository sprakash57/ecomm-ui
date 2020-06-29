import { combineReducers, Action } from 'redux';
import { FETCH_BBOKS_RESOLVED } from '../constants';
import { IBooks } from '../interfaces';

const initState = {
    books: [],
    orders: [],
    cart: []
}

const reducer = (state: any = initState, action: { type: string, data: IBooks[] | { message: string } }) => {
    const { type, data } = action;
    switch (type) {
        case FETCH_BBOKS_RESOLVED:
            return { ...state, books: data }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;
