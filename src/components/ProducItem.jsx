import React from 'react'
import "../styles/_Productitem.sass"
import cart from '@icons/bt_add_to_cart.svg'

export default function ProducItem({title, img, price}) {
    return (
        <div className="product__Item">
			<img src={img} className="product__Item__img" alt={title} />
			<div className="product__Item__info">
				<div className="info__content">
					<p className="info__content__prize">${price}</p>
					<p className="info__content__product">{title}</p>
				</div>
				<img src={cart} alt="" className="product__Item__cart"/>
			</div>
		</div>
    )
}
