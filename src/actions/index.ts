import { FETCH_BOOKS, FETCH_BBOKS_RESOLVED, ADD_TO_CART, SAVE_ADDRESS, CHECKOUT } from '../constants';
import { IBooks, IAddress } from '../interfaces';

export const fetchBooks = () => ({ type: FETCH_BOOKS })
export const fetchBooksResolved = (data: IBooks[] | { message: string }) => ({ type: FETCH_BBOKS_RESOLVED, data });
export const addToCart = (data: IBooks | undefined) => ({ type: ADD_TO_CART, data });
export const saveAddress = (data: IAddress) => ({ type: SAVE_ADDRESS, data });
export const checkout = (data: IBooks[]) => ({ type: CHECKOUT, data });