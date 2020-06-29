import * as React from 'react';
import { Link } from 'react-router-dom';

const NavHeader: React.FC = () => {
    return (
        <nav>
            <section>
                <header>eCommerce Site</header>
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