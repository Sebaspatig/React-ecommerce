import React from 'react'
import "../styles/_myOrder.sass"

export default function MyOrder() {
    return (
        <div className="myOrder">
            <div className="myOrder__container">
                <h1 className="myOrder__title">My order</h1>

                <div className="myOrder__content">
                    <div className="myOrder__info">
                        <p>
                            <span>03.25.21</span>
                            <span>1 articles</span>
                        </p>
                        <p>Total $30.00</p>
                    </div>

                    <div className="myOrder__shopping-cart">
                        <img className="myOrder__img" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
                        <p>Bike</p>
                        <p>$30,00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
