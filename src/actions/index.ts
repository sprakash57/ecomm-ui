import { FETCH_BOOKS, FETCH_BBOKS_RESOLVED } from '../constants';
import { IBooks } from '../interfaces';

export const fetchBooks = () => ({ type: FETCH_BOOKS })
export const fetchBooksResolved = (data: IBooks[] | { message: string }) => ({ type: FETCH_BBOKS_RESOLVED, data });