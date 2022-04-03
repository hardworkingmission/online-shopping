import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import StartRatings from 'react-star-ratings'


const ProductDetails = () => {
    const [products,setProducts,isLoading]=useProducts()
    
    const {id}=useParams()
    //console.log(products&&products[0]?.id)
    const findProduct=products?.find(product=>(product.id).toString()===id)
    //const {image,title,price,category,rating}=findProduct
    //console.log(handleAddToCart)


    return (
        <div className='w-5/6 mx-auto flex items-center justify-center mt-3'>
            <div className='col bg-pink-300 rounded-lg p-2 border-solid border-2 border-gray-300'>
                <div className="p-img flex justify-center">
                    <img src={findProduct?.image} alt="" className='rounded-lg h-[300px] w-[400px]' />
                </div>
                <div className="body py-1">
                    <p className='font-bold'>{findProduct?.title.slice(0,15)}</p>
                    <p>Price: $ <span className='text-green-600 font-bold'>{findProduct?.price}</span></p>
                    <p>Category: {findProduct?.category}</p>
                    <p>Ratings: <StartRatings rating={findProduct?.rating.rate} starRatedColor="yellow" starDimension="20px" starSpacing="1px"/></p>
                    
                </div>
                {/* <button className='bg-blue-400 w-full py-1 rounded-lg font-bold text-gray-600' onClick={()=>handleAddToCart(product)}>Add To Cart</button> */}
                
            </div>           
            
        </div>
    );
};

export default ProductDetails;