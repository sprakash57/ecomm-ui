import { combineReducers } from 'redux';

const initState = {
    books: [],
    orders: [],
    cart: []
}

const reducer = (state: any = initState, action: { type: string, data: string }) => {
    const { type, data } = action;
    switch (type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reducer
})

export default rootReducer;