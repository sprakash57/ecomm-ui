import React from 'react';
import { IBooks } from '../../interfaces';
import { Link } from 'react-router-dom';

interface IProps {
    content: IBooks
}

const Book: React.FC<IProps> = (props) => {
    const { title, image, desc, id } = props.content
    return (
        <li>
            <figure>
                <img src={image} alt="pic" />
            </figure>
            <summary>{title}</summary>
            <p>{desc.substring(0, 50)}</p>
            <Link to={`/${id}`}>Buy</Link>
        </li>
    )
}

export default Book;