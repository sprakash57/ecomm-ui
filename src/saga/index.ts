import { put, takeLatest, all } from 'redux-saga/effects';
import { URL, FETCH_BOOKS } from '../constants';
import { fetchBooksResolved } from '../actions/index';

function* onLoadBooks() {
    try {
        const response = yield fetch(URL).then(data => data.json());
        yield put(fetchBooksResolved(response.books));
    } catch (error) {
        yield put(fetchBooksResolved({ message: 'Internal Server Error' }));
    }
}

function* watchOnLoadBooks() {
    yield takeLatest(FETCH_BOOKS, onLoadBooks);
}

export default function* rootSaga() {
    yield all([watchOnLoadBooks()])
}
