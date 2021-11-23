import React from 'react'
import ProducItem from '../components/ProducItem'
import useGetProduct from '../hooks/useGetProduct';
import "../styles/_productList.sass"

const API = 'https://api.escuelajs.co/api/v1/products?limit=250&offset=0';

export default function ProductList() {
	const products = useGetProduct(API)

    return (
        <section className="main-container">
			<div className="productList__content">
				{products.map(item =>(
					<ProducItem
						key = {item.id}
						title= {item.title}
						img = {item.images[0]}
						price = {item.price}
					/>

				))}
			</div>
		</section>
    )
}
