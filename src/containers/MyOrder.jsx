import React, { useContext } from 'react'
import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext'
import "../styles/_myOrder.sass"

export default function MyOrder() {
    const { state } = useContext(AppContext)

    const sumTotal = ()=>{
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum
    }

    const getCurrentDate = (separator='/') => {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }
    return (
            <div className="myOrder__container">
                <h1 className="myOrder__title">My order</h1>

                <div className="myOrder__content">

                    {state.cart.map(product => (
                        <OrderItem 
                        product={product} 
                        key={`orderItem-${product.id}`}
                        title={product.title}
                        image={product.images[0]}
                        price={product.price} />
                    ))}
                    
                    <div className="myOrder__info">
                        <p>
                            <span>Fecha: {getCurrentDate()}</span>
                            <span>{state.cart.length > 0 ? state.cart.length:0} articles</span>
                        </p>
                        <p>Total ${sumTotal()}</p>
                    </div>

                </div>
                <button class="button myOrder__checkout">
                    Checkout
                </button>
            </div>
    )
}
