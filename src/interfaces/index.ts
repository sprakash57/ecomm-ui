import { Interface } from "readline"

export interface IBooks {
    id: number,
    title: string,
    desc: string,
    author: string,
    ISBN: string,
    price: number,
    pages: string,
    image: string
}

export interface IReducer {
    books: IBooks[],
    orders: IBooks[],
    cart: IBooks[]
}

export interface IState {
    reducer: IReducer
}

export interface IBookDetailsProps {
    match: { params: { _id: string } }
}

export interface IUserDetailProps extends IBookDetailsProps {
    reducer: IReducer
}