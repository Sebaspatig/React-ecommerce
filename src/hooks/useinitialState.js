import {useState} from 'react'

const initialState = {
    cart:[],
}

export default function useinitialState() {
    const [state,setState] = useState(initialState)

    const addToCart = (payload) =>{
        setState({
            ...state, cart:[...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        setState({// minificado
            cart: state.cart.filter(item => item.id !== payload.id),
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}
