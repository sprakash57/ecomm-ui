import * as React from 'react';

const NavHeader: React.FC = () => {
    return (
        <nav>
            <section>
                <header>eCommerce Site</header>
            </section>
            <section>
                <span>Home | </span>
                <span>My Orders | </span>
                <span>Cart</span>
            </section>
        </nav>
    )
}

export default NavHeader;