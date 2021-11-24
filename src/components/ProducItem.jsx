import React, { useContext } from 'react'
import "../styles/_Productitem.sass"
import cart from '@icons/bt_add_to_cart.svg'
import AppContext from '../context/AppContext'

export default function ProducItem({product,title, img, price}) {

	const { addToCart } = useContext(AppContext);

	const handledcart = (item) =>{
		addToCart(item)
	}

    return (
        <div className="product__Item">
			<img src={img} className="product__Item__img" alt={title} />
			<div className="product__Item__info">
				<div className="info__content">
					<p className="info__content__prize">${price}</p>
					<p className="info__content__product">{title}</p>
				</div>
				<img src={cart} alt="" className="product__Item__cart" onClick= {()=> handledcart(product)}/>
			</div>
		</div>
    )
}
