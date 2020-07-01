import React, { useEffect, useState } from 'react';
import NavHeader from '../common/NavHeader';
import { connect } from 'react-redux';
import { IState, IBooks, IAddress } from '../../interfaces';
import { Link } from 'react-router-dom';
import { saveAddress, checkout } from '../../actions';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

type IProps = { state: { cart: IBooks[], address: IAddress }, saveAddress(data: IAddress): void, checkout(data: IBooks[]): void }

const Cart: React.FC<IProps> = (props) => {
    const [details, setDetails] = useState({
        price: 0,
        total: 0
    });

    const [editable, setEditable] = useState(true)

    const [address, setAddress] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: ''
    })

    const handleChange = (name: string) => (e: any) => {
        setAddress({ ...address, [name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { cart } = props.state;
        const order = cart.map(item => ({
            ...item,
            createdAt: Date.now()
        }));
        props.checkout(order);
        alert('Order placed');
    }

    const handleEdit = () => {
        setEditable(true);
    }

    const handleSave = () => {
        props.saveAddress(address);
        setEditable(false);
    }

    useEffect(() => {
        console.log(props.state)
        const totalPrice = props.state.cart.reduce((a, c) => a + c.price, 0);
        setDetails({ price: totalPrice, total: totalPrice + 12.5 });
        if (props.state.address) {
            setAddress(props.state.address);
            setEditable(false);
        }
    }, []);

    const { address1, address2, city, state, country } = address;
    return (
        <>
            <NavHeader title='Cart' />
            {props.state.cart.length
                ? <form className='cart-main' onSubmit={handleSubmit}>
                    <section className='address'>
                        <h3>Shipping Address (All fields are required)</h3>
                        <main>
                            <section>
                                <input disabled={!editable} type='text' placeholder='Address 1' required value={address1} onChange={handleChange('address1')} />
                            </section>
                            <section>
                                <input disabled={!editable} type='text' placeholder='Address 2' required value={address2} onChange={handleChange('address2')} />
                            </section>
                            <input disabled={!editable} type='text' placeholder='City' required value={city} onChange={handleChange('city')} />
                            <input disabled={!editable} type='text' placeholder='State' required value={state} onChange={handleChange('state')} />
                            <section>
                                <input disabled={!editable} type='text' placeholder='Country' required value={country} onChange={handleChange('country')} />
                            </section>
                            <section>
                                <button type='button' onClick={handleSave}>Save Address</button>
                                <button type='button' onClick={handleEdit}>Edit Address</button>
                            </section>
                        </main>
                    </section>
                    <section>
                        <h3>Shopping Bag</h3>
                        <section className='cart-bag'>
                            {props.state.cart.map(item => <p key={item.id}>{item.title}</p>)}
                        </section>
                        <section className='payment'>
                            <h3>Payment info</h3>
                            <article>
                                <p>Item Price</p>
                                <p>&#8377; {details.price}</p>
                            </article>
                            <article>
                                <p>Tax</p>
                                <p>&#8377; 7.5</p>
                            </article>
                            <article>
                                <p>Shipping Charge</p>
                                <p>&#8377; 5</p>
                            </article>
                            <article>
                                <p>Total</p>
                                <p>&#8377; {details.total}</p>
                            </article>
                            <article>
                                <button type='submit'>Checkout</button>
                                <Link to='/'>Cancel</Link>
                            </article>
                        </section>
                    </section>
                </form>
                : <section>Your Cart is empty</section>
            }
        </>
    )
}

const mapState = (state: IState) => ({ state: state.reducer });
const mapDispatch = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ saveAddress, checkout }, dispatch)

export default connect(mapState, mapDispatch)(Cart);