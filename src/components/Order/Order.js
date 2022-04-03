import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import { removeItemFromCart } from '../utilities/productDb';
import Spinner from '../Spinner/Spinner';


const Order = () => {
    const [products,setProducts]=useProducts()
    const [cart,setCart]=useCart(products)
    const removeItem=(id)=>{
        const restCart=cart.filter(item=>item.id!==id)
        setCart(restCart)
        removeItemFromCart(id)
    }
    return (
        <div className='w-5/6 mx-auto md:flex'>
            <div className='lg:w-8/12 md:w-8/12 sm:w-full w-full mt-3'>
                {
                    cart.length?cart.map(item=><CartProduct key={item.id} cart={item} removeItem={removeItem}/>):<p className='flex items-center justify-center text-red-600 text-2xl font-bold p-5'>No items In cart</p>
                }
            </div>
            <div className='lg:w-4/12 md:w-4/12 sm:w-full w-full mt-3'>
                <Cart cart={cart}>
                    Check Out
                </Cart>
            </div>
        </div>
    );
};

export default Order;