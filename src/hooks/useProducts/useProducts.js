import{ useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState([])
    const [isLoading,setLoading]=useState(false)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{

                setProducts(data)
                setLoading(true)
            })
    },[])
    return [products,setProducts,isLoading]
};

export default useProducts;