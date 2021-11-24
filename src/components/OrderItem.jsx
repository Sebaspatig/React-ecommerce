import React, { useContext } from 'react';
import {IoTrashBinSharp, IoTrashBinOutline} from 'react-icons/io5';
import AppContext from '../context/AppContext';

export default function OrderItem({product,title, image, price}) {

const {removeFromCart} = useContext(AppContext);

const handleRemove = () => {
    removeFromCart(product);
}

    return (
        <div className="myOrder__shopping-cart">
            <img className="myOrder__img" src={image} alt={title}/>
            <p>{title}</p>
            <p>${price}</p>
            <IoTrashBinOutline className="myOrder__delete" onClick={()=>handleRemove()}/>
        </div>
    )
}
