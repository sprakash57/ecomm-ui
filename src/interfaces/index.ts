export interface IBooks {
    id: string,
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
    cart: IBooks[],
    address: IAddress
}

export interface IState {
    reducer: IReducer
}

export interface IBookDetailsProps {
    match: { params: { id: string } }
}

export interface IAction {
    type: string,
    data: IBooks[] | { message: string } | IBooks
}

export interface IAddress {
    address1: string,
    address2: string,
    city: string,
    state: string,
    country: string
}