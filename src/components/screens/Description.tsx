/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import NavHeader from '../common/NavHeader';
import { connect } from 'react-redux';
import { IState, IBooks, IBookDetailsProps } from '../../interfaces';

interface IProps extends IBookDetailsProps {
    books: IBooks[]
}

const Description: React.FC<IProps> = props => {
    const [currentBook, setCurrentBook] = useState<IBooks>();

    useEffect(() => {
        const currentBook = props.books.find(book => book.id === props.match.params.id);
        setCurrentBook(currentBook);
    }, [props.books]);

    return (
        <>
            <NavHeader title={currentBook?.title} />
            <main className='book-container'>
                <figure className='book-figure'>
                    <img src={currentBook?.image} alt="book" />
                </figure>
                <section className='book-description'>
                    <section>
                        <h1>{currentBook?.title}</h1>
                        <p>Price: &#8377; {currentBook?.price}</p>
                        <p>Author: {currentBook?.author}</p>
                        <p>Pages: {currentBook?.pages}</p>
                        <p>ISBN: {currentBook?.ISBN}</p>
                    </section>
                    <section className='book-btn'>
                        <button>Add to cart</button>
                        <button>Buy Now</button>
                    </section>
                    <summary>{currentBook?.desc}</summary>
                </section>
            </main>
        </>
    )
}

const mapState = (state: IState) => ({ books: state.reducer.books })

export default connect(mapState)(Description);