import React, { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import AppContext from '@context/AppContext'
import '@styles/MyOrder.scss'
import arrowIcon from '@icons/flechita.svg'

const MyOrder = ({ toggleFunction }) => {
	const { state } = useContext(AppContext)

	const sumTotal  = () => {
		const reducer = (accum, currentValue) => accum + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" onClick={toggleFunction} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{ state.cart.map((item, index) => (
					<OrderItem
						key={`orderItem-${index}`}
						indexOrder={index}
						product={item}
					/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	)
}

export default MyOrder
