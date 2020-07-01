import React from 'react';
import NavHeader from '../common/NavHeader';
import { connect } from 'react-redux';
import { IState, IBooks } from '../../interfaces';

type IProps = { orders: IBooks[] }

const Order: React.FC<IProps> = props => {
    console.log(props.orders);
    const showDate = (createdAt: any) => {
        console.log(createdAt);
        const d = new Date(createdAt);
        console.log(d, d.getDate())
        return `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()}`
    }

    return (
        <>
            <NavHeader title='My orders' />
            {props.orders.map(order => (
                <section className='order' key={order.id}>
                    <section className='order-header'>
                        <p>Order Placed: {showDate(order.createdAt)}</p>
                        <p>Status: Delivered</p>
                    </section>
                    <section className='order-summary'>
                        <figure>
                            <img src={order.image} alt="book" />
                        </figure>
                        <section>
                            <h2>{order.title}</h2>
                            <small>Author: {order.author}</small>
                            <p>Price: &#8377; {order.price}</p>
                        </section>
                    </section>
                </section>
            ))}
        </>
    )
}
const mapState = (state: IState) => ({ orders: state.reducer.orders })
export default connect(mapState)(Order);