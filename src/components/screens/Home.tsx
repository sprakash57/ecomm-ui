/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { IBooks, IState } from '../../interfaces';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { fetchBooks } from '../../actions';
import Book from '../common/Book';

interface IProps {
    fetchBooks(): void,
    books: IBooks[]
}

interface IPagination {
    limit: number,
    page: number,
    items: IBooks[]
}

const Home: React.FC<IProps> = (props) => {
    const [showMore, setShowMore] = useState(false);
    const [pagination, setPagination] = useState<IPagination>({
        limit: 10,
        page: 1,
        items: []
    });

    const handleShowMore = () => {
        const { limit, page } = pagination;
        let current = props.books.slice(0, limit * page);
        setPagination({ ...pagination, items: current, page: page + 1 });
        if (limit * page >= props.books.length) {
            setShowMore(false);
        }
    }

    useEffect(() => {
        const { limit, page } = pagination;
        let current = props.books.slice(0, limit);
        if (props.books.length > current.length) {
            setPagination({ ...pagination, items: current, page: page + 1 });
            setShowMore(true);
        } else {
            setPagination({ ...pagination, items: current });
            setShowMore(false);
        }
    }, [props])

    return (
        <main className='book-card'>
            <ul>
                {pagination.items.length ? pagination.items.map(book => <Book key={book.id} content={book} />) : null}
            </ul>
            {showMore && <button onClick={handleShowMore} className='btn-link'>Show More</button>}
        </main>
    )
}

const mapStates = (state: IState) => ({
    books: state.reducer.books
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ fetchBooks }, dispatch)

export default connect(mapStates, mapDispatch)(Home);