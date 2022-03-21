import React, { useContext } from 'react'
import '@styles/OrderItem.scss'
import AppContext from '@context/AppContext'
import closeIcon from '@icons/icon_close.png'

const OrderItem = ({ product, indexOrder }) => {
	const { removeFromCart } = useContext(AppContext)

	const handleRemove = index => {
		removeFromCart(index)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={closeIcon} alt="close" onClick={() => handleRemove(indexOrder)} />
		</div>
	)
}

export default OrderItem
