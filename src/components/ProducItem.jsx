import React from 'react'
import "../styles/_Productitem.sass"

export default function ProducItem() {
    return (
        <div className="product__Item">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="product__Item__img" alt="" />
			<div className="product__Item__info">
				<div className="info__content">
					<p className="info__content__prize">$120,00</p>
					<p className="info__content__product">Bike</p>
				</div>
				<img src={require("../../public/img/icons/bt_add_to_cart.svg")} alt="" className="product__Item__cart"/>
			</div>
		</div>
    )
}
