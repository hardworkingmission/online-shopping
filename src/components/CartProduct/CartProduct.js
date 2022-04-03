import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartProduct = ({cart,removeItem}) => {
    const{title,price,quantity,image,id}=cart
    
    return (
        <div className='w-4/6 mx-auto bg-pink-600 p-2 flex items-center mb-2 border-solid border-2 border-gray-600 rounded-lg'>
            <div className="p-img">
                <img src={image} alt="" className='h-[80px] w-[80px] rounded-lg' />
            </div>
            <div className='ml-2 flex items-center w-full justify-between'>
                <div className="body">
                    <h1 className='font-bold'>{title.slice(0,15)}</h1>
                    <p>Price: $ {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="remove-icon h-[50px] w-[50px] rounded-[50%] bg-white flex items-center justify-center cursor-pointer" onClick={()=>removeItem(id)}>
                    <FontAwesomeIcon className='text-pink-600' icon={faTrash}/>
                </div>
            </div>
            
        </div>
    );
};

export default CartProduct;