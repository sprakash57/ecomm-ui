import { FETCH_BOOKS, BOOKS_SAGA } from '../constants';
import { IBooks } from '../interfaces';

export const fetchBooks = () => ({ type: FETCH_BOOKS });
export const booksSaga = (data: IBooks[] | { message: string }) => ({ type: BOOKS_SAGA, data });