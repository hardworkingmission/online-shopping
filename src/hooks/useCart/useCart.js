import { useEffect, useState } from 'react';
import { getProductFromCart } from '../../components/utilities/productDb';

const useCart = (products) => {
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const storedCart=getProductFromCart()
        //console.log(storedCart)
        const savedCart=[]
        for(const productId in storedCart){
            const productExist=products.find(product=>(product.id).toString()===productId)
            //console.log('productExist',typeof productId)
            if(productExist){
                productExist.quantity=storedCart[productId]
                savedCart.push(productExist)
            }
        }
        setCart(savedCart)
    },[products])
    return [cart,setCart]
};

export default useCart;