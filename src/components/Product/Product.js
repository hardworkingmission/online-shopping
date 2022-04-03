import React from 'react';
import StartRatings from 'react-star-ratings'

const Product = ({product,handleAddToCart}) => {
    const{title,price,image,category,rating}=product
    //console.log(product)
    return (
        <div className='col bg-pink-300 rounded-lg p-2 border-solid border-2 border-gray-300'>
            <div className="p-img flex justify-center ">
                <img src={image} alt="" className='h-[200px] rounded-lg' />
            </div>
            <div className="body py-1">
                <p className='font-bold'>{title.slice(0,15)}</p>
                <p>Price: $ <span className='text-green-600 font-bold'>{price}</span></p>
                <p>Category: {category}</p>
                <p>Ratings: <StartRatings rating={rating.rate} starRatedColor="yellow" starDimension="20px" starSpacing="1px"/></p>
                
            </div>
            <button className='bg-blue-400 w-full py-1 rounded-lg font-bold text-gray-600' onClick={()=>handleAddToCart(product)}>Add To Cart</button>
            
        </div>
    );
};

export default Product;