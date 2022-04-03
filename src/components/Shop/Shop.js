import React, { useState } from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';
import { addToCart } from '../utilities/productDb';
import CustomModal from '../CustomModal/CustomModal';

const Shop = () => {
    const [products,setProducts,isLoading]=useProducts()
    const [cart,setCart]=useCart(products)
    const [modalIsOpen, setIsOpen] = useState(false);
    const handleAddToCart=(product)=>{
        
        if(cart.length<4){const exist=cart.find(item=>item.id===product.id)
        if(exist){
        const restProduct=cart.filter(item=>item.id!==product.id)
        exist.quantity+=1
        setCart([...restProduct,exist])
        }else{
            product.quantity=1
            setCart([...cart,product])
        }
        addToCart(product.id)}else{
            setIsOpen(true)
            
            
        }
    }
    const closeModal=()=>{
        setIsOpen(false)
    }
    console.log('cart',cart.length)
    return (
        <div className='w-5/6 mx-auto md:flex'>
            <div className='lg:w-8/12 md:w-8/12 sm:w-full w-full mt-3'>
                <div>
                    {
                        <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
                    }
                </div>
                <div>
                {
                    isLoading||<Spinner/>
                }
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                    {
                        isLoading&&products?.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
                    }

                </div>
            </div>
            <div className='lg:w-4/12 md:w-4/12 sm:w-full w-full mt-3'>
                <Cart cart={cart}>
                    Go to Order
                </Cart>
            </div>
        </div>
    );
};

export default Shop;