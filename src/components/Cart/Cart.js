import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,children}) => {

    const totalItems=cart.reduce((prev,curr)=>prev+curr.quantity,0)
    const totalPrice=cart.reduce((prev,curr)=>prev+(curr.quantity*curr.price),0)
    const tax=(totalPrice*0.1).toFixed(2)
    const grandTotal=(parseFloat(totalPrice)+parseFloat(tax)).toFixed(2)
    return (
        <div className=' ml-2 p-3 bg-blue-400 text-pink-600 border-solid  border-2 border-gray-600 rounded-lg sticky top-0'>
            <h1 className='text-2xl font-bold text-center'>Order Summary</h1>
            <hr />
            <div className='font-bold py-2'>
                <h1>Total Items: {totalItems}</h1>
                <h1>Total Price: $ {totalPrice.toFixed(2)}</h1>
                <h1>Tax: $ {tax}</h1>
                <h1>Grand Total: $ {grandTotal}</h1>
            </div>
            <button className='w-full bg-green-800 text py-1 font-bold rounded-lg text-white'>
                <Link to='/order'>
                {children}<FontAwesomeIcon className='ml-[5px]' icon={faArrowRight}/>
                </Link>
                
            </button>
            
            
        </div>
    );
};

export default Cart;