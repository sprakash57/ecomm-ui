import { put, takeLatest, all } from 'redux-saga/effects';
import { URL, FETCH_BOOKS } from '../constants';
import { booksSaga } from '../actions/index';

// const headers = {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
// }

function* dispatchBooks() {
    try {
        const response = yield fetch(URL).then(data => data.json())
        yield put(booksSaga(response));
    } catch (error) {
        yield put(booksSaga({ message: 'Internal Server Error' }));
    }
}

function* watchBooks() {
    yield takeLatest(FETCH_BOOKS, dispatchBooks);
}

export default function* rootSaga() {
    yield all([
        watchBooks()
    ])
}