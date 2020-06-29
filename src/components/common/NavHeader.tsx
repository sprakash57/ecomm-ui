import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    title: string | undefined
}

const NavHeader: React.FC<IProps> = props => {
    return (
        <nav>
            <section>
                <header>eCommerce Site {props.title ? `| ${props.title}` : ''}</header>
            </section>
            <section>
                <span><Link to='/'>Home</Link> | </span>
                <span><Link to='/orders'>My Orders</Link> | </span>
                <span><Link to='/cart'>Cart</Link></span>
            </section>
        </nav>
    )
}

export default NavHeader;