import React from 'react'
import ProductItem from '@components/ProductItem'
import BaseLoading from '@components/UI/BaseLoading'
import useGetProducts from '@hooks/useGetProducts'
import '@styles/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products'
// https://api.escuelajs.co/api/v1/products
// https://fakestoreapi.com/products

const ProductList = () => {
	const { products, isLoading } = useGetProducts(API)

	return (
		<section className="main-container">
			{
				!isLoading ?
				<div className="ProductList">
					{products.map(product => (
						<ProductItem
							key={product.id}
							product={product}
						/>
					))}
				</div>
				:
				<BaseLoading />
			}
		</section>
	)
}

export default ProductList
