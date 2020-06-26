import React from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../Context';

export default function Cart() {
	return (
		<section className='py-3'>
			<ProductConsumer>
				{(value) => {
					const { cart } = value;
					if (cart.length > 0) {
						return (
							<React.Fragment>
								<Title name='your' title='cart' />
								<CartColumn />
								<CartList value={value} />
								<CartTotals value={value} />
							</React.Fragment>
						);
					} else {
						return <EmptyCart />;
					}
				}}
			</ProductConsumer>
		</section>
	);
}
