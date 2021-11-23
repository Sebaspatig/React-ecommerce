import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function useGetProduct(API) {
    const [products, setProducts] = useState([])

    useEffect( async ()=> {
        const response = await axios(API);
        setProducts(response.data)
    }, [])

    return products
}
